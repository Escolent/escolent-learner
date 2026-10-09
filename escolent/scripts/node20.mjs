import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";

const candidates = [
  process.versions.node.split(".")[0] === "20" ? path.dirname(process.execPath) : "",
  "/opt/homebrew/opt/node@20/bin",
  "/usr/local/opt/node@20/bin",
].filter(Boolean);

const bin = candidates.find((dir) => existsSync(path.join(dir, "node")));

if (!bin) {
  console.error("Node 20 is required.");
  process.exit(1);
}

const result = spawnSync(process.argv[2], process.argv.slice(3), {
  stdio: "inherit",
  env: {
    ...process.env,
    PATH: `${bin}${path.delimiter}${process.env.PATH ?? ""}`,
  },
});

process.exit(result.status ?? 1);
