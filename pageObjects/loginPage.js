import { LoginForm } from "./loginForm.js";
import { LoginPageLegend } from "./pageLegend.js";

export class SwagLabsLoginPage {
  #page;
  constructor(page) {
    this.#page = page;
    this.loginForm = new LoginForm(page);
    this.pageLegend = new LoginPageLegend(page);
  }

  async visitLoginPage() {
    await this.#page.goto("/");
  }

  async enterUserName(value) {
    await this.loginForm.userNameField.fill(value);
  }

  async enterPassword(password) {
    await this.loginForm.passwordField.fill(password);
  }
}
