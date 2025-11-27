import { test, expect } from "@playwright/test";
import LoginPage from "../../pages/login.page.js";
import { readCsv } from "../../helpers/csv-reader.js";
import { getEnvConfig } from "../../utils/env.js";

const env = getEnvConfig();

test("Login Test with CSV data", async ({ page }) => {
  const data = await readCsv("./data/login_testdata.csv");
  const login = new LoginPage(page);

  for (const row of data) {
    await login.goto(env.baseUrl);
    await login.login(row.username, row.password);

    if (row.expected === "success") await expect(page).toHaveURL(/inventory/);
    else await expect(page.locator(login.errorMsg)).toBeVisible();
  }
});
