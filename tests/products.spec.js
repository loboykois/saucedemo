import { test, expect } from "@playwright/test";
import { SwagLabsLoginPage } from "../pageObjects/loginPage";
import { Products } from "../pageObjects/productsItems";

test.describe("Products items test suit", () => {
  // Visit login page before each test cases / why not working with this fixture ?
  //  test.beforeEach(async ({ page }) => {
  //    const loginPage = new SwagLabsLoginPage(page);
  //    await loginPage.visitLoginPage();
  //  });

  test("when inventory page is loaded should be displayed 6 products items", async ({
    page,
  }) => {
    // Arrange:
    // go to Swag Labs Login page
    const loginPage = new SwagLabsLoginPage(page);
    await loginPage.visitLoginPage();

    // login to the app
    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    const password = await loginPage.pageLegend.getPassword();

    await loginPage.enterUserName(userName);
    await loginPage.enterPassword(password);
    await loginPage.loginForm.pressLoginButton();

    // Act:
    // count amount of products items on inventory page
    const inventoryArea = new Products(page);
    const productsItemsCollection =
      await inventoryArea.getProductsItemsCollection();
    await expect(productsItemsCollection).toHaveCount(6);
  });
});
