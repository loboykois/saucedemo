import { test, expect } from "@playwright/test";
import { SwagLabsLoginPage } from "../pageObjects/loginPage";
import { Products } from "../pageObjects/productsPage";
import { ProductDetails } from "../pageObjects/detailsPage";
import { ProductItem } from "../pageObjects/productItem";

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
    const inventoryArea = new Products(page);
    const productsItems = await inventoryArea.getProductsItems();
    const detailsArea = new ProductDetails(page);

    await productsItems[1].openDetailedProductDescription("image");
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/inventory-item.html?id=0"
    );

    await detailsArea.backToProducts();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });

  test("should have valid content for item detail", async ({ page }) => {
    const detailsArea = new ProductDetails(page);
    const detailsDescription = await detailsArea.getDetails(1);

    const detailContent =
      "A red light isn't the desired state in testing but it sure helps when" +
      "riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.";

    expect(await detailsDescription).toBe(detailContent);
  });
});
