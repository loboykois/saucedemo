// implement page object for product details page
// check back to products button - click and check you changed the page
// reuse product item inside product details. And repeat test cases like we did on product list
// you can make a separate spec file to check product details page only

/// after that - start looking into filter component page object. like `filterSelector` page object
import { Products } from "../pageObjects/productsPage";

export class ProductDetails {
  #page;

  constructor(page) {
    this.#page = page;
    this.products = new Products(page);
  }

  async backToProducts() {
    await this.#page.locator("[data-test='back-to-products']").click();
  }

  async getDetails(index) {
    const targetItem = await this.products.getProductItem(index);
    await targetItem.openDetailedProductDescription();
    return targetItem.getDetailsDescription();
  }
}
