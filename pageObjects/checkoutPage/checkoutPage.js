import { CheckoutFrom } from "./form/checkoutForm";

export class CheckoutPage {
  #page;

  constructor(page) {
    this.#page = page;
    this.checkoutForm = new CheckoutFrom(page);
  }
}
