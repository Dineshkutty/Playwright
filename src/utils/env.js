import fs from "fs";

export function getEnvConfig(env = process.env.TEST_ENV || "dev") {
  const filePath = `./config/${env}.env.json`;

  if (!fs.existsSync(filePath)) {
    throw new Error(`Environment file not found: ${filePath}`);
  }

  const content = fs.readFileSync(filePath, "utf8");
  return JSON.parse(content);
}
