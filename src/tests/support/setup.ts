import { After, AfterAll, Before, BeforeAll } from '@cucumber/cucumber';
import { chromium, devices } from '@playwright/test';
import { CustomWorld } from './custom-world';

BeforeAll(async function () {
    global.browser = await chromium.launch({
        headless: false,
        slowMo: 50,
    });
});
AfterAll(async function () {
    // await global.browser.close();
});

Before(async function (this: CustomWorld) {
    const chrome = devices["Desktop Chrome"];
    this.context = await global.browser.newContext({
        viewport: chrome.viewport,
        userAgent: chrome.userAgent,
    });
    this.page = await this.context?.newPage();
});

After(async function (this: CustomWorld) {
    // await this.page?.close();
    // await this.context?.close();
});