import { test, expect } from "@playwright/test";
import { SwagLabsLoginPage } from "../pageObjects/loginPage/loginPage";
import { ProductsPage } from "../pageObjects/productsPage/productPage/productsPage";
import { ShoppingCartPage } from "../pageObjects/shoppingCartPage/shoppingCartPage";
import { CheckoutPage } from "../pageObjects/checkoutPage/checkoutPage";
import { fakeFormData } from "./tools/fakeFormData";



test.describe("Checkout page test suite", () => {
  //   const fakeFormData = {
  //     firstName: "test",
  //     lastName: "test2",
  //     postalCode: "12345",
  //   };

  test.beforeEach(async ({ page }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await loginPage.visitLoginPage();
    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    const password = await loginPage.pageLegend.getPassword();

    await loginPage.enterUserName(userName);
    await loginPage.enterPassword(password);
    await loginPage.loginForm.pressLoginButton();

    const inventoryArea = new ProductsPage(page);
    await inventoryArea.openCartPage();

    const shoppingCart = new ShoppingCartPage(page);
    await shoppingCart.checkOut();
  });

  test("When user clicked on Checkout button should navigate to checkout form", async ({
    page,
  }) => {
    //  const inventoryArea = new ProductsPage(page);
    //  await inventoryArea.openCartPage();

    //  const shoppingCart = new ShoppingCartPage(page);
    //  await shoppingCart.checkOut();

    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
  });

  test("When user navigated to checkout page should display user info form", async ({
    page,
  }) => {
    //  const inventoryArea = new ProductsPage(page);
    //  await inventoryArea.openCartPage();

    //  const shoppingCart = new ShoppingCartPage(page);
    //  await shoppingCart.checkOut();

    const checkOutPage = new CheckoutPage(page);
    const checkoutFormLocator = await checkOutPage.checkoutFrom.formLocator;

    await expect(checkoutFormLocator).toBeVisible();
  });

  test.describe("When user does not fill || filled", () => {
    //  test.beforeEach(async ({ page }) => {
    //    const inventoryArea = new ProductsPage(page);
    //    await inventoryArea.openCartPage();

    //    const shoppingCart = new ShoppingCartPage(page);
    //    await shoppingCart.checkOut();
    //  });

    test("any information in checkout form should display error", async ({
      page,
    }) => {
      const checkOutPage = new CheckoutPage(page);
      await checkOutPage.pressContinue();

      const receivedErrorText =
        await checkOutPage.checkoutFrom.getValidationErrorText();
      const expectedErrorMessageText = "Error: First Name is required";

      expect(receivedErrorText).toEqual(expectedErrorMessageText);
    });

    test("Last name field in from should display error with corresponding error", async ({
      page,
    }) => {
      const checkOutPage = new CheckoutPage(page);
      await checkOutPage.checkoutFrom.firstName.fill(fakeFormData.firstName);
      await checkOutPage.pressContinue();

      const lastNameErrorText =
        await checkOutPage.checkoutFrom.getValidationErrorText();
      const secondExpectedErrorMessageText = "Error: Last Name is required";

      expect(lastNameErrorText).toEqual(secondExpectedErrorMessageText);
    });

    test("Postal code field in form should display error with corresponding error", async ({
      page,
    }) => {
      const checkOutPage = new CheckoutPage(page);

      await checkOutPage.checkoutFrom.firstName.fill(fakeFormData.firstName);
      await checkOutPage.checkoutFrom.lastName.fill(fakeFormData.lastName);
      await checkOutPage.pressContinue();

      const postalCodeErrorText =
        await checkOutPage.checkoutFrom.getValidationErrorText();
      const thirdExpectedErrorMessageText = "Error: Postal Code is required";

      expect(postalCodeErrorText).toEqual(thirdExpectedErrorMessageText);
    });

    test("all information in form should be navigated to Overview page", async ({
      page,
    }) => {
      const checkOutPage = new CheckoutPage(page);
      await checkOutPage.checkoutFrom.firstName.fill(fakeFormData.firstName);
      await checkOutPage.checkoutFrom.lastName.fill(fakeFormData.lastName);
      await checkOutPage.checkoutFrom.postalCode.fill(fakeFormData.postalCode);
      await checkOutPage.pressContinue();

      await expect(page).toHaveURL(
        "https://www.saucedemo.com/checkout-step-two.html"
      );
    });
  });

  test("all information in form should be navigated to Overview page", async ({
    page,
  }) => {
    //  const inventoryArea = new ProductsPage(page);
    //  await inventoryArea.openCartPage();

    //  const shoppingCart = new ShoppingCartPage(page);
    //  await shoppingCart.checkOut();

    const checkOutPage = new CheckoutPage(page);
    await checkOutPage.checkoutFrom.firstName.fill(fakeFormData.firstName);
    await checkOutPage.checkoutFrom.lastName.fill(fakeFormData.lastName);
    await checkOutPage.checkoutFrom.postalCode.fill(fakeFormData.postalCode);
    await checkOutPage.pressContinue();

    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-two.html"
    );
  });
});
