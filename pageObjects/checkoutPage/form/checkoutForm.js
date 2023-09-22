import { BaseForm } from "../../basePage/baseForm";

export class CheckoutForm {
  #page;

  constructor(page) {
    this.#page = page;
    this.form = new BaseForm(page);
    this.formLocator = page.locator("form");
    this.firstName = page.locator("[data-test='firstName']");
    this.lastName = page.locator("[data-test='lastName']");
    this.postalCode = page.locator("[data-test='postalCode']");
  }

  fillDetails({ firstName, lastName, postCode }) {
    if (firstName) {
      this.firstName.fill(firstName);
    }
  }

  async getValidationError() {
    return this.form.getErrorBlock();
  }

  async getValidationErrorText() {
    return this.form.getErrorText();
  }
}
