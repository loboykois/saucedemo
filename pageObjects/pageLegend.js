export class LoginPageLegend {
  #page;
  constructor(page) {
    this.#page = page;
  }

  async getPassword() {
    // Implement retrieve of password
    const innerText = await this.#page.locator(".login_password").textContent();
    const password = innerText.split(":")[1];
    return password;

    //  const textContent = await this.#page
    //    .locator(".login_password")
    //    .allInnerTexts();
    //  console.info("INNER: " + innerText);
    //  console.info("TEXT: " + textContent);
    //  const result = innerText.split("\n")[1];
    //  console.info("TEXT: " + result);
    //  return result;
  }

  async getUserNames() {
    const loginsContent = await this.#page
      .locator("#login_credentials")
      .allInnerTexts();
    const splitContent = loginsContent[0].split("\n");

    const resultItems = splitContent.slice(1, splitContent.length - 1);
    return resultItems;
  }

  // standard, locked, problem, performance
  async getUserNameByType(type) {
    const userNames = await this.getUserNames();
    return userNames.find((item) => item.indexOf(type) === 0);
  }

  // ["standard_user","locked_out_user","problem_user","performance_glitch_user"]
}
