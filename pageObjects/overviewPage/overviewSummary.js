export const summaryLabels = {
  info: "info",
  value: "value",
  subtotalPrice: "subtotal",
  tax: "tax",
  totalPrice: "total",
};

const page = new OverviewSummary();

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

  async getItemTotalInfo() {
    const itemTotalText = await this.#page
      .locator(`.summary_${summaryLabels.subtotalPrice}_label`)
      .allInnerTexts();
    const splitText = itemTotalText.split("\n");

    return {
      currency: splitText[0].at(-1),
      amount: parseFloat(splitText[1]).toFixed(2),
    };
  }

  async getTaxInfo() {
    const taxText = await this.#page
      .locator(`.summary_${summaryLabels.tax}_label`)
      .allInnerTexts();
    const splitText = taxText.split("\n");

    return {
      currency: splitText[0].at(-1),
      amount: parseFloat(splitText[1]).toFixed(2),
    };
  }

  async getTotalPriceInfo() {
    const totalPrice = await this.#page
      .locator(`.summary_${summaryLabels.totalPrice}_label`)
      .allInnerTexts();
    const splitText = totalPrice.split("\n");

    return {
      currency: splitText[0].at(-1),
      amount: parseFloat(splitText[1]).toFixed(2),
    };
  }
}
