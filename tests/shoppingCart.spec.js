import { test, expect } from "@playwright/test";
import { SwagLabsLoginPage } from "../pageObjects/loginPage/loginPage";
import { BasePage } from "../pageObjects/basePage/basePage";
import { ProductsPage } from "../pageObjects/productsPage/products/productsPage";

test.describe("Shopping cart test suit", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await loginPage.visitLoginPage();
    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    const password = await loginPage.pageLegend.getPassword();

    await loginPage.enterUserName(userName);
    await loginPage.enterPassword(password);
    await loginPage.loginForm.pressLoginButton();
  });

  test("When user press cart badge he should navigated on Cart page", async ({
    page,
  }) => {
    const basePage = new BasePage(page);

    await basePage.openCartPage();

    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
  });

  test("If no added products items to cart cart list should be empty", async ({
    page,
  }) => {
    const basePage = new BasePage(page);
    await basePage.openCartPage();

    const inventoryArea = new ProductsPage(page);
    const cartItems = await inventoryArea.getCartItems();

    expect(cartItems.length).toBe(0);
  });

  test("All added products should be display on Cart page", async ({
    page,
  }) => {
    const inventoryArea = new ProductsPage(page);
    const productItems = await inventoryArea.getProductsItems();

    await productItems[0].addItemToCart();
    await productItems[1].addItemToCart();

    const basePage = new BasePage(page);
    await basePage.openCartPage();

    const cartItems = await inventoryArea.getCartItems();

    expect(await cartItems.length).toBe(2);
  });
});
