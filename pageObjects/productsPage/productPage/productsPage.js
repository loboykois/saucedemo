import { BasePage } from "../../basePage/basePage";
import { ProductItem, locatedOn, listType } from "./productItem";

export class ProductsPage extends BasePage {
  #page;
  #locatedOn;
  #listType;
  constructor(page) {
    super(page);
    this.#page = page;
    this.#locatedOn = locatedOn.inventory;
    this.#listType = listType.inventory;
  }

  setContext(locatedOn, listType) {
    this.#listType = listType;
    this.#locatedOn = locatedOn;
  }

  async getProductsItems() {
    await this.#page.waitForTimeout(500);
    const productsItemsList = await this.#page
      .locator(`.${this.#listType}_list > .${this.#locatedOn}_item`)
      .all();

    return productsItemsList.map(
      (i) => new ProductItem(i, locatedOn.item, this.#listType)
    );
  }

  async getProductItem(index) {
    await this.#page.waitForTimeout(500);
    const foundItem = await this.#page
      .locator(`.${this.#listType}_list > .${this.#locatedOn}_item`)
      .nth(index);

    return new ProductItem(foundItem, locatedOn.item, this.#listType);
  }
}
