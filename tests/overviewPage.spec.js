import { test, expect } from "@playwright/test";
import { ProductsPage } from "../pageObjects/productsPage/productPage/productsPage";
import { ShoppingCartPage } from "../pageObjects/shoppingCartPage/shoppingCartPage";
import { CheckoutPage } from "../pageObjects/checkoutPage/checkoutPage";
import { fakeFormData } from "./tools/fakeFormData";
import { standardUserLogin } from "./tools/authorization";
import { OverviewPage } from "../pageObjects/overviewPage/overviewPage";
import { priceType } from "../pageObjects/overviewPage/overviewSummary";

test.describe("Checkout: Overview test suite", () => {
  test.beforeEach(async ({ page }) => {
    await standardUserLogin(page);

    const inventoryArea = new ProductsPage(page);
    const productItems = await inventoryArea.getProductsItems();

    await productItems[0].addItemToCart();
    await productItems[1].addItemToCart();

    await inventoryArea.openCartPage();

    const shoppingCart = new ShoppingCartPage(page);
    await shoppingCart.checkOut();

    const checkOutPage = new CheckoutPage(page);
    await checkOutPage.checkoutFrom.firstName.fill(fakeFormData.firstName);
    await checkOutPage.checkoutFrom.lastName.fill(fakeFormData.lastName);
    await checkOutPage.checkoutFrom.postalCode.fill(fakeFormData.postalCode);
    await checkOutPage.pressContinue();
  });

  test("Should navigate to Overview page when user filled all data in Checkout form", async ({
    page,
  }) => {
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
  });

  test.describe("Should display summary ", () => {
    test("total price zero when user has not added products in cart", async ({
      page,
    }) => {
      const overviewPage = new OverviewPage(page);
      const itemTotal = await overviewPage.summary.getSummaryPriceInfo(
        priceType.item
      );
      const itemAmount = itemTotal.amount;

      expect(itemAmount).toBe(0);
    });
  });
});
