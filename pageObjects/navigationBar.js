// create Map of links for page navigation using object construction
const navigationLinksMap = {
  inventory: "#inventory_sidebar_link",
  about: "#about_sidebar_link",
  logout: "#logout_sidebar_link",
  resetAppState: "#reset_sidebar_link",
};

export class NavigationBar {
  // can be used instead Map of links like private property
  #aboutLinkId = "selector";

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

  async navigate(linkType) {
    const selector = navigationLinksMap[linkType];
    this.#page.locator(selector).click();
  }
}
