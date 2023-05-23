export class LoginPageLegend {
  constructor(page) {
    this.page = page;
    this.loginCredentials = page.locator(".login_credentials");
    this.passwordCredentials = page.locator(".login_password");
    this.standardUser = page.getByText("standard_user");
    this.lockedUser = page.getByText("locked_out_user");
    this.problemUser = page.getByText("problem_user");
    this.performanceUser = page.getByText("performance_glitch_user");
    this.userPassword = page.getByText("secret_sauce");
  }
}
