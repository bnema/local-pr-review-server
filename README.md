# local-pr-review-server

Shared local PR review server, browser UI, and client adapters for OpenCode and pi.

It serves a Git diff review interface over localhost and hands submitted reviews back to the launcher over stdio. After a successful submission, the UI can keep editing, reset the draft for another pass, or shut the server down explicitly.

## Client adapters

This package exposes two explicit client integrations:

- `local-pr-review-server/opencode.js` — OpenCode-specific launch helpers and URL shaping
- `local-pr-review-server/pi.js` — pi-specific launch helpers and URL shaping

Both adapters share the same server/UI contract, but they can diverge where the host client needs different context or browser URL behavior.

## Pi package

This repo is also the installable pi package for manual local-review commands.

Install globally:

```bash
pi install git:github.com/bnema/local-pr-review-server@<release-tag>
```

Install for the current project only:

```bash
pi install -l git:github.com/bnema/local-pr-review-server@<release-tag>
```

After installation, pi gets these commands:

- `/review-start`
- `/review-start <base-ref>`
- `/review-status`
- `/review-stop`

## Shared launcher contract

Environment variables:

- `LOCAL_PR_REVIEW_REPO` — Git repository path to diff
- `LOCAL_PR_REVIEW_BASE` — base ref used to compute the merge base
- `LOCAL_PR_REVIEW_CONTEXT_ID` — optional context identifier echoed into the URL and bootstrap payload
- `LOCAL_PR_REVIEW_IDLE_TIMEOUT_MS` — optional idle timeout in milliseconds

Stdout events:

- `server-started` — `{ type, port, url, token }`
- `review-submitted` — `{ type, requestId, payload }`

Stdin acknowledgements:

- `review-ack` — `{ type: "review-ack", requestId, ok, message? , error? }`

## Development

Run the adapter tests:

```bash
npm test
```

Typecheck the pi extension:

```bash
npm run typecheck
```

## Releases

See [`RELEASING.md`](./RELEASING.md) for the tag and release workflow.
