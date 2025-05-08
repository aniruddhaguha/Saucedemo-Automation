# Saucedemo Automation WebdriverIO

## Overview
This project automates end-to-end testing for the [Saucedemo](https://www.saucedemo.com/) website using WebdriverIO with Mocha. The test suite covers login scenarios, shopping cart functionality, checkout process validation, app state management, also generates test reports using the Allure Reporter.

## Tech Stack
- **Test Framework:** WebdriverIO
- **Reporting:** Allure Reporter
- **Programming Language:** JavaScript
- **Browser:** Chrome

## Project Structure
**Page Object Model:** Ensures modular and maintainable code
```
├── test
│   ├── specs
│   │   ├── locked_out_user.spec.js
│   │   ├── standard_user.spec.js
│   │   ├── performance_glitch_user.spec.js
│   ├── pages
│   │   ├── checkout_information
│   │   │   ├── checkout_information_action.js
│   │   │   ├── checkout_information_locators.js
│   │   ├── locked_out_user
│   │   │   ├── locked_out_user_action.js
│   │   │   ├── locked_out_user_locators.js
│   │   ├── standard_user
│   │   │   ├── standard_user_action.js
│   │   │   ├── standard_user_locators.js
│   │   ├── performance_glitch_user
│   │   │   ├── performance_glitch_user_action.js
│   │   │   ├── performance_glitch_user_locators.js
│   ├── utilities
│   │   ├── utility.js
├── wdio.conf.js
├── package.json
├── README.md
```

## Test Scenarios
### 1. Login Error
- Attempt login with `locked_out_user`
- Verify the displayed error message

### 2. Standard User Purchase Flow
- Login as `standard_user`
- Reset App State
- Add three products to the cart
- Proceed to checkout
- Verify product names and total price
- Complete the purchase and verify success message
- Reset App State again and logout

### 3. Performance Glitch User Purchase Flow
- Login as `performance_glitch_user`
- Reset App State
- Filter products by Name (Z to A)
- Select the first product and add it to the cart
- Proceed to checkout
- Verify product details and total price
- Complete the purchase and verify success message
- Reset App State again and logout

## Configuration
- The test configuration is defined in `wdio.conf.js`.
- The `suites` section allows running specific test groups.
- The `baseUrl` is set to `https://www.saucedemo.com/`.


## Clone the repository:
   ```sh
   git clone https://github.com/aniruddhaguha/Saucedemo-Automation.git
   ```


## Installation Guide

### Initialize `package.json`
```sh
npm init
# Follow the prompts to set up:
# - Package name
# - Keywords
# - Author
# - Confirm with 'yes'
```

### Install WebdriverIO
```sh
npm i --save-dev @wdio/cli
npm init wdio@latest
```

### Configure `package.json` Scripts
Modify the `scripts` section in `package.json`:
```json
"scripts": {
    "test": "wdio run ./wdio.conf.js"
}
```

### Install Allure Reporter

1. Install Allure Reporter:
   ```sh
   npm install @wdio/allure-reporter --save-dev
   ```
2. Update `wdio.conf.js`:
   ```js
   reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true
    }]],
   ```
   Add this **after** `reporters: ['dot']`.

3. Add screenshot capture in `wdio.conf.js`:
   ```js
   afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if(error){
            const screenShot = await browser.takeScreenshot();
            allure.addAttachment("Screenshot", Buffer.from(screenShot,"base64"),"failure/png");
        }
    },
   ```

4. Update `wdio.conf.js`:
   ```js
   baseUrl: 'https://www.saucedemo.com/',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 18000,
   ```
   ```js
   beforeSuite: async function (suite) {
        await browser.maximizeWindow();
        await browser.url(this.baseUrl);
    },
   ```

5. Run tests and generate reports:
   ```sh
   npm run test                     # Runs the tests and creates 'allure-results' folder
   npm i allure-commandline
   allure generate allure-results   # Generates Allure report folder
   ```

6. Add a script for generating reports in `package.json`:
   ```json
   "scripts": {
       "getReport": "allure generate allure-results --clean && allure open"
   }
   ```

## Test Execution
### Run All Tests
```sh
npm run testall
```

For './test/specs/**/*.js' make sure that "maxInstances" is set to 3 or more so that all three test scenarios can run in different windows at the same time.

```js
maxInstances: 10,
```


### Run Purchase Suite
In **suite** section in **wdio.conf.js** file
```js
suites: {
      q1: ['./test/specs/loginLockedOutUser.spec.js'],
      q2: ['./test/specs/standardUserPurchase.spec.js'],
      q3: ['./test/specs/performanceGlitchUser.spec.js']
    },
```
and then in terminal,
```sh
npm run testall
```
Purchase suite contains all test scenarios: `locked_out_user`, `standard_user`, `performance_glitch_user`. The three scenarios will run altogether in a sequential way.

Make sure that in **wdio.conf.js** file, "maxInstances: 1"

### Generate and View Allure Report
```sh
npm run getReport




