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

test("Verify a hero's name and score can be modified", async ({ page }) => {

    // Your code here
});

test("Verify that the top heroes list contains either Hurricane or Tornado", async ({ page }) => {
    
    // Your code here
});

test("Verify adding a new hero with a score of 600 will add them to the Top Heroes display in the dashboard", async ({ page }) => {

    // Your code here
});

test("Verify the Add hero button is disabled once the list of heroes contains more than 12 heroes", async ({ page }) => {

    // Your code here
});
