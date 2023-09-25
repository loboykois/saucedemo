export class BaseForm {
  #page;

  constructor(page) {
    this.#page = page;
  }

  async getValidationError() {
    return this.#page.locator("[data-test='error']");
  }

  async getValidationErrorText() {
    const errorBlock = await this.getValidationError();
    const errorText = await errorBlock.innerText();
    return errorText;
  }

  async removeErrorBlock() {
    await this.#page.locator(".error-button").click();
  }
}
