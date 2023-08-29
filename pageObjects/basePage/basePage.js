import { PageFooter } from "./footer";
import { NavigationBar } from "./navigationBar";
import { ShoppingCartBadge } from "../productsPage/shoppingCartBadge";

export class BasePage {
  #page;
  constructor(page) {
    this.#page = page;

    this.navigationBar = new NavigationBar(page);
    this.pageFooter = new PageFooter(page);
    this.shoppingCartBadge = new ShoppingCartBadge(page);
  }

  async openNavigationBar() {
    await this.#page.locator('button:has-text("Open Menu")').click();
  }

  async expectedLogoText() {
    this.#page.locator(".app_logo").innerText();
  }

  async expectedPageTitle() {
    this.#page.locator(".title");
  }

  async openCartPage() {
    await this.#page.locator(".shopping_cart_link").click();
  }

  //   async openBasket() {
  //     await this.#page.locator(".shopping_cart_link").click();
  //   }
}
