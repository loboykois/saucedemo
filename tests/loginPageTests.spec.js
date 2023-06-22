import { test, expect } from "@playwright/test";
import { SwagLabsLoginPage } from "../pageObjects/loginPage";

// Swag Labs Login page Functional tests

test.describe("Login page Swag Labs Functional tests", () => {
  test("when valid username and password are entered user should be logged in", async ({
    page,
  }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await loginPage.visitLoginPage();
    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    await loginPage.enterUserName(userName);
    const password = await loginPage.pageLegend.getPassword();
    await loginPage.enterPassword(password);
    await loginPage.loginForm.pressLoginButton();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });
});
