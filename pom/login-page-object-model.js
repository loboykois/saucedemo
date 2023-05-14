const { expect } = require("@playwright/test");


exports.SwagLabsLoginPage = class SwagLabsLoginPage {
  constructor(page) {
    this.page = page;
    this.loginLogo = page.locator(".login_logo");
    this.loginForm = page.locator(".login-box form");
    this.userNameFromInput = page.getByTestId("username");
    this.passwordFromInput = page.getByTestId("password");
    this.errorMessageContainer = page.locator(".error-message-container error");
    this.errorButton = page.locator(".error-button");
    this.loginButton = page.getByTestId("login-button");
    this.pageLoginCredentials = page.locator(".login_credentials");
    this.pageLoginPassword = page.locator(".login_password");
  }

  async visitSwagLabsPage() {
    await this.page.goto("/");
  }

  
};
