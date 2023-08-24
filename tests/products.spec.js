import { test, expect } from "@playwright/test";
import { SwagLabsLoginPage } from "../pageObjects/loginPage";
import { ProductsPage } from "../pageObjects/productsPage";

test.describe("Products items test suit", () => {
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
    const inventoryArea = new ProductsPage(page);
    const productItems = await inventoryArea.getProductsItems();

    expect(productItems.length).toBe(6);
  });

  test("should navigate to details", async ({ page }) => {
    const inventoryArea = new ProductsPage(page);
    const productItems = await inventoryArea.getProductsItems();

    await productItems[0].openDetailedProductDescription("image");
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/inventory-item.html?id=4"
    );
  });

  test("should have valid content for the first item", async ({ page }) => {
    const inventoryArea = new ProductsPage(page);
    const targetItem = await inventoryArea.getProductItem(0);

    const expectedDescription =
      "carry.allTheThings() with the sleek, streamlined " +
      "Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.";

    expect(await targetItem.getItemTitle()).toBe("Sauce Labs Backpack");
    expect(await targetItem.getItemDescription()).toBe(expectedDescription);
  });

  test("should have valid price for the first item", async ({ page }) => {
    const inventoryArea = new ProductsPage(page);
    const targetItem = await inventoryArea.getProductItem(0);
    const itemPrice = await targetItem.getItemPrice();

    expect(`${itemPrice.currency}${itemPrice.value}`).toBe("$29.99");
  });
});
