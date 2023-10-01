import { ShoppingCartItem } from "../shoppingCartPage/shoppingCartItem";

export class OverviewItem extends ShoppingCartItem {
  #itemLocator;

  constructor(productItem) {
    super(productItem);
    this.#itemLocator = productItem.getLocator();
    this.details = productItem;
  }
}
