export class ShoppingCartPage {
  constructor(page) {
    this.#page = page;
  }

  async getItems() {
    await this.#page.waitForTimeout(500);
    const productsItemsList = await this.#page
      .locator(".cart_list > .cart_item")
      .all();

    return productsItemsList.map((i) => new CartItem(i, locatedOn.item));
  }

  async getItem(index) {
    await this.#page.waitForTimeout(500);
    const foundItem = await this.#page
      .locator(".cart_list > .cart_item")
      .nth(index);

    return new CartItem(foundItem);
  }
}

export class CartItem {
  constructor(page) {
    this.details = new ProductItem(page);
  }

  getQuantity() {
    return Number(locator.getInnerText());
  }
}

const cart = new ShoppingCartPage(page);
const firstItem = await cart.getItem(0);
expect(await firstItem.getQuantity()).toBe(1);
const itemTitle = await firstItem.itemDetails.getItemTitle();
