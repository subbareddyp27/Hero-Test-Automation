require('chromedriver');
const {Builder} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:4200/dashboard');

        // Your code here

    }
    finally{
        driver.quit();
    }
})();

