import { test, expect } from '@playwright/test';
import { TestCaseData } from '../../common/entities/TestCaseData';
import { TestPage } from '../../page-objects/TestPage';
const testData = require('../test-data/caseData.json');
console.log(`[TestData] Json TestCaseData:`, testData);
test.describe.parallel('Test | Testing', () => {
    let testCaseData: any; // Using any temporarily until TestCaseData type is defined
    let testPage: any; // Using any temporarily until TestPage type is defined
    // Before Hook
    test.beforeEach(async ({ page }) => {
    })
    
    testData.forEach((item: { name: string, productItem: string; endpoint: string; }) => {
        test(`${item.name}`, async ({ page }) => {
            console.log(`[TestData] Json ProductItem: ${item.productItem}`)
            testCaseData = new TestCaseData()
            console.log(`[TestData] Json Endpoint: ${item.endpoint}`)
            testPage = new TestPage(page, item.endpoint.toString())
            //console.log(registrationData);
            //console.log(registrationPage);
            // Increased timeout to 60s in case of slow network or site
            await page.goto(item.endpoint.toString(), { timeout: 60000 })
        })
    })

    // Debugging: Add a test for a local site to check network access
    // test('Localhost test', async ({ page }) => {
    //     await page.goto('http://localhost:3000', { timeout: 60000 });
    //     await expect(page).toBeOK();
    // });
}) 