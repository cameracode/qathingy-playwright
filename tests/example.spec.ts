import { test, expect } from '@playwright/test'

test("Simple basic test", async ({ page }) => {
    await page.goto("https://www.example.com");
    const pageTitle = await page.locator('h1');
    await expect(pageTitle).toContainText('Example Domain');
})

test("Clicking on Elements", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.fill('#username', 'invalid');
    await page.fill('#password', 'invalid');
    await page.click('button[type="submit"]');

    const errorMessage = await page.locator('#flash');
    await expect(errorMessage).toContainText("Your username is invalid!");
})

// test("Selectors", async ({ page }) => {
//     // text
//     await page.click('text=some text');

//     // CSS Selectors
//     await page.click('button');
//     await page.click('#id');
//     await page.click('.class');

//     // only visible CSS Selector
//     await page.click(".submit-button:visible");

//     // combinations
//     await page.click('#username .first');

//     // XPath
//     await page.click('//button');
// })

test("Working with inputs", async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html")
    await page.click('#signin_button')

    await page.type('#user_login','some username')
    await page.type('#user_password', 'some password')
    await page.click('text=Sign in')

    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})