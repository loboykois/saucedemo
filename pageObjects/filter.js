import { locatedOn } from "./productItem";
import { Products } from "./productsPage";

export const optionType = {
  az: "Name (A to Z)",
  za: "Name (Z to A)",
  lowHigh: "Price (low to high)",
  highLow: "Price (high to low)",
};

export class Filter {
  #page;

  constructor(page) {
    this.#page = page;
    this.products = new Products(page, locatedOn.item);
  }

  async getListOfOptions() {
    await this.#page.waitForTimeout(500);

    const optionsList = await this.#page
      .locator("select.product_sort_container > option")
      .all();

    return optionsList.map((option) => option);
  }

  async sortItemsFromAtoZ() {
    const items = await this.products.getProductsItems();
    const titles = await items.textContent();

    return titles;
  }
}
