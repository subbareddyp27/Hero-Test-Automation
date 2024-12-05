import { test, expect } from '@playwright/test';

test('Add a new hero and verify they appear in the hero list', async ({ page }) => {
    await page.goto('http://localhost:4200/dashboard');

    // Your code here
});

test('Verify searching for a hero works', async ({ page }) => {

    // Your code here
});

test('Verify deleting a hero removes them from the list', async ({ page }) => {

    // Your code here
});

test("Verify a hero's name can be changed", async ({ page }) => {

    // Your code here
});

test("Verify adding a new hero and then deleting an old one from the list places the new hero on the Top Heroes section", async ({ page }) => {

    // Your code here
});