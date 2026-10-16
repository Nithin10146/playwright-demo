import{test,expect}from '@playwright/test';
test("soft assertion",async({page})=>{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    await page.locator('#name').fill('Nithish');
    await page.locator("#email").fill("abc@example.com");
    await page.locator("#gender").check();
    await expect.soft(page.locator('#name')).toHaveValue("Nithin");
    await expect.soft(page.locator('#email')).toHaveValue('abc@example.com');
    await expect.soft(page.locator('#gender')).toBeChecked();

})