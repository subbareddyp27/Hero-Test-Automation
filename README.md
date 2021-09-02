## Starting the App ##
 - Make sure the chromedriver version in `package.json` matches the version of your chrome browser
 - Run `npm i`
 - Start the app by running `npm run start`
 
 ## Test automation ##
 
 You may choose to automate in either Playwright or Selenium.
  - You may use other libraries to help you out if you wish
  - You may create other helper or utility functions, classes or files
  - Please do not modify the contents of the app directory
  - Be aware that on occasion fetching the list of heroes may take longer than expected so please be sure to account for that in your automation code

 #### For Playwright automation ####
 You can find the playwright test in `src/tests/playwright.spec.ts`
 <br>Modify the test contents with your automation code
 <br>Run `npm run test-playwright` to run the playwright test
 
 #### For Selenium automation ####
 You can find the playwright test in `src/tests/selenium.spec.js`
 <br>Modify the test contents with your automation code
 <br>Run `npm run test-selenium` to run the selenium test

### Automate the following steps ###

 - Go to the Heroes page and add a new hero.
 - Verify the new hero has been added to the page
 - Go back to the dashboard and search for this new hero and click on their entry
 - Change the new hero's name and save it
 - Verify the new hero's name has been changed in the hero list
 - Delete another hero from the hero list
 - Verify the new hero's name is now part of the Top Heroes banner on the dashboard
 