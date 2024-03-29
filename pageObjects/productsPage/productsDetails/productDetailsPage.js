import { ProductItem, listType, locatedOn } from "../productPage/productItem";

export class ProductDetailsPage {
  #page;

  constructor(page) {
    this.#page = page;
    this.productItem = new ProductItem(
      page,
      locatedOn.details,
      listType.inventory
    );
  }

  async backToProducts() {
    await this.#page.locator("[data-test='back-to-products']").click();
  }
}
