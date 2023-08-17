export class ShoppingCart {
  #page;

  constructor(page) {
    this.#page = page;
  }

  async getShoppingCart() {
    this.#page.locator(".shopping_cart_link");
  }

  async getShoppingCartCounter() {
    return Number(await this.#page.locator(".shopping_cart_badge").innerText());
  }
}
