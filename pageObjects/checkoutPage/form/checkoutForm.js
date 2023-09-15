import { BaseForm } from "../../basePage/baseForm";

export class CheckoutForm {
  #page;

  constructor(page) {
    this.#page = page;
    this.form = new BaseForm(page);
    this.firstName = this.form.firstName;
    this.lastName = this.form.lastName;
    this.postalCode = this.form.postalCode;
  }

  async getValidationError() {
    return this.form.getErrorBlock();
  }

  async getValidationErrorText() {
    return this.form.getErrorText();
  }
}
