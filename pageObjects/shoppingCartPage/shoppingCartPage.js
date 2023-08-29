import {
  ProductItem,
  listType,
  locatedOn,
} from "../productsPage/products/productItem";

export class ShoppingCartPage {
  constructor(page) {
    this.#page = page;
    this.productItem = new ProductItem(page, locatedOn.item, listType.cart);
  }

  async getGuantity() {
    return Number(await this.#page.locator(".cart_quantity").innerText());
  }

  async removeFromCart() {
    await this.#page
      .locator("[data-test='remove-sauce-labs-backpack']")
      .click();
  }

  async backToProducts() {
    await this.#page.locator("[data-test='continue-shopping']").click();
  }

  async checkOut() {
    await this.#page.locator("[data-test='checkout']").click();
  }
}
