export class BaseForm {
  #page;

  constructor(page) {
    this.#page = page;
  }

  async getErrorBlock() {
    return this.#page.locator("[data-test='error']");
  }

  async getErrorText() {
    const errorBlock = await this.getErrorBlock();
    const errorText = await errorBlock.innerText();
    return errorText;
  }

  async removeErrorBlock() {
    await this.#page.locator(".error-button").click();
  }
}
