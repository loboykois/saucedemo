export class ProductItem {
  #productLocator;
  constructor(productLocator) {
    this.#productLocator = productLocator;
  }

  getId() {
    // Find right selector
    // parse value and return number. Like from this: item_4_img_link
  }
  // navigationType: 'image' | 'link'
  async openDetailedProductDescription(navigationType) {
    // let naviSelector;
    // if (navigationType === "image") {
    //   naviSelector = "";
    // } else {
    //   naviSelector = "";
    // }

    const navigationSelector =
      navigationType == "image"
        ? ".inventory_item_img a"
        : ".inventory_item_name";
    const temp = await this.#productLocator.locator(navigationSelector).first();
    await temp.click();
    await this.#productLocator.page().waitForTimeout(500);
  }

  async getProductItemName(nthChild) {
    const nthItem = await this.#productLocator
      .locator(".inventory_list")
      .locator(productItemsMap[nthChild]);
    return nthItem.locator(".inventory_item_name").innerText();
  }

  async getProductItemDescription(nthChild) {
    const nthItem = await this.#productLocator
      .locator(".inventory_list")
      .locator(productItemsMap[nthChild]);
    return nthItem.locator(".inventory_item_desc").innerText();
  }

  async addTProductToBasket(nthChild) {
    const nthItem = await this.#productLocator
      .locator(".inventory_list")
      .locator(productItemsMap[nthChild]);
    await nthItem
      .locator("[data-test='add-to-cart-sauce-labs-backpack']")
      .click();
  }

  async removeProductFromBasket(nthChild) {
    const nthItem = await this.#productLocator
      .locator(".inventory_list")
      .locator(productItemsMap[nthChild]);
    await await nthItem
      .locator("[data-test='remove-sauce-labs-backpack']")
      .click();
  }
}
