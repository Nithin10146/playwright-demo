import {test,expect}from '@playwright/test'
test("locators butin",async({page})=>{
    await page.goto("https://www.amazon.in");
    // await page.getByRole('searchbox',{name:'Search Amazon.in'}).fill('laptop');
    // //await page.getByrole('rolename',{name:textvalue})//name be arial_label or placeholder
    // await page.getByRole('button',{name:'Go',exact:true}).click();
     
    //await page.getByText("New Releases").click();
     //await page.getbytext("visible text")

     //await page.getbyalttext("alt text");
     await page.getByAltText("Answer & win ₹25,000").click();

     await page.waitForTimeout(5000);
})
test(" get by label",async({page})=>{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    //await page.getbylabel("Label text");

     const label=await page.getByLabel("Name:");
     await expect(label).toBeVisible();

    //await page.getbyplaceholder("inputfiledtext")
    await page.getByPlaceholder("First Name").fill("Nithin");

    //await page.getbytitle("title name")
    await page.getByTitle("back to Selenium Tutorial").click();
    await page.waitForTimeout(5000);
    
})
test("get by role",async({page})=>{
    await page.goto("https://www.flipkart.com/");
    //await page.getByText("Mobiles").nth(0).click();
    //await page.getByAltText("Cart").click();
     
})
test.only("get by label",async({page})=>{
    await page.goto("https://www.geeksforgeeks.org/");
    await page.locator("button",{hasText:'Sign In'}).click();
    const label = await page.getByLabel('Password');
    await expect(label).toBeVisible();
})
