export class OverviewItem {
  #itemLocator;

  constructor(productItem) {
    this.#itemLocator = productItem.getLocator();
    this.details = productItem;
  }

  async getQuantity() {
    return Number(
      await this.#itemLocator.locator(".cart_quantity").innerText()
    );
  }
}
