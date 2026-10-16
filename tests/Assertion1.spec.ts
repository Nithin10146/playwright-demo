import {test,expect}from '@playwright/test'
test("Hard assertion",async({page})=>{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    await page.locator("#name").fill('Nithin');
    await page.locator("#email").fill("abc@example.com")
    await page.locator("#gender").check();
    await expect(page.locator("#name")).toHaveValue('Nithin');
    await expect(page.locator("#email")).toHaveValue("abc@example.com");
    await expect(page.locator("#gender")).toBeChecked();
})