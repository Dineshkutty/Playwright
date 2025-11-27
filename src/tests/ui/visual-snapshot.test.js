import { test, expect } from "@playwright/test";

test("Visual regression snapshot", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  expect(await page.screenshot()).toMatchSnapshot("homepage.png");
});
