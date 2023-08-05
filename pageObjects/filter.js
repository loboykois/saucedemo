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
  }

  async getListOfOptions() {
    //  const optionsList = await this.#page.$$eval(
    //    "[data-test='product_sort_container'] > option",
    //    (element) => element.map((option) => option.textContent)
    //  );
    //  return optionsList;

    await this.#page.waitForTimeout(500);

    const optionsList = await this.#page
      .locator("select.product_sort_container > option")
      .all();

    return optionsList.map((option) => option);
  }

  async selectOptionByType(optionType) {
    return await this.#page
      .locator("[data-test='product_sort_container']")
      .selectOption(optionType);
  }

  async selectOptionByIndex(order) {
    return await this.#page
      .locator("[data-test='product_sort_container']")
      .selectOption({ index: order });
  }

  async selectOption() {
    return await this.#page.locator(".active_option").innerText();
  }
}
