import { test, expect } from "@playwright/test";
import { SwagLabsLoginPage } from "../pageObjects/loginPage";
import { ProductsPage } from "../pageObjects/productsPage";
import { ShoppingCartBadge } from "../pageObjects/shoppingCartBadge";
import { BasePage } from "../pageObjects/basePage";

test.describe("Shopping Cart test suit", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await loginPage.visitLoginPage();

    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    const password = await loginPage.pageLegend.getPassword();

    await loginPage.enterUserName(userName);
    await loginPage.enterPassword(password);
    await loginPage.loginForm.pressLoginButton();
  });

  test("if user has not added items to cart Shopping Cart should be empty", async ({
    page,
  }) => {
    const cart = new ShoppingCartBadge(page);
    const shoppingCart = await cart.getShoppingCart();

    await expect(shoppingCart).toBeEmpty();
  });

  // when user added item to card badge should increase counter by 1
  test("when user clicked on Add to Cart button Shopping Cart counter should 1", async ({
    page,
  }) => {
    const productsPage = new ProductsPage(page);
    const productItem = await productsPage.getProductItem(0);

    const beforeAddCount = await productsPage.shoppingCartBadge.getCounter();
    await productItem.addItemToCart();
    const afterAddCount = await productsPage.shoppingCartBadge.getCounter();

    expect(beforeAddCount).toBe(0);
    expect(afterAddCount).toBe(1);
  });
});
