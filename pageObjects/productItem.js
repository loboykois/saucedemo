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

  /*Title*/

  async getItemTitle() {
    const productTitle = await this.#productLocator
      .locator(".inventory_item_name")
      .innerText();

    return productTitle;
  }

  async getItemDescription() {
    const productDescription = await this.#productLocator
      .locator(".inventory_item_desc")
      .innerText();

    return productDescription;
  }

  async getItemPrice() {
    const priceBar = await this.#productLocator
      .locator(".inventory_item_price")
      .innerText();

    //  const resultItems = splitContent.slice(1, splitContent.length - 1);

    return {
      currency: priceBar[0],
      value: Number(priceBar.slice(1, priceBar.length)),
    };
  }

  /*Details*/

  async getDetailsTitle() {
    const detailTitle = await this.#productLocator
      .locator(".inventory_details_name")
      .innerText();

    return detailTitle;
  }

  async getDetailsDescription() {
    const detailDescription = await this.#productLocator
      .locator(".inventory_details_desc")
      .innerText();

    return detailDescription;
  }

  async getDetailPrice() {
    const detailPrice = await this.#productLocator
      .locator(".inventory_details_price")
      .innerText();

    return {
      currency: detailPrice[0],
      value: Number(detailPrice.slice(1, detailPrice.length)),
    };
  }
}
