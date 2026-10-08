## Secrets and keys

| **#** | **Check**                                                                                        | **Yes / No / N/A** | **Evidence**                                                                                                   |
| ----- | ------------------------------------------------------------------------------------------------ | ------------------ | -------------------------------------------------------------------------------------------------------------- |
| 1     | No API key, token or password in our HTML, CSS or JavaScript                                     | **Yes**            | We checked the HTML, CSS and JavaScript. No API keys, tokens or passwords are included.                        |
| 2     | Any third-party key we use is restricted to our domain in that service's dashboard               | **N/A**            | We do not use any third-party API keys.                                                                        |
| 3     | Git history is clean: we searched `git log -p` for password, secret, api key and token           | **N/A**            | We do not use or have any API keys, tokens, passwords or secrets in the project.                               |
| 4     | Any key that was ever committed has been rotated                                                 | **N/A**            | No API keys or secrets have ever been used or committed.                                                       |
| 5     | We understand that a key in front-end code is visible through view source, so it is never hidden | **Yes**            | We understand that front-end code is visible to users, so we do not place sensitive keys or credentials in it. |

## GitHub Actions

If your site has no workflows, mark every row N/A and say so once.

| **#** | **Check**                                                                               | **Yes / No / N/A** | **Evidence**                                                 |
| ----- | --------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------ |
| 6     | No secret value is written literally in any workflow YAML file                          | **N/A**            | No GitHub Actions workflows are used.                        |
| 7     | No workflow step echoes or dumps a secret, and we opened a recent run's log to confirm  | **N/A**            | No GitHub Actions workflows are used.                        |
| 8     | Third-party actions are pinned to a commit SHA, not a moveable tag                      | **N/A**            | No GitHub Actions workflows or third-party Actions are used. |
| 9     | Our Pages deploy uses the automatic token, with no personal access token created for it | **N/A**            | No GitHub Actions deployment workflow is used.               |
| 10    | Secret scanning and push protection are enabled on the repository                       | **N/A**            | No secrets or API keys are used in the project.              |

## Server, database and access

Expect these to be N/A for a static site. Say so, and say why.

| **#** | **Check**                                                                                     | **Yes / No / N/A** | **Evidence**                                             |
| ----- | --------------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------- |
| 11    | The site has no server or database of its own                                                 | **N/A**            | Static site on GitHub Pages with no backend or database. |
| 12    | If there is any backend: it has an access layer and its credentials are environment variables | **N/A**            | No backend is used.                                      |
| 13    | If there is any stored data: it is invented, not real people's data                           | **N/A**            | The website does not store user data.                    |

## Content and privacy

| **#** | **Check**                                                                                        | **Yes / No / N/A** | **Evidence**                                                                                 |
| ----- | ------------------------------------------------------------------------------------------------ | ------------------ | -------------------------------------------------------------------------------------------- |
| 14    | No student number, personal email, phone number or home address on any page or in the repository | **Yes**            | No student numbers, personal email addresses, phone numbers or home addresses are published. |
| 15    | Every group member agreed to whatever is published about them                                    | **Yes**            | All group members agreed to the information published about them.                            |
| 16    | Contact is through a form or a professional email we are happy to publish                        | **N/A**            | The website does not collect visitor contact information.                                    |
| 17    | Any text a visitor can type is escaped before it is put back on the page                         | **Yes**            | User input is handled safely with `textContent` and is not inserted as HTML.                 |
| 18    | Images, fonts and audio are ours, licensed, or credited                                          | **N/A**            | No external images, custom fonts or audio are used.                                          |
| 19    | External links go where they say they go                                                         | **N/A**            | The website does not use external links for its functionality.                               |
| 20    | Repository visibility is deliberate, and we checked it after our last push                       | **Yes**            | The repository is public and its visibility was checked after the final push.                |
