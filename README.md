## Starting the App ##
 - Make sure the chromedriver version in `package.json` matches the version of your chrome browser
 - Make sure you have node version 18 or higher installed.
 - Run `npm i` to install all the necessary dependencies.
 - Start the app by running `npm run start`
 
 ## Test automation ##
 
 Scenarios can be found in `src/tests/features/hero.feature`. Please create the necessary cucumber steps to fulfil the scenario objective.
 Step definitions can be defined in `src/tests/support/step-definitions/steps.ts`
 
 Tests can be run through `npm run test-cucumber` to run all scenarios or `npm run test-cucumber:focus` to run only scenarios with a @focus tag.