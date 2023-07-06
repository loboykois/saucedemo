import { ProductItem } from "./productItem";

export class Products {
  #page;

  constructor(page) {
    this.#page = page;

    this.productItem = new ProductItem(page);
  }

  async getProductsItemsCollection() {
    await this.#page.waitForTimeout(500);
    const productsItemsList = this.#page.locator(
      ".inventory_list > .inventory_item"
    );
    return productsItemsList;
  }
}
