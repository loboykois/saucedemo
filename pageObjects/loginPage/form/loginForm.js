import { BaseForm } from "../../basePage/baseForm";

export class LoginForm {
  #page;

  constructor(page) {
    this.#page = page;
    this.form = new BaseForm(page);
    this.userNameField = page.locator("[data-test='username']");
    this.passwordField = page.locator("[data-test='password']");
    this.loginButton = page.locator("[data-test=login-button]");
  }

  async pressLoginButton() {
    await this.loginButton.click();
  }

  async getValidationError() {
    return this.form.getErrorBlock();
  }

  async getValidationErrorText() {
    return this.form.getErrorText();
  }
}
