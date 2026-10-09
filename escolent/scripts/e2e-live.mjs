import { spawnSync } from "node:child_process";

if (!process.env.PUBLIC_BASE_URL) {
  console.error("PUBLIC_BASE_URL is unset");
  process.exit(1);
}

const result = spawnSync(
  "playwright",
  ["test", "e2e/production.spec.ts", "e2e/value-proof.spec.ts"],
  { stdio: "inherit", env: process.env },
);

process.exit(result.status ?? 1);
