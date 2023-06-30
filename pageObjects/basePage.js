import { NavigationBar } from "./navigationBar";

export class BasePage {
  #page;
  constructor(page) {
    this.#page = page;
    this.navigationBar = new NavigationBar(page);
  }

  async openNavigationBar() {
    await this.#page.locator('button:has-text("Open Menu")').click();
  }
}
