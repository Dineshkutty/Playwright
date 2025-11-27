import { test, expect } from "@playwright/test";
import LoginPage from "../../pages/login.page.js";
import CheckoutPage from "../../pages/checkout.page.js";
import { getEnvConfig } from "../../utils/env.js";

const env = getEnvConfig();

test("Form submission", async ({ page }) => {
  const login = new LoginPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto(env.baseUrl);
  await login.login("standard_user", "secret_sauce");

  await page.goto(`${env.baseUrl}/checkout-step-one.html`);

  await checkout.submitForm({
    first: "John",
    last: "Doe",
    zip: "99999",
  });

  await expect(page).toHaveURL(/checkout-step-two/);
});
