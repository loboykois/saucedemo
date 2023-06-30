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

  // async getValidationError() {
  //   const errorElement = this.#page.locator("[data-test='error']");
  //   return {
  //     isVisible: await errorElement.isVisible(),
  //     text: await errorElement.innerText()
  //   }
  // }

  async getValidationError() {
    return this.#page.locator("[data-test='error']");
  }

  async getValidationErrorText() {
    const errorBlock = await this.getValidationError();
    const errorText = await errorBlock.innerText();
    return errorText;
  }
}
