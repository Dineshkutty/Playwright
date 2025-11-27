import { test, expect } from "@playwright/test";
import { readJson } from "../../helpers/json-reader.js";
import { getEnvConfig } from "../../utils/env.js";

const env = getEnvConfig();
const data = readJson("./data/api_testdata.json");

test("POST create user", async ({ request }) => {
  const res = await request.post(`${env.apiBaseUrl}/api/users`, {
    data: data.createUser,
  });

  expect(res.status()).toBe(201);
  const body = await res.json();

  expect(body.name).toBe(data.createUser.name);
});
