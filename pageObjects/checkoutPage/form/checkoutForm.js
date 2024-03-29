import { BaseForm } from "../../basePage/baseForm";

export class CheckoutForm extends BaseForm {
  #page;

  constructor(page) {
    super(page);
    this.#page = page;
    this.formLocator = page.locator("form");
    this.firstName = page.locator("[data-test='firstName']");
    this.lastName = page.locator("[data-test='lastName']");
    this.postalCode = page.locator("[data-test='postalCode']");
  }
}
