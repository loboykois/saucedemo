export const priceType = {
  item: "subtotal",
  tax: "tax",
  totalPrice: "total",
};

export class OverviewSummary {
  #page;
  constructor(page) {
    this.#page = page;
  }

  async getPaymentInfo() {
    const infoLocator = await this.#page.locator(".summary_value_label");
    const payment = infoLocator.nth(1).innerText();

    const paymentSplit = payment.split(" ");
    const cardNumber = paymentSplit.at(1);

    return {
      cardType: paymentSplit.at(0),
      cardId: cardNumber.slice(1, cardNumber.length - 1),
    };
  }

  async getShippingInfo() {
    const infoLocator = await this.#page.locator(".summary_value_label");
    const shipping = infoLocator.nth(2).innerText();

    return shipping;
  }

  async getPriceInfoByType(byType) {
    const summaryLocator = await this.#page
      .locator(`.summary_${byType}_label`)
      .innerText();
    const splitText = summaryLocator.split(" ");
    const currency = splitText.at(-1)?.at(0);
    const amount = Number(splitText.at(-1)?.slice(1));

    return {
      currency,
      amount,
    };
  }
}
