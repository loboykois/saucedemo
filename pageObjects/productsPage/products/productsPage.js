import { BasePage } from "../../basePage/basePage";
import { ProductItem, listType, locatedOn } from "./productItem";
import { ShoppingCartBadge } from "../shoppingCartBadge";

export class ProductsPage extends BasePage {
  #page;

  constructor(page) {
    super(page);
    this.#page = page;
    this.shoppingCartBadge = new ShoppingCartBadge(page);
  }

  //   Products

  async getProductsItems() {
    await this.#page.waitForTimeout(500);
    const productsItemsList = await this.#page
      .locator(`.${listType.inventory}_list > .inventory_item`)
      .all();

    return productsItemsList.map(
      (i) => new ProductItem(i, locatedOn.item, listType.inventory)
    );
  }

  async getProductItem(index) {
    await this.#page.waitForTimeout(500);
    const foundItem = await this.#page
      .locator(`.${listType.inventory}_list > .inventory_item`)
      .nth(index);

    return new ProductItem(foundItem, locatedOn.item, listType.inventory);
  }

  //   Cart

  async getCartItems() {
    await this.#page.waitForTimeout(500);
    const productsItemsList = await this.#page
      .locator(`.${listType.cart}_list > .inventory_item`)
      .all();

    return productsItemsList.map(
      (i) => new ProductItem(i, locatedOn.item, listType.cart)
    );
  }

  async getCartItem(index) {
    await this.#page.waitForTimeout(500);
    const foundItem = await this.#page
      .locator(`.${listType.cart}_list > .inventory_item`)
      .nth(index);

    return new ProductItem(foundItem, locatedOn.item, listType.cart);
  }
}
