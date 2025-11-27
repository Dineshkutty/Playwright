import { test, expect } from "@playwright/test";
import LoginPage from "../../pages/login.page.js";
import InventoryPage from "../../pages/inventory.page.js";
import { getEnvConfig } from "../../utils/env.js";

const env = getEnvConfig();

test("Add item to cart", async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto(env.baseUrl);
  await login.login("standard_user", "secret_sauce");

  await inventory.addBackpackToCart();
  await expect(page.locator(inventory.cartBadge)).toHaveText("1");
});
