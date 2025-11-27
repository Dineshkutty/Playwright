import { test, expect } from "@playwright/test";
import { readJson } from "../../helpers/json-reader.js";
import { validateSchema } from "../../helpers/schema-validator.js";
import { getEnvConfig } from "../../utils/env.js";

const env = getEnvConfig();
const schema = readJson("./data/user-schema.json");

test("Validate schema of GET response", async ({ request }) => {
  const res = await request.get(`${env.apiBaseUrl}/api/users/2`);
  const body = await res.json();

  const isValid = validateSchema(schema, body.data);
  expect(isValid).toBeTruthy();
});
