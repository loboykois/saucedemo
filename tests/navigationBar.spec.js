import { test, expect } from "@playwright/test";
import { BasePage } from "../pageObjects/basePage/basePage";
import { SwagLabsLoginPage } from "../pageObjects/loginPage/loginPage";
import { navigationLinksMap } from "../pageObjects/basePage/navigationBar";

test.describe("Navigation bar test suite", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await loginPage.visitLoginPage();
    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    await loginPage.enterUserName(userName);
    const password = await loginPage.pageLegend.getPassword();
    await loginPage.enterPassword(password);
    await loginPage.loginForm.pressLoginButton();
  });

  test("user should open and close menu", async ({ page }) => {
    const basePage = new BasePage(page);

    await basePage.openNavigationBar();
    expect(await basePage.navigationBar.isVisible()).toBe(true);
    await basePage.navigationBar.close();
    expect(await basePage.navigationBar.isVisible()).toBe(false);
  });

  test("when user navigates to About page, user should be on saucelabs home page", async ({
    page,
  }) => {
    // Act:
    // press on burger menu to open navigation bar
    const basePage = new BasePage(page);
    basePage.openNavigationBar();

    // navigate to About link
    basePage.navigationBar.navigate(navigationLinksMap.about);

    // Assert:
    // user is expected to be on saucelabs base web page
    const sauceLabsPage = "https://saucelabs.com/";
    await expect(page).toHaveURL(sauceLabsPage);
  });
});
