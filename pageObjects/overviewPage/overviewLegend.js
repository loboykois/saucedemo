export class OverviewLegend {
  #page;
  constructor(page) {
    this.#page = page;
  }

  // use allInnerTexts or get collection of children's summary info

  //   async getPayment() {
  //     const paymentInfo = await this.#page
  //       .locator(".summary_value_label")
  //       .innerText();

  //     const splitText = paymentInfo.split(" ");

  //     return {
  //       type: splitText[0],
  //       cardId: splitText[1],
  //     };
  //   }

  //   async getShippingInfo() {

  //   }
}
