import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  projects: [
    {
      name: "local",
      testIgnore: ["**/production.spec.ts", "**/value-proof.spec.ts"],
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
