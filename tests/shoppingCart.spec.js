import { test, expect } from "@playwright/test";
import { SwagLabsLoginPage } from "../pageObjects/loginPage";
import { Products } from "../pageObjects/productsPage";
import { ShoppingCart } from "../pageObjects/shoppingCart";

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
    // create way to check empty shopping cart link or not

    const cart = new ShoppingCart(page);
    const shoppingCart = await cart.getShoppingCart();

    expect(shoppingCart).toBeEmpty();
  });

  test("when user clicked on Add to Cart button Shopping Cart counter should be equal 1", async ({
    page,
  }) => {
    const inventoryArea = new Products(page);
    const productItem = inventoryArea.getProductItem(0);

    (await productItem).addItemToCart();

    const cart = new ShoppingCart(page);
    const cartCounter = cart.getShoppingCartCounter();

    expect(await cartCounter).toBe(1);
  });
});
