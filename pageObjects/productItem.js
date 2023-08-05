export const locatedOn = {
  item: "item",
  details: "details",
};

export class ProductItem {
  #productLocator;
  #locatedOn;

  constructor(productLocator, locatedOn) {
    this.#productLocator = productLocator;
    this.#locatedOn = locatedOn;
  }

  // navigationType: 'image' | 'link'
  async openDetailedProductDescription(navigationType) {
    const navigationSelector =
      navigationType == "image"
        ? ".inventory_item_img a"
        : ".inventory_item_name";
    const temp = await this.#productLocator.locator(navigationSelector).first();
    await temp.click();
    await this.#productLocator.page().waitForTimeout(500);
  }

  async getItemTitle() {
    const productTitle = await this.#productLocator
      .locator(`.inventory_${this.#locatedOn}_name`)
      .innerText();

    return productTitle;
  }

  async getItemDescription() {
    const productDescription = await this.#productLocator
      .locator(`.inventory_${this.#locatedOn}_desc`)
      .innerText();

    return productDescription;
  }

  async getItemPrice() {
    const priceBar = await this.#productLocator
      .locator(`.inventory_${this.#locatedOn}_price`)
      .innerText();

    return {
      currency: priceBar[0],
      value: Number(priceBar.slice(1, priceBar.length)),
    };
  }
}
