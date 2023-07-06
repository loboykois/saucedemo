import { test, expect } from "@playwright/test";
import { SwagLabsLoginPage } from "../pageObjects/loginPage";
import { Products } from "../pageObjects/productsPage";

test.describe("Products items test suit", () => {
  // Visit login page before each test cases / why not working with this fixture ?
  test.beforeEach(async ({ page }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await loginPage.visitLoginPage();
    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    const password = await loginPage.pageLegend.getPassword();

    await loginPage.enterUserName(userName);
    await loginPage.enterPassword(password);
    await loginPage.loginForm.pressLoginButton();
  });

  test("when inventory page is loaded should be displayed 6 products items", async ({
    page,
  }) => {
    // Act:
    // count amount of products items on inventory page
    const inventoryArea = new Products(page);
    const productItems = await inventoryArea.getProductsItems();

    expect(productItems.length).toBe(6);
  });

  test("should navigate to details", async ({ page }) => {
    // Act:
    // count amount of products items on inventory page
    const inventoryArea = new Products(page);
    const productItems = await inventoryArea.getProductsItems();

    await productItems[0].openDetailedProductDescription("image");
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/inventory-item.html?id=4"
    );
  });
});

// Focus on:
// Last test to be data driven. Implement getId for productItem
