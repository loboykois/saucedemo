import { test, expect } from "@playwright/test";
import { BasePage } from "../pageObjects/basePage";
import { SwagLabsLoginPage } from "../pageObjects/loginPage";

test.describe("Navigation bar test suite", () => {
  test("user should open and close menu", async ({ page }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await loginPage.visitLoginPage();
    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    await loginPage.enterUserName(userName);
    const password = await loginPage.pageLegend.getPassword();
    await loginPage.enterPassword(password);
    await loginPage.loginForm.pressLoginButton();

    const basePage = new BasePage(page);

    await basePage.openNavigationBar();
    expect(await basePage.navigationBar.isVisible()).toBe(true);
    await basePage.navigationBar.close();
    expect(await basePage.navigationBar.isVisible()).toBe(false);
  });

  test("nav1", async ({ page }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await loginPage.visitLoginPage();
    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    await loginPage.enterUserName(userName);
    const password = await loginPage.pageLegend.getPassword();
    await loginPage.enterPassword(password);
    await loginPage.loginForm.pressLoginButton();

    const basePage = new BasePage(page);

    await basePage.openNavigationBar();
    await basePage.navigationBar.navigate("about");

    await basePage.navigationBar.close();
    expect(await basePage.navigationBar.isVisible()).toBe(false);
  });
});
