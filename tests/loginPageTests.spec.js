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
    const userName = await loginPage.pageLegend.getUserNameByType("standard");

    await loginPage.enterUserName(userName);
    await loginPage.enterPassword("123");
    await loginPage.loginForm.pressLoginButton();

    const errorTextBlock = await loginPage.loginForm.getValidationError();
    await expect(errorTextBlock).toBeVisible();
  });

  test("when valid username and invalid password are entered error message should be match to approved text - original", async ({
    page,
  }) => {
    const loginPage = new SwagLabsLoginPage(page);
    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    await loginPage.enterUserName(userName);

    const wrongPassword = "wrong_password";
    await loginPage.enterPassword(wrongPassword);
    await loginPage.loginForm.pressLoginButton();

    const expectedErrorMessageText =
      "Epic sadface: Username and password do not match any user in this service";
    const receivedErrorText =
      await loginPage.loginForm.getValidationErrorText();
    expect(receivedErrorText).toEqual(expectedErrorMessageText);
  });

  test("when valid username and invalid password are entered error message should be match to approved text", async ({
    page,
  }) => {
    // Arrange
    const loginPage = new SwagLabsLoginPage(page);
    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    const wrongPassword = "wrong_password";

    // Act
    await loginPage.enterUserName(userName);
    await loginPage.enterPassword(wrongPassword);
    await loginPage.loginForm.pressLoginButton();

    // Assert
    const expectedErrorMessageText =
      "Epic sadface: Username and password do not match any user in this service";
    const receivedErrorText =
      await loginPage.loginForm.getValidationErrorText();
    expect(receivedErrorText).toEqual(expectedErrorMessageText);
  });
});
