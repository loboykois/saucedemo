export class LoginForm {
  constructor(page) {
    this.page = page;
    this.userNameField = page.locator("[data-test='username']");
    this.passwordField = page.locator("[data-test='password']");
    this.errorBlock = page.locator(".error-message-container");
    this.loginButton = page.locator("[data-test='login-button']");
  }
}
