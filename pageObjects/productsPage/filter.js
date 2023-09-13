import { locatedOn } from "./productItem/productItem";
import { ProductsPage } from "./productPage/baseProductsPage";

export const optionType = {
  ascending: "az",
  descending: "za",
  lowPrice: "lohi",
  highPrice: "hilo",
};

export class Filter {
  #page;

  constructor(page) {
    this.#page = page;
    this.products = new ProductsPage(page, locatedOn.item);
  }

  async getListOfOptions() {
    await this.#page.waitForTimeout(500);

    const optionsList = await this.#page
      .locator("select.product_sort_container > option")
      .all();

    return optionsList.map((option) => option);
  }

  async selectOption(optionType) {
    await this.#page
      .locator("[data-test='product_sort_container']")
      .selectOption(optionType);
  }

  async getSelectedItemText() {
    return await this.#page.locator(".active_option").innerText();
  }
}
