import { test, expect } from "@playwright/test";
import LoginPage from "../../pages/login.page.js";

test("Negative login validation", async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto("https://www.saucedemo.com");
  await login.login("wrong", "wrong");

  await expect(page.locator(login.errorMsg)).toBeVisible();
});
