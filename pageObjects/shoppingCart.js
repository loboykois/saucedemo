export class ShoppingCart {
  #page;

  constructor(page) {
    this.#page = page;
  }

  async getShoppingCart() {
    return await this.#page.locator(".shopping_cart_link");
  }

  async getShoppingCartCounter() {
    return Number(await this.#page.locator(".shopping_cart_badge").innerText());
  }
}
