import {
  ProductItem,
  listType,
  locatedOn,
} from "../productsPage/productItem/productItem";
import { ProductItem } from "../productsPage/productItem/productItem";
import { BaseProductsPage } from "../productsPage/productPage/baseProductsPage";

export class ShoppingCartPage extends BaseProductsPage {
  constructor(page) {
    super(page, locatedOn.cart, listType.cart);
    //  this.productPage = new BaseProductsPage(page);
    //  this.item = new ProductItem(page, locatedOn.cart, listType.cart);
  }

  async backToProducts() {
    await this.page.locator("[data-test='continue-shopping']").click();
  }

  async checkOut() {
    await this.page.locator("[data-test='checkout']").click();
  }
}

// export class ShoppingCartItem extends ProductItem {
//   constructor(page) {
//     super(page, locatedOn.cart, listType.cart);
//   }

//   getQuantity() {
//     return Number(this.#page.locator(".cart_quantity").innerText());
//   }
// }

// export class ShoppingCartItem {
//   details;
//   quantity;
//   constructor(page) {
//     this.details = new ProductItem(page, locatedOn.cart, listType.cart);
//   }
// }
