import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';

export class CustomWorld extends World {
    context?: BrowserContext;
    page?: Page;
    browser?: Browser;
}

setWorldConstructor(CustomWorld);