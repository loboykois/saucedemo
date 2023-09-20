import { listType, locatedOn } from "../productsPage/productPage/productItem";
import { ProductsPage } from "../productsPage/productPage/productsPage";
import { BasePage } from "../basePage/basePage";

export class OverviewPage extends BasePage {
  #page;
  #productsPage;

  constructor(page) {
    super(page);
    this.#page = page;
    this.#productsPage = new ProductsPage(page);
    this.#productsPage.setContext(locatedOn.cart, listType.cart);
    this.legend = new OverviewLegend(page);
  }

  async backToProducts() {
    await this.#page.locator("button:has-text('Cancel')").click();
  }

  async finishOrder() {
    await this.#page.locator("button:has-text('Finish')").click();
  }
}
