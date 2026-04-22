# local-pr-review-server

Agent-agnostic local PR review web server and browser UI.

It serves a Git diff review interface over localhost and hands submitted reviews back to the launcher over stdio.

## Launcher contract

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

## Purpose

Use this package as the shared review server/UI for agent-specific adapters such as pi, OpenCode, Codex, or Cloud Code.
