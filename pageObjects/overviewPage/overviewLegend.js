export const summary = {
  info: "info",
  value: "value",
  subtotalPrice: "subtotal",
  tax: "tax",
  totalPrice: "total",
};

export class OverviewLegend {
  #page;
  constructor(page) {
    this.#page = page;
  }

  async getInformation() {
    const infoLocator = await this.#page.locator(".summary_value_label");
    const payment = infoLocator.nth(1).innerText();
    const shipping = infoLocator.nth(2).innerText();

    return {
      payment: {
        type: String(payment.split(" ").slice(0, 1)),
        cardSymbol: String(payment.split(" ")[1].slice(0, 1)),
        cardId: Number(payment.split(" ")[1].filter((id) => id !== "#")),
        get fullInfo() {
          return `${this.type} ${this.cardSymbol}${this.cardId}`;
        },
      },
      shipping,
    };
  }

  async getSummaryInfo(labelType) {
    const text = await this.#page
      .locator(`.summary_${labelType}_label`)
      .allInnerTexts();
    const splitText = text.split("\n");

    return {
      symbol: splitText[0].charAt(splitText.length - 1),
      amount: Number(splitText[1]),
    };
  }
}
