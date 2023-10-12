import { test, expect } from "@playwright/test";
import { SwagLabsLoginPage } from "../pageObjects/loginPage/loginPage";
import { ProductsPage } from "../pageObjects/productsPage/productPage/productsPage";
import { ProductDetailsPage } from "../pageObjects/productsPage/productsDetails/productDetailsPage";

test.describe("Product details test suite", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await loginPage.visitLoginPage();

    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    const password = await loginPage.pageLegend.getPassword();

    await loginPage.enterUserName(userName);
    await loginPage.enterPassword(password);
    await loginPage.loginForm.pressLoginButton();
  });

  test("when user pressed Back to products button he should back on Products page", async ({
    page,
  }) => {
    const inventoryArea = new ProductsPage(page);
    const productsItems = await inventoryArea.getProductsItems();
    const detailsArea = new ProductDetailsPage(page);

    await productsItems[1].openDetailedProductDescription("image");
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/inventory-item.html?id=0",
    );

    await detailsArea.backToProducts();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });

  test("should have valid content for item detail", async ({ page }) => {
    const inventoryArea = new ProductsPage(page);
    const productsItems = await inventoryArea.getProductsItems();

    await productsItems[1].openDetailedProductDescription("image");

    const detailsPage = new ProductDetailsPage(page);

    expect(await detailsPage.productItem.getItemTitle()).toBe(
      "Sauce Labs Bike Light",
    );
  });
});
