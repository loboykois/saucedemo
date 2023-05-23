import { LoginForm } from "./loginForm.js";
import { LoginPageLegend } from "./pageLegend.js";

exports.SwagLabsLoginPage = class SwagLabsLoginPage {
  constructor(page) {
    this.page = page;
    this.pageLogo = page.locator(".login_logo");
    this.loginForm = new LoginForm(page);
    this.pageLegend = new LoginPageLegend(page);
  }

  async visitLoginPage() {
    await this.page.goTo("/");
  }

  async enterUserName(value) {
    await this.loginForm.userNameField.fill(value);
  }
};
