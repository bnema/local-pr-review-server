export { formatReviewPrompt } from "./review-prompt.js";

import {
	buildReviewUrl,
	defaultReviewServerPath,
	resolveBaseRef,
	spawnReviewServer,
	waitForServerStarted,
	writeReviewAck,
} from "./client-shared.js";

export { resolveBaseRef, waitForServerStarted };

export function piReviewServerOptions(args) {
	const baseRef =
		args.baseRef ||
		resolveBaseRef({
			cwd: args.cwd,
			explicitBase: null,
			currentBranch: null,
			upstreamBranch: null,
		});

	return {
		cwd: args.cwd,
		serverPath: args.serverPath || defaultReviewServerPath,
		env: {
			LOCAL_PR_REVIEW_REPO: args.cwd,
			LOCAL_PR_REVIEW_BASE: baseRef,
			LOCAL_PR_REVIEW_CONTEXT_ID: args.sessionID,
		},
		stdio: ["pipe", "pipe", "pipe"],
	};
}

export function spawnPiReviewServer(args) {
	return spawnReviewServer(piReviewServerOptions(args));
}

export function buildPiReviewUrl(started, args) {
	return buildReviewUrl(started, {
		context: args.sessionID,
		base: args.baseRef,
	});
}

export function writePiReviewAck(child, requestId, ack) {
	writeReviewAck(child, requestId, ack);
}
