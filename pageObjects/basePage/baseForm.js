export class BaseForm {
  #page;

  constructor(page) {
    this.#page = page;

    //  Login form fields
    this.userNameField = page.locator("[data-test='username']");
    this.passwordField = page.locator("[data-test='password']");

    //  Checkout form fields
    this.firstName = page.locator("[data-test='firstName']");
    this.lastName = page.locator("[data-test='lastName']");
    this.postalCode = page.locator("[data-test='postalCode']");
  }

  async getErrorBlock() {
    return this.#page.locator("[data-test='error']");
  }

  async getErrorText() {
    const errorBlock = await this.getErrorBlock();
    const errorText = await errorBlock.innerText();
    return errorText;
  }

  async removeErrorBlock() {
    await this.#page.locator(".error-button").click();
  }
}
