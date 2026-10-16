import{test,expect}from '@playwright/test';
test("negative assertion",async({page})=>{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    await  expect(page.locator("#name")).not.toHaveValue("Nithin");
    await expect(page.locator("#email")).not.toHaveValue("abc@gmail.com");
    await expect(page.locator("#gender")).not.toBeChecked();
})