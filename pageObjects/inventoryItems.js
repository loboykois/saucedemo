export class Inventory {
  #page;

  constructor(page) {
    this.#page = page;
  }

  async getProductsItemsCollection() {
    //  await this.#page.locator(".inventory_list div.inventory_item");
    await this.#page.waitForTimeout(2000);
    await this.#page.locator(".inventory_item:has(div.inventory_item)");
  }
}
