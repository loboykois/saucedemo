const linksMap = {
    about: "#about_sidebar_link",
};

export class NavigationBar {
  #aboutLinkId = 'selector';

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

  // iphone => 'lightning'
  // samsung => 'typec'
  async getCharger(phoneModel) {
    return Map[phoneModel];
  }

  // linktype: 'about'
  async navigate(linkType) {
    const selector = linksMap[linkType];

    this.#page.locator(selector).click();
  }
}
