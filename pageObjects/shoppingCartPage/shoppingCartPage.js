import { BasePage } from "../basePage/basePage";
import { listType, locatedOn } from "../productsPage/productPage/productItem";
import { ShoppingCartItem } from "./shoppingCartItem";
import { ProductsPage } from "../productsPage/productPage/productsPage";

export class ShoppingCartPage extends BasePage {
  #page;
  #productsPage;

  constructor(page) {
    super(page);
    this.#page = page;
    this.#productsPage = new ProductsPage(page);
    this.#productsPage.setContext(locatedOn.cart, listType.cart);
  }

  async backToProducts() {
    await this.#page.locator("[data-test='continue-shopping']").click();
  }

  async checkOut() {
    await this.#page.locator("[data-test='checkout']").click();
  }

  async getItems() {
    const productsItems = await this.#productsPage.getProductsItems();

    return productsItems.map((i) => new ShoppingCartItem(i));
  }

  async getItem(index) {
    const productItem = await this.#productsPage.getProductItem(index);

    return new ShoppingCartItem(productItem);
  }
}
