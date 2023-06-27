import { test, expect } from "@playwright/test";
import { SwagLabsLoginPage } from "../pageObjects/loginPage";

// Swag Labs Login page Functional tests

test.describe("Login page Swag Labs Functional tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await loginPage.visitLoginPage();
  });

  test("when valid username and password are entered user should be logged in", async ({
    page,
  }) => {
    const loginPage = new SwagLabsLoginPage(page);
    //  await loginPage.visitLoginPage();
    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    await loginPage.enterUserName(userName);
    const password = await loginPage.pageLegend.getPassword();
    await loginPage.enterPassword(password);
    await loginPage.loginForm.pressLoginButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });

  test("when entered valid username and invalid password error message should be showed", async ({
    page,
  }) => {
    const loginPage = new SwagLabsLoginPage(page);
    //  await loginPage.visitLoginPage();
    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    await loginPage.enterUserName(userName);
    const password = await loginPage.pageLegend.getPassword();
    const wrongPassword = password + "123";
    //  await loginPage.enterPassword(password + "123");
    await loginPage.enterPassword(wrongPassword);
    await loginPage.loginForm.pressLoginButton();
    const errorTextBlock = await loginPage.loginForm.triggeredErrorTextBlock();
    await expect(errorTextBlock).toBeVisible();
  });

  test("when valid username and invalid password are entered error message should be match to approved text", async ({
    page,
  }) => {
    const loginPage = new SwagLabsLoginPage(page);
    //  await loginPage.visitLoginPage();
    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    await loginPage.enterUserName(userName);
    const password = await loginPage.pageLegend.getPassword();
    const wrongPassword = password + "123";
    await loginPage.enterPassword(wrongPassword);
    await loginPage.loginForm.pressLoginButton();
    const approvedErrorMessageText =
      "Epic sadface: Username and password do not match any user in this service";
    const getErrorText = await loginPage.loginForm.getErrorText();
    expect(getErrorText).toEqual(approvedErrorMessageText);
  });
});
