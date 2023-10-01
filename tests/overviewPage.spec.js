import { test, expect } from "@playwright/test";
import { ProductsPage } from "../pageObjects/productsPage/productPage/productsPage";
import { ShoppingCartPage } from "../pageObjects/shoppingCartPage/shoppingCartPage";
import { CheckoutPage } from "../pageObjects/checkoutPage/checkoutPage";
import { fakeFormData } from "./tools/fakeFormData";
import { loginAsStandardUser } from "./tools/authorization";
import { OverviewPage } from "../pageObjects/overviewPage/overviewPage";
import { priceType } from "../pageObjects/overviewPage/overviewSummary";
import { ShoppingCartItem } from "../pageObjects/shoppingCartPage/shoppingCartItem";

test.describe("Checkout: Overview test suite", () => {
  test.beforeEach(async ({ page }) => {
    await loginAsStandardUser(page);
  });

  test("Should navigate to Overview page when user filled all data in Checkout form", async ({
    page,
  }) => {
    const inventoryArea = new ProductsPage(page);

    await inventoryArea.openCartPage();

    const shoppingCart = new ShoppingCartPage(page);
    await shoppingCart.checkOut();

    const checkOutPage = new CheckoutPage(page);
    await checkOutPage.checkoutFrom.firstName.fill(fakeFormData.firstName);
    await checkOutPage.checkoutFrom.lastName.fill(fakeFormData.lastName);
    await checkOutPage.checkoutFrom.postalCode.fill(fakeFormData.postalCode);
    await checkOutPage.pressContinue();

    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
  });

  test("Should display summary total price zero when user has not added products in cart", async ({
    page,
  }) => {
    const inventoryArea = new ProductsPage(page);
    await inventoryArea.openCartPage();

    const shoppingCart = new ShoppingCartPage(page);
    await shoppingCart.checkOut();

    const checkOutPage = new CheckoutPage(page);
    await checkOutPage.checkoutFrom.firstName.fill(fakeFormData.firstName);
    await checkOutPage.checkoutFrom.lastName.fill(fakeFormData.lastName);
    await checkOutPage.checkoutFrom.postalCode.fill(fakeFormData.postalCode);
    await checkOutPage.pressContinue();

    const overviewPage = new OverviewPage(page);

    const itemTotal = await overviewPage.summary.getPriceInfoByType(
      priceType.item
    );
    const itemAmount = itemTotal.amount;

    expect(itemAmount).toBe(0);
  });

  test("Should display price of item when user has added product in cart", async ({
    page,
  }) => {
    const inventoryArea = new ProductsPage(page);
    const productItems = await inventoryArea.getProductsItems();
    await productItems[0].addItemToCart();

    await inventoryArea.openCartPage();
    const shoppingCart = new ShoppingCartPage(page);
    const shoppingCartItems = await shoppingCart.getItems();
    const cartItem = await shoppingCartItems[0];
    const cartItemPrice = await cartItem.details.getItemPrice();
    const cartItemValue = cartItemPrice.value;

    await shoppingCart.checkOut();

    const checkOutPage = new CheckoutPage(page);
    await checkOutPage.checkoutFrom.firstName.fill(fakeFormData.firstName);
    await checkOutPage.checkoutFrom.lastName.fill(fakeFormData.lastName);
    await checkOutPage.checkoutFrom.postalCode.fill(fakeFormData.postalCode);
    await checkOutPage.pressContinue();

    const overviewPage = new OverviewPage(page);

    const itemTotal = await overviewPage.summary.getPriceInfoByType(
      priceType.item
    );
    const itemAmount = itemTotal.amount;

    expect(itemAmount).toBe(cartItemValue);
  });

  test("Should display sum prices of items when user has added several products in cart", async ({
    page,
  }) => {
    const inventoryArea = new ProductsPage(page);
    const productItems = await inventoryArea.getProductsItems();
    await productItems[0].addItemToCart();
    await productItems[1].addItemToCart();
    await productItems[2].addItemToCart();

    await inventoryArea.openCartPage();
    const shoppingCart = new ShoppingCartPage(page);
    const cartItems = await shoppingCart.getItems();

    //  TODO: know how get sum of prices of all products in cart using for ()

    await shoppingCart.checkOut();

    const checkOutPage = new CheckoutPage(page);
    await checkOutPage.checkoutFrom.firstName.fill(fakeFormData.firstName);
    await checkOutPage.checkoutFrom.lastName.fill(fakeFormData.lastName);
    await checkOutPage.checkoutFrom.postalCode.fill(fakeFormData.postalCode);
    await checkOutPage.pressContinue();

    const overviewPage = new OverviewPage(page);

    const itemTotal = await overviewPage.summary.getPriceInfoByType(
      priceType.item
    );
    const itemAmount = itemTotal.amount;

    expect(itemAmount).toBe(cartItemValue);
  });
});
