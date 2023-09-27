import { listType, locatedOn } from "../productsPage/productPage/productItem";
import { ProductsPage } from "../productsPage/productPage/productsPage";
import { BasePage } from "../basePage/basePage";
import { OverviewSummary } from "./overviewSummary";

export class OverviewPage extends BasePage {
  #page;
  #productsPage;

  constructor(page) {
    super(page);
    this.#page = page;
    this.#productsPage = new ProductsPage(page);
    this.#productsPage.setContext(locatedOn.cart, listType.cart);
    this.summary = new OverviewSummary(page);
  }

  async backToProducts() {
    await this.#page.locator("button:has-text('Cancel')").click();
  }

  async finishOrder() {
    await this.#page.locator("button:has-text('Finish')").click();
  }
}
