import * as core from '@actions/core'
import * as github from '@actions/github'

import { createHash } from 'node:crypto'
import { markdownTable } from 'markdown-table'
import { scanGitHubActions, checkUpdates } from 'actions-up'

import { Pull } from './api.js'

const maps = {
    n: { align: 'l', col: 'Name' },
    f: { align: 'l', col: 'File' },
    b: { align: 'c', col: 'Breaking' },
    c: { align: 'c', col: 'Current' },
    l: { align: 'c', col: 'Latest' },
    s: { align: 'l', col: 'Hash' },
}

;(async () => {
    try {
        core.info(`🏳️ Starting Actions Up`)

        // Debug
        core.startGroup('Debug: github.context')
        console.log(github.context)
        core.endGroup() // Debug github.context
        core.startGroup('Debug: process.env')
        console.log(process.env)
        core.endGroup() // Debug process.env

        // Inputs
        const inputs = getInputs()
        core.startGroup('Inputs')
        console.log(inputs)
        process.env['GITHUB_TOKEN'] = inputs.token
        core.endGroup() // Inputs

        // Scan Result
        core.startGroup(`Scan Result: \u001b[36;1m${inputs.path}`)
        const scanResult = await scanGitHubActions(inputs.path)
        console.log(scanResult)
        core.endGroup() // Scan Result

        let actions = scanResult.actions
        console.log('actions.length:', actions.length)

        if (inputs.exclude) {
            core.startGroup('Actions - excludes')
            const excludes = inputs.exclude.split(/[,\n]/)
            console.log('excludes:', excludes)
            actions = scanResult.actions.filter((action) => {
                return !excludes.some((pattern) => new RegExp(pattern).test(action.name))
            })
            console.log(actions)
            core.endGroup() // Actions - excludes

            console.log('actions.length:', actions.length)
        } else {
            core.info('No excludes to process...')
        }

        // Updates
        core.startGroup('All Updates')
        const actionUpdates = await checkUpdates(actions)
        console.log(actionUpdates)
        core.endGroup() // All Updates

        console.log('actionUpdates.length:', actionUpdates.length)

        core.startGroup('Updates')
        const updates = actionUpdates.filter((item) => item.hasUpdate)
        console.log(updates)
        core.endGroup() // Updates

        console.log('updates.length:', updates.length)

        // Table
        core.startGroup('Table')
        const data = genTableData(inputs, updates)
        console.log(data)
        core.endGroup() // Table

        // Markdown
        core.startGroup('Markdown')
        const markdown = genMarkdown(inputs, scanResult, actions, data)
        console.log(markdown)
        core.endGroup() // Markdown

        // Update PR
        const hasUpdates = !!updates.length
        console.log('hasUpdates:', hasUpdates)
        console.log('eventName:', github.context.eventName)
        console.log('comments:', github.context.payload.pull_request?.comments)

        const events = ['pull_request', 'pull_request_target']
        const isPR = events.includes(github.context.eventName)
        console.log('isPR:', isPR)

        let comment
        if (isPR && (github.context.payload.pull_request?.comments || hasUpdates)) {
            core.startGroup(`Processing PR: ${github.context.payload.number}`)
            comment = await updatePull(inputs, markdown, hasUpdates)
            core.endGroup() // Processing PR
        } else {
            console.log('Not PR AND (No Comments OR No Updates)')
        }

        // Outputs
        core.info('📩 Setting Outputs')
        core.setOutput('hasUpdates', hasUpdates)
        core.setOutput('actions', actions)
        core.setOutput('updates', updates)
        core.setOutput('markdown', markdown)

        // Summary
        if (inputs.summary) {
            core.info('📝 Writing Job Summary')
            try {
                await addSummary(inputs, markdown, comment, actions, updates)
            } catch (e) {
                console.log(e)
                core.error(`Error writing Job Summary: ${e.message}`)
            }
        }

        // Finish
        if (inputs.fail && hasUpdates) {
            core.info(`⛔ \u001b[31;1mUpdates Found`)
            core.setFailed('Updates found and fail is set to true.')
        } else {
            core.info(`✅ \u001b[32;1mFinished Success`)
        }
    } catch (e) {
        core.debug(e)
        core.info(e.message)
        core.setFailed(e.message)
    }
})()

/**
 * Update PR
 * @param {Inputs} inputs
 * @param {string} markdown
 * @param {boolean} changes
 * @return {Promise<Object|undefined>}
 */
async function updatePull(inputs, markdown, changes) {
    if (!github.context.payload.pull_request?.number) {
        throw new Error('Unable to determine the Pull Request number!')
    }

    const newHex = createHash('sha256').update(markdown).digest('hex')
    const id = `<!-- actions-up-action ${newHex} -->`
    const body = `${id}\n${markdown}`

    const pull = new Pull(github.context, inputs.token)

    // Step 1 - Check for Current Comment
    let comment = await pull.getComment('<!-- actions-up-action')
    // console.log('comment:', comment)
    if (!comment && !changes) {
        console.log('No comment AND no changes, skipping...')
        return comment
    }

    // Step 2 - Update Comment: Skip, Edit, or Add
    if (comment) {
        // Step 2A - Comment Found ...
        console.log('Comment Found:', comment.id)
        const oldHex = comment.body.split(' ', 3)[2]
        console.log('oldHex:', oldHex)
        console.log('newHex:', newHex)
        if (oldHex === newHex) {
            // Step 2A-1 - Valid Hex - Skip
            console.log('Comment Valid Hex - Skip')
            return comment
        } else {
            // Step 2A-2 - Invalid Hex - Edit
            console.log('Comment Invalid Hex - Edit')
            const response = await pull.updateComment(comment.id, body)
            // TODO: Add error handling
            console.log('response.status:', response.status)
            return comment
        }
    } else {
        // Step 2B - Not Found - Add
        console.log('Not Found - Add')
        const response = await pull.createComment(body)
        // TODO: Add error handling
        console.log('response.status:', response.status)
        return response.data
    }
}

/**
 * Generate Table Data
 * @param {Inputs} inputs
 * @param updates
 * @return {*[]}
 */
function genTableData(inputs, updates) {
    const results = []
    for (const update of updates) {
        const fileName = update.action.file.split('.github/workflows/')[1]
        core.debug(`fileName: ${fileName}`)

        let url
        if (github.context.payload.pull_request?.head) {
            console.log('Generating File Links to Pull Request')
            url = `${github.context.payload.pull_request.head.repo.html_url}/blob/${github.context.payload.pull_request.head.ref}/.github/workflows/${fileName}#L${update.action.line}`
        } else {
            console.log('Generating File Links to Branch')
            url = `${github.context.payload.repository.html_url}/blob/${process.env.GITHUB_REF_NAME}/.github/workflows/${fileName}#L${update.action.line}`
        }
        core.debug(`url: ${url}`)

        const pkg = {
            n: `[${update.action.name}](https://github.com/${update.action.name})`,
            f: `[${fileName}](${url})`,
            b: update.isBreaking ? '⚠️' : '-',
            c: update.currentVersion,
            l: update.latestVersion,
            s: update.latestSha,
        }
        // console.log('pkg:', pkg)
        const result = []
        inputs.columns.forEach((k) => result.push(pkg[k]))
        results.push(result)
    }
    return results
}

/**
 * Generate Markdown
 * @param {Inputs} inputs
 * @param scanResult
 * @param {*[]} actions
 * @param {*[]} data
 * @return {string}
 */
function genMarkdown(inputs, scanResult, actions, data) {
    let md = `${inputs.heading}\n\n`
    md += `Scanned ${scanResult.workflows.size} workflows, checked ${actions.length} actions and found ${data.length} updates.\n\n`

    if (data.length) {
        const [cols, align] = [[], []]
        inputs.columns.forEach((c) => cols.push(maps[c].col))
        inputs.columns.forEach((c) => align.push(maps[c].align))
        // console.log('cols, align:', cols, align)

        const open = inputs.open ? ' open' : ''
        const table = markdownTable([cols, ...data], { align })
        // console.log('table:\n', table)
        md += `<details${open}><summary>Results</summary>\n\n${table}\n\n</details>\n\n`
    } else {
        core.debug('No data')
        md += `✅ All Checked Actions Up-To-Date\n`
    }

    return md
}

/**
 * Add Summary
 * @param {Inputs} inputs
 * @param {string} markdown
 * @param {object} comment
 * @param {array} actions
 * @param {array} updates
 * @return {Promise<void>}
 */
async function addSummary(inputs, markdown, comment, actions, updates) {
    core.summary.addRaw('## Actions Up\n\n')
    if (comment) {
        const url = `https://github.com/${github.context.repo.owner}/${github.context.repo.repo}/pull/${github.context.payload.number}#issuecomment-${comment.id}`
        core.summary.addRaw(
            `PR Comment: [#${github.context.payload.number}](${url}) \n\n`
        )
    } else {
        core.summary.addRaw('No PR Comment Found.\n\n')
    }

    core.summary.addRaw(`---\n\n${markdown}\n\n---\n\n`)

    if (actions.length) {
        core.summary.addRaw('<details><summary>Actions</summary>')
        core.summary.addCodeBlock(JSON.stringify(actions, null, 2), 'json')
        core.summary.addRaw('</details>\n\n')
    } else {
        core.summary.addRaw('⚠️ No Actions Found.\n')
    }
    // core.summary.addEOL()
    if (updates.length) {
        core.summary.addRaw('<details><summary>Updates</summary>')
        core.summary.addCodeBlock(JSON.stringify(updates, null, 2), 'json')
        core.summary.addRaw('</details>\n\n')
    } else {
        core.summary.addRaw('✅ No Updates.\n')
    }

    delete inputs.token
    const yaml = Object.entries(inputs)
        .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
        .join('\n')
    core.summary.addRaw('<details><summary>Inputs</summary>')
    core.summary.addCodeBlock(yaml, 'yaml')
    core.summary.addRaw('</details>\n')

    const text = 'View Documentation, Report Issues or Request Features'
    const link = 'https://github.com/cssnr/actions-up-action'
    core.summary.addRaw(`\n[${text}](${link}?tab=readme-ov-file#readme)\n\n---`)
    await core.summary.write()
}

/**
 * Get Inputs
 * @typedef {object} Inputs
 * @property {string} path
 * @property {string} heading
 * @property {boolean} open
 * @property {string[]} columns
 * @property {string} exclude
 * @property {boolean} fail
 * @property {boolean} summary
 * @property {string} token
 * @return {Inputs}
 */
function getInputs() {
    return {
        path: core.getInput('path', { required: true }),
        heading: core.getInput('heading'),
        open: core.getBooleanInput('open'),
        columns: core.getInput('columns').split(','),
        exclude: core.getInput('exclude'),
        fail: core.getBooleanInput('fail'),
        summary: core.getBooleanInput('summary'),
        token: core.getInput('token', { required: true }),
    }
}
