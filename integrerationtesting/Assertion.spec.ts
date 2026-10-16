import {test ,expect}from '@playwright/test'
test.only("Assertion",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await expect(page).toHaveTitle("Swag Labs");
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    const logo=await page.locator(".login_logo");
    await expect(logo).toBeVisible();
    const enabled=await page.locator("#user-name");
    await expect(enabled).toBeEnabled();
    const text=await page.locator("#login_credentials h4");
    expect(text).toHaveText("Accepted usernames are:");
    const text1=await page.locator(".login_password h4");
    expect(text1).toContainText(" all users:")// to validate partical text we use
    // tocontaintext

    const error=await page.locator("#user-name");
    expect(error).toHaveAttribute('placeholder','Username');//to check as attribute presewnt 
    //or not ('atrribute name','value')
     expect(error).toHaveClass("input_error form_input");
     await expect(page.locator("#user-name")).toHaveAttribute('placeholder','Username');

})

test("Assertion",async({page})=>{
    await page.goto("https://www.amazon.in");
    const logo2=await page.locator('#nav-logo-sprites');
    await expect(logo2).toBeVisible()
})
test("Assertion56",async({page})=>{
    await page.goto("https://www.amazon.in");
    const logo2=await page.locator('#nav-logo-sprites');
    await expect(logo2).toBeVisible()
})

test("Assertion568add",async({page})=>{
    await page.goto("https://www.amazon.in");
    const logo2=await page.locator('#nav-logo-sprites');
    await expect(logo2).toBeVisible()
})


