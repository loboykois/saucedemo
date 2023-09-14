const footerSocialMediaLinksMap = {
  twitter: ".social_twitter",
  facebook: ".social_facebook",
  linkedin: ".social_linkedin",
};

export class PageFooter {
  #page;
  constructor(page) {
    this.#page = page;
  }

  async isVisible() {
    return this.#page.locator("footer").isVisible();
  }

  async footerSocialMediaNavigate(linkType) {
    const selector = footerSocialMediaLinksMap[linkType];
    this.#page.locator(selector).click();
  }

  async receiveCopyrightText() {
    await this.#page.locator(".footer_copy").allInnerTexts();
  }
}
