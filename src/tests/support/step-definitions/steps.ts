import { Given } from '@cucumber/cucumber';
import { CustomWorld } from '../custom-world';
import { expect } from '@playwright/test';

Given('I am in the hero page', async function(this: CustomWorld) {
    const { page }: CustomWorld = this;
    await page?.goto('http://localhost:4200/dashboard');

    expect(true).toBeTruthy();
})

// TODO: Your step definitions here