[![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/actions-up-action?sort=semver&filter=!v*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/actions-up-action/tags)
[![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/actions-up-action?sort=semver&filter=!v*.*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/actions-up-action/releases)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/actions-up-action?logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/actions-up-action/releases/latest)
[![GitHub Dist Size](https://img.shields.io/github/size/cssnr/actions-up-action/dist%2Findex.js?logo=bookstack&logoColor=white&label=dist%20size)](https://github.com/cssnr/actions-up-action/blob/master/src)
[![Workflow Release](https://img.shields.io/github/actions/workflow/status/cssnr/actions-up-action/release.yaml?logo=cachet&label=release)](https://github.com/cssnr/actions-up-action/actions/workflows/release.yaml)
[![Workflow Test](https://img.shields.io/github/actions/workflow/status/cssnr/actions-up-action/test.yaml?logo=cachet&label=test)](https://github.com/cssnr/actions-up-action/actions/workflows/test.yaml)
[![Workflow lint](https://img.shields.io/github/actions/workflow/status/cssnr/actions-up-action/lint.yaml?logo=cachet&label=lint)](https://github.com/cssnr/actions-up-action/actions/workflows/lint.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cssnr_actions-up-action&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=cssnr_actions-up-action)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/actions-up-action?logo=github&label=updated)](https://github.com/cssnr/actions-up-action/pulse)
[![Codeberg Last Commit](https://img.shields.io/gitea/last-commit/cssnr/actions-up-action/master?gitea_url=https%3A%2F%2Fcodeberg.org%2F&logo=codeberg&logoColor=white&label=updated)](https://codeberg.org/cssnr/actions-up-action)
[![GitHub Contributors](https://img.shields.io/github/contributors-anon/cssnr/actions-up-action?logo=github)](https://github.com/cssnr/actions-up-action/graphs/contributors)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/cssnr/actions-up-action?logo=bookstack&logoColor=white&label=repo%20size)](https://github.com/cssnr/actions-up-action?tab=readme-ov-file#readme)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/actions-up-action?logo=htmx)](https://github.com/cssnr/actions-up-action)
[![GitHub Forks](https://img.shields.io/github/forks/cssnr/actions-up-action?style=flat&logo=github)](https://github.com/cssnr/actions-up-action/forks)
[![GitHub Discussions](https://img.shields.io/github/discussions/cssnr/actions-up-action?logo=github)](https://github.com/cssnr/actions-up-action/discussions)
[![GitHub Repo Stars](https://img.shields.io/github/stars/cssnr/actions-up-action?style=flat&logo=github)](https://github.com/cssnr/actions-up-action/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=support)](https://ko-fi.com/cssnr)

# Actions Up Action

- [Features](#Features)
  - [Planned](#Planned)
- [Inputs](#Inputs)
  - [Permissions](#Permissions)
- [Outputs](#Outputs)
- [Examples](#Examples)
- [Tags](#Tags)
- [Support](#Support)
- [Contributing](#Contributing)

Check Actions for Updates with [actions-up](https://github.com/azat-io/actions-up) and report out-of-date actions in Pull Requests, Workflow Outputs, or via the Job Status.

Generates a customizable table of available updates.
Post the table to a comment on a Pull Request.
Keep the table up-to-date on the comment as you update make changes.
Set a boolean output indicating if updates are available.
Sets a JSON output for actions scanned and available updates.
Sets a string output with the generated Markdown table.

```yaml
- name: 'Actions Up'
  uses: cssnr/actions-up-action@master
```

---

Scanned 8 workflows, checked 12 actions and found 6 updates.

<details open><summary>Results</summary>

| Name                                                                                    | File                                                                                                              | Breaking | Latest |
| :-------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- | :------: | :----: |
| [cssnr/check-build-action](https://github.com/cssnr/check-build-action)                 | [check-build.yaml](https://github.com/cssnr/actions-up-action/blob/master/.github/workflows/check-build.yaml#L48) |    -     | v1.1.0 |
| [cssnr/label-creator-action](https://github.com/cssnr/label-creator-action)             | [labeler.yaml](https://github.com/cssnr/actions-up-action/blob/master/.github/workflows/labeler.yaml#L44)         |    -     | v1.0.2 |
| [cssnr/mirror-repository-action](https://github.com/cssnr/mirror-repository-action)     | [mirror.yaml](https://github.com/cssnr/actions-up-action/blob/master/.github/workflows/mirror.yaml#L26)           |    -     | v1.2.0 |
| [cssnr/update-version-tags-action](https://github.com/cssnr/update-version-tags-action) | [release.yaml](https://github.com/cssnr/actions-up-action/blob/master/.github/workflows/release.yaml#L19)         |    -     | v1.3.1 |
| [cssnr/package-changelog-action](https://github.com/cssnr/package-changelog-action)     | [release.yaml](https://github.com/cssnr/actions-up-action/blob/master/.github/workflows/release.yaml#L36)         |    ⚠️    | v2.0.0 |
| [cssnr/update-version-tags-action](https://github.com/cssnr/update-version-tags-action) | [tags.yaml](https://github.com/cssnr/actions-up-action/blob/master/.github/workflows/tags.yaml#L21)               |    -     | v1.3.1 |

</details>

---

> [!NOTE]  
> This action is under active development.  
> Please [request any features](https://github.com/cssnr/actions-up-action/discussions/categories/feature-requests)
> you would like to see and [report any issues](https://github.com/cssnr/actions-up-action/issues) you find.

## Features

- Report actions with updates.
- Exclude action names by regex.
- Sets outputs with results.
- Comment on PR with results table.
- Customize table columns and order.
- Post results open or collapsed.
- Set the comment heading text.

### Planned

- Exclude action files by name.

If you would like to see a new feature, please [submit a feature request](https://github.com/cssnr/actions-up-action/discussions/categories/feature-requests).

Want to check outdated npm packages on a pull? [cssnr/npm-outdated-action](https://github.com/cssnr/npm-outdated-action?tab=readme-ov-file#readme)  
Want to show package changes on release notes? [cssnr/package-changelog-action](https://github.com/cssnr/package-changelog-action?tab=readme-ov-file#readme)  
Want to automatically updated tags on release? [cssnr/update-version-tags-action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)

## Inputs

| Input               | Default&nbsp;Value | Description&nbsp;of&nbsp;Input&nbsp;Value |
| :------------------ | :----------------- | :---------------------------------------- |
| [path](#path)       | `.`                | Actions Scan Path                         |
| [heading](#heading) | `### Actions Up`   | Comment Heading                           |
| [open](#open)       | `true`             | Details Open by Default                   |
| [columns](#columns) | `n,f,b,l`          | Results Table Columns                     |
| [exclude](#exclude) | -                  | List of Action Regex to Exclude           |
| [files](#files)     | -                  | List of File Names to Exclude             |
| [fail](#fail)       | `false`            | Fail Job if Updates are Found             |
| [summary](#summary) | `true`             | Add Workflow Job Summary                  |
| [token](#token)     | `github.token`     | For use with a PAT                        |

#### path

Path to scan for actions. The default path should find everything checked out.

Default: `.`

#### heading

Set the heading of the PR comment.

Default: `### Actions Up`

#### open

The results are wrapped in a details/summary. Set this to `true` to have the details open by default.

Default: `true`

#### columns

Results Columns and Order. Available Columns.

| Key | Column         | Description     |
| :-: | :------------- | :-------------- |
| `n` | action.name    | Action Name     |
| `f` | action.file    | Action File     |
| `b` | isBreaking     | Is Breaking     |
| `c` | currentVersion | Current Version |
| `l` | latestVersion  | Latest Version  |
| `s` | latestSha      | Latest SHA Hash |

Default: `n,f,b,l`

#### exclude

CSV or Newline List of Action Regex to Exclude.
See [azat-io/actions-up#cli-excludes](https://github.com/azat-io/actions-up?tab=readme-ov-file#cli-excludes) for more details.

<details><summary>View CSV and Newline Examples</summary>

CSV. You can use quotes on single-line inputs because YAML removes the quotes around the string.

```yaml
exclude: 'actions/.*, docker/.*'
```

Multi-Line. You can NOT use quotes on multi-line inputs because YAML does NOT remove the quotes.

```yaml
exclude: |
  actions/.*
  docker/.*
```

</details>

#### files

CSV or Newline List of File Names to Exclude.
All actions in these files will be excluded.

<details><summary>View CSV and Newline Examples</summary>

CSV. You can use quotes on single-line inputs because YAML removes the quotes around the string.

```yaml
files: 'lint.yaml, release.yaml'
```

Multi-Line. You can NOT use quotes on multi-line inputs because YAML does NOT remove the quotes.

```yaml
files: |
  lint.yaml
  release.yaml
```

</details>

#### fail

Set this to `true` to fail the job if updates are found.

Default: `### Actions Up`

#### summary

Add a Job Summary to the Workflow Run. Set to `false` to disable this.

Default: `true`

#### token

Allows optionally setting a PAT. The workflow token is automatically passed.

Default: `github.token`

---

You can also view more [Examples](#Examples) below.

### Permissions

This action requires the following permissions to add pull request comments:

```yaml
permissions:
  pull-requests: write
```

Permissions documentation for [Workflows](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/controlling-permissions-for-github_token) and [Actions](https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication).

## Outputs

| Output     | Description&nbsp;of&nbsp;the&nbsp;Output |
| :--------- | :--------------------------------------- |
| hasUpdates | If Updates `true` else `false`           |
| actions    | Actions Checked                          |
| updates    | Available Updates                        |
| markdown   | Markdown Results                         |

<details><summary>View Data Structure: actions</summary>

```json
[
  {
    "type": "external",
    "name": "actions/checkout",
    "version": "v5",
    "file": "/home/runner/work/actions-up-action/actions-up-action/.github/workflows/check-build.yaml",
    "line": 33
  }
]
```

</details>

<details><summary>View Data Structure: updates</summary>

```json
[
  {
    "currentVersion": "v1",
    "latestVersion": "v1.15.4",
    "isBreaking": false,
    "latestSha": "11a0bfe3b50977e38aa2bd4a4ebd296415e83c19",
    "hasUpdate": true,
    "action": {
      "type": "external",
      "name": "sarisia/actions-status-discord",
      "version": "v1",
      "file": "/home/runner/work/actions-up-action/actions-up-action/.github/workflows/release.yaml",
      "line": 40
    }
  }
]
```

</details>

## Examples

💡 _Click on an example heading to expand or collapse the example._

<details open><summary>Basic</summary>

```yaml
- name: 'Actions Up'
  uses: cssnr/actions-up-action@master
```

</details>
<details><summary>With Excludes</summary>

```yaml
- name: 'Actions Up'
  uses: cssnr/actions-up-action@master
  with:
    excludes: |
      actions/.*
      docker/.*
```

</details>
<details><summary>Custom Columns</summary>

```yaml
- name: 'Actions Up'
  uses: cssnr/actions-up-action@master
  with:
    excludes: 'actions/.*,docker/.*'
    columns: 'n,l,s'
```

</details>
<details><summary>Pull Request Target Workflow</summary>

```yaml
name: 'Pull'

on:
  pull_request_target:

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  pull:
    name: 'Pull'
    runs-on: ubuntu-latest
    timeout-minutes: 5

    permissions:
      pull-requests: write
      issues: write

    steps:
      - name: 'Checkout Pull'
        uses: actions/checkout@08c6903cd8c0fde910a37f88322edcfb5dd907a8 # v5.0.0
        with:
          ref: ${{ github.event.pull_request.head.sha }}

      - name: 'Actions Up'
        uses: cssnr/actions-up-action@master
```

</details>

## Tags

The following rolling [tags](https://github.com/cssnr/actions-up-action/tags) are maintained.

| Version&nbsp;Tag                                                                                                                                                                                                   | Rolling | Bugs | Feat. |   Name    |  Target  | Example  |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :--: | :---: | :-------: | :------: | :------- |
| [![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/actions-up-action?sort=semver&filter=!v*.*&style=for-the-badge&label=%20&color=44cc10)](https://github.com/cssnr/actions-up-action/releases/latest) |   ✅    |  ✅  |  ✅   | **Major** | `vN.x.x` | `vN`     |
| [![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/actions-up-action?sort=semver&filter=!v*.*.*&style=for-the-badge&label=%20&color=blue)](https://github.com/cssnr/actions-up-action/releases/latest) |   ✅    |  ✅  |  ❌   | **Minor** | `vN.N.x` | `vN.N`   |
| [![GitHub Release](https://img.shields.io/github/v/release/cssnr/actions-up-action?style=for-the-badge&label=%20&color=red)](https://github.com/cssnr/actions-up-action/releases/latest)                           |   ❌    |  ❌  |  ❌   | **Micro** | `vN.N.N` | `vN.N.N` |

You can view the release notes for each version on the [releases](https://github.com/cssnr/actions-up-action/releases) page.

The **Major** tag is recommended. It is the most up-to-date and always backwards compatible.
Breaking changes would result in a **Major** version bump. At a minimum you should use a **Minor** tag.

# Support

For general help or to request a feature, see:

- Q&A Discussion: https://github.com/cssnr/actions-up-action/discussions/categories/q-a
- Request a Feature: https://github.com/cssnr/actions-up-action/discussions/categories/feature-requests

If you are experiencing an issue/bug or getting unexpected results, you can:

- Report an Issue: https://github.com/cssnr/actions-up-action/issues
- Chat with us on Discord: https://discord.gg/wXy6m2X8wY
- Provide General Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback/?app=Action%20Update)

For more information, see the CSSNR [SUPPORT.md](https://github.com/cssnr/.github/blob/master/.github/SUPPORT.md#support).

# Contributing

If you would like to submit a PR, please review the [CONTRIBUTING.md](#contributing-ov-file).

Please consider making a donation to support the development of this project
and [additional](https://cssnr.com/) open source projects.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cssnr)

Additionally, you can support other GitHub Actions I have published:

- [Stack Deploy Action](https://github.com/cssnr/stack-deploy-action?tab=readme-ov-file#readme)
- [Portainer Stack Deploy Action](https://github.com/cssnr/portainer-stack-deploy-action?tab=readme-ov-file#readme)
- [Docker Context Action](https://github.com/cssnr/docker-context-action?tab=readme-ov-file#readme)
- [VirusTotal Action](https://github.com/cssnr/virustotal-action?tab=readme-ov-file#readme)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)
- [Docker Tags Action](https://github.com/cssnr/docker-tags-action?tab=readme-ov-file#readme)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action?tab=readme-ov-file#readme)
- [JSON Key Value Check Action](https://github.com/cssnr/json-key-value-check-action?tab=readme-ov-file#readme)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
- [Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action?tab=readme-ov-file#readme)
- [Package Changelog Action](https://github.com/cssnr/package-changelog-action?tab=readme-ov-file#readme)
- [NPM Outdated Check Action](https://github.com/cssnr/npm-outdated-action?tab=readme-ov-file#readme)
- [Label Creator Action](https://github.com/cssnr/label-creator-action?tab=readme-ov-file#readme)
- [Algolia Crawler Action](https://github.com/cssnr/algolia-crawler-action?tab=readme-ov-file#readme)
- [Upload Release Action](https://github.com/cssnr/upload-release-action?tab=readme-ov-file#readme)
- [Check Build Action](https://github.com/cssnr/check-build-action?tab=readme-ov-file#readme)
- [Web Request Action](https://github.com/cssnr/web-request-action?tab=readme-ov-file#readme)
- [Get Commit Action](https://github.com/cssnr/get-commit-action?tab=readme-ov-file#readme)

<details><summary>❔ Unpublished Actions</summary>

These actions are not published on the Marketplace, but may be useful.

- [cssnr/draft-release-action](https://github.com/cssnr/draft-release-action?tab=readme-ov-file#readme) - Keep a draft release ready to publish.
- [cssnr/env-json-action](https://github.com/cssnr/env-json-action?tab=readme-ov-file#readme) - Convert env file to json or vice versa.
- [cssnr/push-artifacts-action](https://github.com/cssnr/push-artifacts-action?tab=readme-ov-file#readme) - Sync files to a remote host with rsync.
- [smashedr/update-release-notes-action](https://github.com/smashedr/update-release-notes-action?tab=readme-ov-file#readme) - Update release notes.
- [smashedr/combine-release-notes-action](https://github.com/smashedr/combine-release-notes-action?tab=readme-ov-file#readme) - Combine release notes.

---

</details>

<details><summary>📝 Template Actions</summary>

These are basic action templates that I use for creating new actions.

- [js-test-action](https://github.com/smashedr/js-test-action?tab=readme-ov-file#readme) - JavaScript
- [py-test-action](https://github.com/smashedr/py-test-action?tab=readme-ov-file#readme) - Python
- [ts-test-action](https://github.com/smashedr/ts-test-action?tab=readme-ov-file#readme) - TypeScript
- [docker-test-action](https://github.com/smashedr/docker-test-action?tab=readme-ov-file#readme) - Docker Image

Note: The `docker-test-action` builds, runs and pushes images to [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

---

</details>

For a full list of current projects to support visit: [https://cssnr.github.io/](https://cssnr.github.io/)
