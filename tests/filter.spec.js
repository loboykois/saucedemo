import { test, expect } from "@playwright/test";
import { Filter } from "../pageObjects/filter";
import { SwagLabsLoginPage } from "../pageObjects/loginPage";

test.describe("Filter dropdown test suite", () => {
  //   test.beforeEach(async ({ page }) => {
  //     const loginPage = new SwagLabsLoginPage(page);
  //     await loginPage.visitLoginPage();

  //     const userName = loginPage.pageLegend.getUserNameByType("standard");
  //     const password = loginPage.pageLegend.getPassword();

  //     await loginPage.enterUserName(userName);
  //     await loginPage.enterPassword(password);
  //     await loginPage.loginForm.pressLoginButton();
  //   });

  test.beforeEach(async ({ page }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await loginPage.visitLoginPage();

    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    const password = await loginPage.pageLegend.getPassword();

    await loginPage.enterUserName(userName);
    await loginPage.enterPassword(password);
    await loginPage.loginForm.pressLoginButton();
  });

  test("when user is logged in product filter option should displaying first value from list of options", async ({
    page,
  }) => {
    const filter = new Filter(page);
    const activeOption = filter.selectOption();

    expect(await activeOption).toBe("Name (A to Z)");
  });

  test("filter should contain four slots in option list", async ({ page }) => {
    const filter = new Filter(page);
    const optionsList = await filter.getListOfOptions();

    expect(await optionsList.length).toBe(4);
  });

  test("when Name (A to Z) options is chosen filter should sort product items in alphabet order", async ({
    page,
  }) => {});
});
