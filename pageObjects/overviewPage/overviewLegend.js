export const summaryMap = {
  info: "info",
  value: "value",
  subtotal: "subtotal",
  total: "total",
  tax: "tax",
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

//   async getTotalPrice() {
//     const totalPrice = await this.#page
//       .locator(".summary_subtotal_label")
//       .allInnerTexts();
//     const splitPrice = totalPrice[0].split("\n");
//   }
}
