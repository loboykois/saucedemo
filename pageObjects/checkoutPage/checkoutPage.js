import { BasePage } from "../basePage/basePage";
import { CheckoutForm } from "./form/checkoutForm";

export class CheckoutPage extends BasePage {
  #page;

  constructor(page) {
    super(page);
    this.#page = page;
    this.checkoutFrom = new CheckoutForm(page);
  }

  async pressCancel() {
    await this.#page.locator("[data-test='cancel']").click();
  }

  async pressContinue() {
    await this.#page.locator("[data-test='continue']").click();
  }
}
