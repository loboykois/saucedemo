import { ProductItem, locatedOn } from "../products/productItem";

export class ProductDetailsPage {
  #page;

  constructor(page) {
    this.#page = page;
    this.productItem = new ProductItem(page, locatedOn.details);
  }

  async backToProducts() {
    await this.#page.locator("[data-test='back-to-products']").click();
  }
}
