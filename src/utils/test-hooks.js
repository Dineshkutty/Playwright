import { test as base } from "@playwright/test";
import { logger } from "./logger.js";

export const test = base.extend({
  // Runs before each test
  page: async ({ page }, use, testInfo) => {
    logger.info(`START TEST → ${testInfo.title}`);

    await use(page);

    // After test
    if (testInfo.status !== testInfo.expectedStatus) {
      logger.error(`❌ TEST FAILED → ${testInfo.title}`);

      const screenshotPath = `./test-results/${testInfo.title.replace(
        /\s+/g,
        "_"
      )}.png`;
      await page.screenshot({ path: screenshotPath });
      logger.error(`Screenshot saved: ${screenshotPath}`);
    } else {
      logger.info(`✔ TEST PASSED → ${testInfo.title}`);
    }
  },
});
