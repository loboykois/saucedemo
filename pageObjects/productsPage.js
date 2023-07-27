import { ProductItem } from "./productItem";

export class Products {
  #page;

  constructor(page) {
    this.#page = page;
  }

  async getProductsItems() {
    await this.#page.waitForTimeout(500);
    const productsItemsList = await this.#page
      .locator(".inventory_list > .inventory_item")
      .all();

    return productsItemsList.map((i) => new ProductItem(i));
  }

  async getProductItem(index) {
    await this.#page.waitForTimeout(500);
    const foundItem = await this.#page
      .locator(".inventory_list > .inventory_item")
      .nth(index);

      return new ProductItem(foundItem);
  }
}
