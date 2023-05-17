const { expect } = require("@playwright/test");

exports.SwagLabsLoginPage = class SwagLabsLoginPage {
  constructor(page) {
    this.page = page;
    this.loginLogo = page.locator(".login_logo");
    this.loginForm = page.locator(".login-box form");
    this.userNameFormInput = page.getByTestId("username");
    this.userNamePlaceholder = page
      .getAttribute("placeholder")
      .fill("Username");
    this.passwordFormInput = page.getByTestId("password");
    this.passwordPlaceholder = page
      .getAttribute("placeholder")
      .fill("Password");
    this.errorMessageContainer = page.locator(".error-message-container error");
    this.errorButton = page.locator(".error-button");
    this.loginButton = page.getByTestId("login-button");
    this.pageLoginCredentials = page.locator(".login_credentials");
    this.pageLoginPassword = page.locator(".login_password");
  }

  async visitSwagLabsPage() {
    await this.page.goto("/");
  }

  async toEqualUsernameEmptyString(usernameText) {
    await this.userNameFormInput.toHaveText(usernameText);
  }
  async toEqualPasswordEmptyString(passwordText) {
    await this.passwordFormInput.toHaveText(passwordText);
  }

  async triggerButtonInnerText(buttonText) {
   await this.loginButton.toHaveText(buttonText)
  }
};
