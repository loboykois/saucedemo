export class LoginPageLegend {
  #page;
  constructor(page) {
    this.#page = page;
  }

  async getPassword() {
    const innerText = await this.#page.locator(".login_password").textContent();
    const password = innerText.split(":")[1];
    return password;
  }

  async getUserNames() {
    const loginsContent = await this.#page
      .locator("#login_credentials")
      .allInnerTexts();
    const splitContent = loginsContent[0].split("\n");

    const resultItems = splitContent.slice(1, splitContent.length - 1);
    return resultItems;
  }

  async getUserNameByType(type) {
    const userNames = await this.getUserNames();
    return userNames.find((item) => item.indexOf(type) === 0);
  }
}
