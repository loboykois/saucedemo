const productItemsMap = {
  firstChild: "nth=0",
  secondChild: "nth=1",
  thirdChild: "nth=2",
  foursChild: "nth=3",
  fifthChild: "nth=4",
  sixthChild: "nth=5",
};

export class ProductItem {
  #page;
  constructor(page) {
    this.#page = page;
  }

  async openDetailedProductDescription(nthChild) {
    await this.#page
      .locator(".inventory_list")
      .locator(productItemsMap[nthChild])
      .click();
  }

  async getProductItemName(nthChild) {
    const nthItem = await this.#page
      .locator(".inventory_list")
      .locator(productItemsMap[nthChild]);
    return nthItem.locator(".inventory_item_name").innerText();
  }

  async getProductItemDescription(nthChild) {
    const nthItem = await this.#page
      .locator(".inventory_list")
      .locator(productItemsMap[nthChild]);
    return nthItem.locator(".inventory_item_desc").innerText();
  }

  async addTProductToBasket(nthChild) {
    const nthItem = await this.#page
      .locator(".inventory_list")
      .locator(productItemsMap[nthChild]);
    await nthItem
      .locator("[data-test='add-to-cart-sauce-labs-backpack']")
      .click();
  }

  async removeProductFromBasket(nthChild) {
    const nthItem = await this.#page
      .locator(".inventory_list")
      .locator(productItemsMap[nthChild]);
    await await nthItem
      .locator("[data-test='remove-sauce-labs-backpack']")
      .click();
  }
}
