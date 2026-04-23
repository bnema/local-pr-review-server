import type { ChildProcessWithoutNullStreams } from "node:child_process";
import type {
  ResolveBaseRefInput,
  ReviewAck,
  ServerStartedEvent,
  SpawnReviewServerOptions,
} from "./client-shared.js";

export { formatReviewPrompt } from "./review-prompt.js";
export declare function resolveBaseRef(input: ResolveBaseRefInput): string;
export declare function waitForServerStarted(
  child: ChildProcessWithoutNullStreams,
): Promise<ServerStartedEvent>;

export type PiAdapterArgs = {
  cwd: string;
  sessionID: string;
  baseRef?: string | null;
  serverPath?: string;
};

export type PiReviewUrlArgs = {
  sessionID: string;
  baseRef?: string | null;
};

export declare function piReviewServerOptions(
  args: PiAdapterArgs,
): SpawnReviewServerOptions;
export declare function spawnPiReviewServer(
  args: PiAdapterArgs,
): ChildProcessWithoutNullStreams;
export declare function buildPiReviewUrl(
  started: Partial<ServerStartedEvent> | null | undefined,
  args: PiReviewUrlArgs,
): string;
export declare function writePiReviewAck(
  child: ChildProcessWithoutNullStreams,
  requestId: string,
  ack: ReviewAck,
): void;
