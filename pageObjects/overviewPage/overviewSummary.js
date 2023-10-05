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
    let currency = "";
    let amount = 0;

    if (splitText.length < 3) {
      currency = splitText.at(1)[0];
      amount = Number(splitText.at(1).slice(1));
    } else {
      currency = splitText.at(2)[0];
      amount = Number(splitText.at(2).slice(1));
    }

    return {
      currency,
      amount,
    };
  }
}