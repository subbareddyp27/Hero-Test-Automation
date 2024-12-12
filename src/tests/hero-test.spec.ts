import { test, expect } from '@playwright/test';

test('Add a new hero and verify they appear in the hero list', async ({ page }) => {
    await page.goto('http://localhost:4200/dashboard');
    await page.locator('role=link[name="Heroes"]').click();
    await page.fill('#new-hero', 'Subba Reddy');
    await page.fill('#hero-score', '1');
    await page.locator('button.add-button').click();
    const hero = page.locator('.heroes li:has-text("Subba Reddy - 1 x")');
    await expect(hero).toBeVisible();
});

test('Verify searching for a hero works', async ({ page }) => {
    await page.goto('http://localhost:4200/dashboard');
    await page.fill('#search-box', 'Tornado');
    await page.locator('.search-result li').getByRole('link', { name: 'Tornado' }).isVisible();
});

test('Verify deleting a hero removes them from the list', async ({ page }) => {
    await page.goto('http://localhost:4200/dashboard');
    await page.locator('role=link[name="Heroes"]').click();
    const heroLocator = page.locator('li:has-text("Dr Nice - 10 x")');
    await page.waitForLoadState('networkidle');
    await heroLocator.locator('button.delete').click();
    await expect(heroLocator).not.toBeVisible();
});

test("Verify a hero's name and score can be modified", async ({ page }) => {
    await page.goto('http://localhost:4200/heroes');

    await page.locator('li:has-text("Dr Nice - 10")').click();
    await expect(page.locator('h2')).toHaveText("DR NICE Details");
    await page.fill('#hero-name', 'Subba Reddy');
    await page.fill('#hero-score', '1');
    await page.locator('button:text("save")').click();

    await page.waitForLoadState('networkidle');

    await page.waitForURL('http://localhost:4200/heroes');
    const updatedHero = page.locator('ul.heroes li').filter({ hasText: 'Subba Reddy - 1' });
    await expect(updatedHero).toBeVisible();
});

test("Verify that the top heroes list contains either Hurricane or Tornado", async ({ page }) => {
    
    await page.goto('http://localhost:4200/dashboard');
    await page.waitForSelector('.heroes-menu a');
    const heroLinks = await page.locator('.heroes-menu a');
    const heroNames = await heroLinks.allTextContents();
    const containsTargetHero = heroNames.some(name => name.includes('Hurricane') || name.includes('Tornado'));
    expect(containsTargetHero).toBeTruthy();
});

test("Verify adding a new hero with a score of 600 will add them to the Top Heroes display in the dashboard", async ({ page }) => {
    await page.goto('http://localhost:4200/dashboard');
    await page.locator('role=link[name="Heroes"]').click();
    await page.fill('#new-hero', 'Reddy');
    await page.fill('#hero-score', '600');
    await page.locator('button.add-button').click();

    await page.goto('http://localhost:4200/dashboard');
    await page.waitForTimeout(1000);
    await page.waitForSelector('.heroes-menu a');

    const heroLinks = await page.locator('.heroes-menu a');
    const heroNames = await heroLinks.allTextContents();

    expect(heroNames).toContain('Reddy');
});

test("Verify the Add hero button is disabled once the list of heroes contains more than 12 heroes", async ({ page }) => {
    await page.goto('http://localhost:4200/heroes');
    for (let i = 1; i <= 12; i++) {
        await page.waitForSelector('#new-hero');
        await page.fill('#new-hero', `Hero ${i}`);
        await page.fill('#hero-score', `${i}`);
        await page.locator('button.add-button').click();
        await page.waitForTimeout(100);
    }

    await page.fill('#new-hero', 'Hero 13');
    await page.fill('#hero-score', '500');
    const addButton = await page.locator('button.add-button');

    const disabledAttribute = await addButton.getAttribute('disabled');
    expect(disabledAttribute).not.toBeNull();
});