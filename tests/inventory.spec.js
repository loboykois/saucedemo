import { test, expect } from "@playwright/test";
import { SwagLabsLoginPage } from "../pageObjects/loginPage";
import { Inventory } from "../pageObjects/inventoryItems";

test.describe("Inventory items test suit", () => {
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
    const inventoryArea = new Inventory(page);
    const itemsAmount = await inventoryArea.getProductsItemsCollection();

    await expect(itemsAmount).toHaveCount(6);
  });

  test('test', async ({ page }) => {
   await page.goto('http://autopract.com/selenium/parents.html');
   await expect(page.locator('.menu li')).toHaveCount(4)
  });
});
