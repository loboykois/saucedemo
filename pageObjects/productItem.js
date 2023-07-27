export class ProductItem {
  #productLocator;
  constructor(productLocator) {
    this.#productLocator = productLocator;
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

  async getTitle() {
    const productTitle = await this.#productLocator
      .locator(".inventory_item_name")
      .innerText();

    return productTitle;
  }

  async getDescription() {
    const productDescription = await this.#productLocator
      .locator(".inventory_item_desc")
      .innerText();

    return productDescription;
  }

  async getPrice() {
    const priceBar = await this.#productLocator
      .locator(".inventory_item_price")
      .innerText();

    //  const resultItems = splitContent.slice(1, splitContent.length - 1);

    return {
      currency: priceBar[0],
      value: Number(priceBar.slice(1, priceBar.length)),
    };
  }
}
