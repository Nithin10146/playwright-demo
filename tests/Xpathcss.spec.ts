import{test,expect}from '@playwright/test'
test("xpathcass",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    
    await page.locator("#password").fill("secret_sauce");
    await page.locator("input[type='submit']").click();//customize css selector 

})
test.only("xpathclass1",async({page})=>{
    await page.goto("https://www.amazon.in");
    //await page.locator(".nav-input.nav-progressive-attribute").nth(0).fill("laptop");
    //await page.locator("//input[@id='twotabsearchtextbox']").fill("book");//By atrribute=[//tagename[@attribute='value]]
    await page.locator("//a[text()='Mobiles']").click();//By text()=[//tagname[text()='value']]
    await page.waitForTimeout(5000);
})