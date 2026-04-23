import type { ChildProcessWithoutNullStreams } from "node:child_process";

export type ReviewAck =
  | { ok: true; message: string }
  | { ok: false; error: string };

export type ServerStartedEvent = {
  type: "server-started";
  port: number;
  url: string;
  token: string;
};

export type ReviewSubmittedEvent = {
  type: "review-submitted";
  requestId: string;
  payload: unknown;
};

export type ServerEvent = ServerStartedEvent | ReviewSubmittedEvent;

export type ResolveBaseRefInput = {
  cwd: string;
  explicitBase?: string | null;
  currentBranch?: string | null;
  upstreamBranch?: string | null;
};

export type SpawnReviewServerOptions = {
  cwd: string;
  serverPath?: string;
  env?: NodeJS.ProcessEnv;
  stdio?: ["pipe", "pipe", "pipe"];
};

export declare const defaultReviewServerPath: string;
export declare function resolveBaseRef(input: ResolveBaseRefInput): string;
export declare function parseServerEventLine(line: string): ServerEvent | null;
export declare function waitForServerStarted(
  child: ChildProcessWithoutNullStreams,
): Promise<ServerStartedEvent>;
export declare function buildReviewUrl(
  started: Partial<ServerStartedEvent> | null | undefined,
  params?: Record<string, string | number | null | undefined>,
): string;
export declare function spawnReviewServer(
  options: SpawnReviewServerOptions,
): ChildProcessWithoutNullStreams;
export declare function writeReviewAck(
  child: ChildProcessWithoutNullStreams,
  requestId: string,
  ack: ReviewAck,
): void;
