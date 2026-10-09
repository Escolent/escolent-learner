import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = path.dirname(fileURLToPath(import.meta.url));
const demoRoot = path.resolve(root, "../escolent-student-demo");

const modules = [
  "door",
  "inhabit",
  "skill-name",
  "shell",
  "today",
  "learn",
  "practice",
  "progress",
  "graph",
  "entitlement",
  "failure",
  "mastery",
  "llm",
] as const;

function readJson(file: string) {
  return JSON.parse(readFileSync(file, "utf8")) as {
    scripts?: Record<string, string>;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
  };
}

function major(range: string | undefined) {
  const match = range?.match(/(\d+)/);
  return match ? Number(match[1]) : Number.NaN;
}

function walk(dir: string, found: string[] = []) {
  if (!existsSync(dir)) return found;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, found);
    else if (/\.(ts|tsx|js|mjs|cjs)$/.test(entry.name) && !entry.name.endsWith(".test.ts")) {
      found.push(full);
    }
  }
  return found;
}

describe("toolchain", () => {
  it("runs on Node major 20", () => {
    const version = execFileSync("node", ["-v"], { encoding: "utf8" }).trim();
    expect(version).toMatch(/^v20\./);
  });

  it("matches the design-system Next, React, and Tailwind majors", () => {
    const pkg = readJson(path.join(root, "package.json"));
    const demo = readJson(path.join(demoRoot, "package.json"));
    expect(major(pkg.dependencies?.next)).toBe(16);
    expect(major(pkg.dependencies?.react)).toBe(19);
    expect(major(pkg.dependencies?.tailwindcss ?? pkg.devDependencies?.tailwindcss)).toBe(4);
    expect(pkg.dependencies?.next).toBe(demo.dependencies?.next);
    expect(pkg.dependencies?.react).toBe(demo.dependencies?.react);
    expect(pkg.devDependencies?.tailwindcss ?? pkg.dependencies?.tailwindcss).toBe(
      demo.devDependencies?.tailwindcss,
    );
  });

  it("installs the test runner and the year-one libraries", () => {
    const pkg = readJson(path.join(root, "package.json"));
    for (const name of ["vitest", "@playwright/test", "@testing-library/react", "jsdom"]) {
      expect(pkg.devDependencies?.[name], name).toBeTruthy();
    }
    for (const name of ["@supabase/supabase-js", "@supabase/ssr", "libphonenumber-js"]) {
      expect(pkg.dependencies?.[name], name).toBeTruthy();
    }
  });

  it("keeps Stripe, Workbox, service workers, and Upstash out of the app", () => {
    const pkg = readJson(path.join(root, "package.json"));
    const names = [
      ...Object.keys(pkg.dependencies ?? {}),
      ...Object.keys(pkg.devDependencies ?? {}),
    ];
    expect(names.some((name) => name === "stripe" || name.startsWith("@stripe/"))).toBe(false);
    expect(names.some((name) => name.toLowerCase().includes("workbox"))).toBe(false);
    expect(names.some((name) => name.toLowerCase().includes("service-worker") || name === "serwist")).toBe(
      false,
    );
    expect(names.some((name) => name.startsWith("@upstash/"))).toBe(false);

    const sources = walk(root)
      .map((file) => readFileSync(file, "utf8"))
      .join("\n");
    expect(sources).not.toMatch(/serviceWorker\.register|workbox/i);
  });

  it("imports the Anthropic SDK only from escolent/llm", () => {
    const offenders = walk(root).filter((file) => {
      if (file.includes(`${path.sep}llm${path.sep}`)) return false;
      return readFileSync(file, "utf8").includes("@anthropic-ai/sdk");
    });
    expect(offenders).toEqual([]);
  });

  it("runs Vitest locally and keeps the live Playwright project off CI", () => {
    const pkg = readJson(path.join(root, "package.json"));
    expect(pkg.scripts?.test).toMatch(/vitest/);
    expect(pkg.scripts?.["test:e2e"]).toMatch(/playwright/);
    expect(pkg.scripts?.["test:e2e"]).not.toMatch(/production\.spec|value-proof\.spec|test:e2e:live/);
    expect(pkg.scripts?.["test:e2e:live"]).toBeTruthy();
    expect(pkg.scripts?.["test:e2e:live"]).not.toBe(pkg.scripts?.["test:e2e"]);

    const config = readFileSync(path.join(root, "playwright.config.ts"), "utf8");
    expect(config).toMatch(/production\.spec\.ts/);
    expect(config).toMatch(/value-proof\.spec\.ts/);
    expect(config).toMatch(/testIgnore/);

    const env = { ...process.env };
    delete env.PUBLIC_BASE_URL;
    let failed = false;
    try {
      execFileSync("npm", ["run", "test:e2e:live"], {
        cwd: root,
        encoding: "utf8",
        env,
      });
    } catch (error) {
      failed = true;
      const status = (error as { status?: number }).status;
      expect(status).not.toBe(0);
    }
    expect(failed).toBe(true);
  });

  it("ships empty module folders and provider interfaces with no vendor body", () => {
    for (const name of modules) {
      expect(existsSync(path.join(root, name)), name).toBe(true);
    }
    const sources = walk(root).map((file) => readFileSync(file, "utf8")).join("\n");
    expect(sources).toMatch(/interface SmsProvider/);
    expect(sources).toMatch(/interface LlmProvider/);
    expect(sources).toMatch(/interface BillingProvider/);
    expect(sources).toMatch(/interface ReadConnection/);
    expect(sources).not.toMatch(/@polar-sh\/sdk|@aws-sdk\/client-sns/);
  });

  it("names the year-one environment and leaves secrets empty", () => {
    const example = readFileSync(path.join(root, ".env.example"), "utf8");
    for (const name of [
      "PUBLIC_BASE_URL",
      "NEXT_PUBLIC_SUPABASE_URL",
      "NEXT_PUBLIC_SUPABASE_ANON_KEY",
      "SUPABASE_SERVICE_ROLE_KEY",
      "HELPLINE_NUMBER",
      "POLAR_WEBHOOK_SECRET",
      "PHONE_CODE_PEPPER",
      "CREDENTIAL_KEY",
      "ANTHROPIC_MODEL",
      "S3_BUCKET",
      "SNS_SENDER",
      "ELASTICACHE_ENDPOINT",
    ]) {
      expect(example, name).toMatch(new RegExp(`^${name}=$`, "m"));
    }
    expect(example).toMatch(/^AWS_REGION=us-east-1$/m);
    expect(example).toMatch(/^BILLING_PROVIDER=polar$/m);
  });

  it("has the Supabase CLI for local Postgres", () => {
    const version = execFileSync("supabase", ["--version"], { encoding: "utf8" });
    expect(version.trim().length).toBeGreaterThan(0);
  });
});
