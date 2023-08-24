export class ShoppingCartBadge {
  #page;

  constructor(page) {
    this.#page = page;
  }

  async getShoppingCart() {
    return await this.#page.locator(".shopping_cart_link");
  }

  async getCounter() {
    return Number(await this.#page.locator(".shopping_cart_link").innerText());
  }
}

// add to base page
