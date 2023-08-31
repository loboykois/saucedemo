export const locatedOn = {
  item: "item",
  details: "details",
};

export const listType = {
  inventory: "inventory",
  cart: "cart",
};

export class ProductItem {
  #productLocator;
  #locatedOn;
  #listType;

  constructor(productLocator, locatedOn, listType) {
    this.#productLocator = productLocator;
    this.#locatedOn = locatedOn;
    this.#listType = listType;
  }

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
      .locator(`.${this.#listType}_${this.#locatedOn}_name`)
      .innerText();

    return productTitle;
  }

  async getItemDescription() {
    const productDescription = await this.#productLocator
      .locator(`.${this.#listType}_${this.#locatedOn}_desc`)
      .innerText();

    return productDescription;
  }

  async getItemPrice() {
    const priceBar = await this.#productLocator
      .locator(`.${this.#listType}_${this.#locatedOn}_price`)
      .innerText();

    return {
      currency: priceBar[0],
      value: Number(priceBar.slice(1, priceBar.length)),
    };
  }

  async addItemToCart() {
    await this.#productLocator
      .locator("button:has-text('Add to cart')")
      .click();
  }

  async removeItemFromCart() {
    await this.#productLocator.locator("button:has-text('Remove')").click();
  }
}
