import { PageFooter } from "./footer";
import { NavigationBar } from "./navigationBar";

export class BasePage {
  #page;
  constructor(page) {
    this.#page = page;

    this.navigationBar = new NavigationBar(page);
    this.pageFooter = new PageFooter(page);
  }

  async openNavigationBar() {
    await this.#page.locator('button:has-text("Open Menu")').click();
  }

  async expectedLogoText() {
    this.#page.locator(".app_logo").innerText();
  }

  async openBasket() {
    await this.#page.locator(".shopping_cart_link").click();
  }

  async expectedPageTitle() {
    this.#page.locator(".title");
  }
}
