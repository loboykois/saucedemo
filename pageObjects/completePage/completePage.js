import { BasePage } from "../basePage/basePage";

export class CompletePage extends BasePage {
  #page;

  constructor(page) {
    super(page);
    this.#page = page;
  }

  async getHeaderText() {
    await this.#page.locator(".complete-header").innerText();
  }

  async getCompleteText() {
    await this.#page.locator(".complete-text").innerText();
  }

  //   TODO: get to know hov to do visual comparisons with playwright

//   async getPonyIconHandler() {
//     await this.#page.locator(".pony_express");
//   }

  async pressBackHome() {
    await this.#page.locator('button:has-text("Back Home")').click();
  }
}
