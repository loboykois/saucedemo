import { PageFooter } from "./footer";
import { NavigationBar } from "./navigationBar";
import { ShoppingCart } from "./shoppingCart";

export class BasePage {
  #page;
  constructor(page) {
    this.#page = page;

    this.navigationBar = new NavigationBar(page);
    this.pageFooter = new PageFooter(page);
    this.shoppingCart = new ShoppingCart(page);
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

  async openCartPage() {
    await this.#page.locator(".shopping_cart_link").click();
  }
}
