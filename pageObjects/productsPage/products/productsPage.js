import { BasePage } from "../../basePage/basePage";
import { ProductItem, listType, locatedOn } from "./productItem";
import { ShoppingCartBadge } from "../shoppingCartBadge";

class BaseProductsPage extends BasePage {
  #page;

  #locatedOn;

  #listType;

  constructor(page, locatedOn, listType) {
    super(page);
    this.#page = page;
    this.#locatedOn = locatedOn;
    this.#listType = listType;
    this.shoppingCartBadge = new ShoppingCartBadge(page);
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

export class ProductsPage extends BaseProductsPage {
  constructor(page) {
    super(page, locatedOn.inventory, listType.inventory);
  }
}

export class ShoppingCartPage extends BaseProductsPage {
  constructor(page) {
    super(page, locatedOn.cart, listType.cart);
  }
}
