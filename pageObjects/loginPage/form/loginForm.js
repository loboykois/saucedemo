import { BaseForm } from "../../basePage/baseForm";

export class LoginForm extends BaseForm {
  #page;

  constructor(page) {
    super(page);
    this.#page = page;
    this.userNameField = page.locator("[data-test='username']");
    this.passwordField = page.locator("[data-test='password']");
    this.loginButton = page.locator("[data-test=login-button]");
  }

  async pressLoginButton() {
    await this.loginButton.click();
  }
}
