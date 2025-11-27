import { test, expect } from "@playwright/test";
import TodoPage from "../../pages/todo.page.js";

test("ToDo add & delete items", async ({ page }) => {
  const todo = new TodoPage(page);
  await todo.goto("https://demo.playwright.dev/todomvc");

  await todo.addItem("Task A");
  await todo.addItem("Task B");

  await expect(page.locator(todo.items)).toHaveCount(2);

  await todo.deleteItem(1);
  await expect(page.locator(todo.items)).toHaveCount(1);
});
