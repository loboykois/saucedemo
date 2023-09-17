export class OverviewItem {
  #itemLocator;

  constructor(productItem) {
    this.#itemLocator = productItem.getLocator();
    this.details = productItem;
  }
}
