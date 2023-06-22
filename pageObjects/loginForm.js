export class LoginForm {
  constructor(page) {
    this.userNameField = page.locator("[data-test='username']");
    this.passwordField = page.locator("[data-test='password']");
    this.loginButton = page.locator("[data-test=login-button]");
  }

  async pressLoginButton() {
    await this.loginButton.click();
  }
}
