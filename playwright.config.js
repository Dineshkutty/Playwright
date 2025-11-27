import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./src/tests",
  retries: 2,
  reporter: [
    ["list"], // default console output: shows passed/failed/errors
    ["./reporters/html-custom-reporter.js"], // your custom HTML report
  ],
  use: {
    headless: true,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
});
