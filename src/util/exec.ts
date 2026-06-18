import { execFile } from "node:child_process";

/** Run a command and return stdout. Rejects on non-zero exit. */
export function run(cmd: string, args: string[], opts?: { cwd?: string; timeout?: number }): Promise<string> {
  return new Promise((resolve, reject) => {
    execFile(cmd, args, { cwd: opts?.cwd, timeout: opts?.timeout ?? 120_000, maxBuffer: 50 * 1024 * 1024 }, (err, stdout, stderr) => {
      if (err) {
        const msg = `${cmd} ${args.join(" ")} failed: ${err.message}\n${stderr}`;
        reject(new Error(msg));
      } else {
        resolve(stdout);
      }
    });
  });
}
