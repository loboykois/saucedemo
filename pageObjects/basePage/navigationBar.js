// create Map of links for page navigation using object construction

export const navigationLinksMap = {
  inventory: "#inventory_sidebar_link22",
  about: "#about_sidebar_link",
  logout: "#logout_sidebar_link",
  resetAppState: "#reset_sidebar_link",
};

export class NavigationBar {
  #page;
  constructor(page) {
    this.#page = page;
  }

  async close() {
    await this.#page.locator('button:has-text("Close Menu")').click();
    await this.#page.waitForTimeout(500);
  }

  async isVisible() {
    return this.#page.locator("nav").isVisible();
  }

  async navigate(selector) {
    this.#page.locator(selector).click();
  }
}
