import{test,expect}from '@playwright/test';
test('input text validation',async({page})=>{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    await page.locator("#headingOne .accordion-button").click();
    await page.getByText(" Text Box").click();
    await expect(page).toHaveTitle("Selenium Practice - Text Box ");
    await expect(page.locator("#TextForm h1")).toContainText("Text Box");
    await page.getByPlaceholder("Full Name").fill("Testuser");
    await page.getByPlaceholder("name@example.com").fill("testuser@example.com");
    await page.getByPlaceholder("Currend Address").fill("123,test,klr");
    await page.getByPlaceholder("Password").fill("Password");
    await page.locator(".btn.btn-primary").click();

})
test("input error ",async({page})=>{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    await page.locator("#headingOne .accordion-button").click();
    await page.getByText(" Text Box").click();
    await expect(page).toHaveTitle("Selenium Practice - Text Box ");
    await expect(page.locator("#fullname-error")).toBeAttached();

    const errorlabel=page.locator('#fullname-error');
    const errormessage=await errorlabel.textContent();
    expect(errormessage).toContain("This field is required.");
})

test.only("validating radio button ",async({page})=>{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    await page.locator("#headingOne .accordion-button").click();
    await page.getByText(" Radio Button").click();
    await expect(page).toHaveTitle("Selenium Practice - Radio Button");
    await expect(page.locator("form h1")).toHaveText("Radio Button");
    await expect(page.locator("input[value='igottwo']")).not.toBeChecked();
    await expect(page.locator("input[value='igotthree']")).not.toBeChecked();
    await expect(page.locator("input[value='option3']")).toBeDisabled();
    await page.locator("input[value='igottwo']").check();
    await expect(page.locator("#check")).toHaveText("You have checked Yes");
    await page.locator("input[value='igotthree']").check();
    await expect(page.locator("#check1")).toHaveText("You have checked Impressive ")



})