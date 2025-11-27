import { test, expect } from "@playwright/test";
import { getEnvConfig } from "../../utils/env.js";

const env = getEnvConfig();

test("GET user", async ({ request }) => {
  const res = await request.get(`${env.apiBaseUrl}/api/users/2`);
  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(body.data.id).toBe(2);
});
