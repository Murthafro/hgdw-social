const RESET = "\x1b[0m";
const DIM = "\x1b[2m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const RED = "\x1b[31m";
const CYAN = "\x1b[36m";

function ts(): string {
  return DIM + new Date().toISOString().slice(11, 19) + RESET;
}

export const log = {
  step(agent: string, msg: string) {
    process.stderr.write(`${ts()} ${CYAN}▸${RESET} ${DIM}[${agent}]${RESET} ${msg}\n`);
  },
  info(agent: string, msg: string) {
    process.stderr.write(`${ts()} ${DIM}  [${agent}] ${msg}${RESET}\n`);
  },
  ok(agent: string, msg: string) {
    process.stderr.write(`${ts()} ${GREEN}✓${RESET} ${DIM}[${agent}]${RESET} ${msg}\n`);
  },
  warn(agent: string, msg: string) {
    process.stderr.write(`${ts()} ${YELLOW}⚠${RESET} ${DIM}[${agent}]${RESET} ${msg}\n`);
  },
  error(agent: string, msg: string) {
    process.stderr.write(`${ts()} ${RED}✗${RESET} ${DIM}[${agent}]${RESET} ${msg}\n`);
  },
};
