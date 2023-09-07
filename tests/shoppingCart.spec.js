import { test, expect } from "@playwright/test";
import { SwagLabsLoginPage } from "../pageObjects/loginPage/loginPage";
import { BasePage } from "../pageObjects/basePage/basePage";
import {
  ProductsPage,
  ShoppingCartPage,
} from "../pageObjects/productsPage/products/productsPage";

test.describe("Shopping cart test suite", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await loginPage.visitLoginPage();
    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    const password = await loginPage.pageLegend.getPassword();

    await loginPage.enterUserName(userName);
    await loginPage.enterPassword(password);
    await loginPage.loginForm.pressLoginButton();
  });

  test("When clicking on cart badge should navigate to shopping cart", async ({
    page,
  }) => {
    const basePage = new BasePage(page);

    await basePage.openCartPage();

    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
  });

  test("When clicking on cart badge and no items inside should show empty list", async ({
    page,
  }) => {
    const basePage = new BasePage(page);
    await basePage.openCartPage();

    const inventoryArea = new ShoppingCartPage(page);
    const cartItems = await inventoryArea.getProductsItems();

    expect(cartItems.length).toBe(0);
  });

  // When then should
  // should when

  test("Should display all products inside shopping cart", async ({ page }) => {
    const inventoryArea = new ProductsPage(page);
    const productItems = await inventoryArea.getProductsItems();

    await productItems[0].addItemToCart();
    await productItems[1].addItemToCart();

    await inventoryArea.openCartPage();
    const shoppingCart = new ShoppingCartPage(page);
    const cartItems = await shoppingCart.getProductsItems();

    expect(cartItems.length).toBe(2);
  });
});
