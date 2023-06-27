export class LoginForm {
  #page;
  constructor(page) {
    this.#page = page;
    this.userNameField = page.locator("[data-test='username']");
    this.passwordField = page.locator("[data-test='password']");
    this.loginButton = page.locator("[data-test=login-button]");
  }

  async pressLoginButton() {
    await this.loginButton.click();
  }

  async triggeredErrorTextBlock() {
    const errorTextBlock = await this.#page.locator("[data-test='error']");
    return errorTextBlock;
  }

  async getErrorText() {
    const errorText = await this.#page
      .locator("[data-test='error']")
      .innerText();
    return errorText;
  }
}
