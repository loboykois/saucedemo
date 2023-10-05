import { test, expect } from "@playwright/test";
import { loginAsStandardUser } from "./tools/authorization";
import { ProductsPage } from "../pageObjects/productsPage/productPage/productsPage";
import { ShoppingCartPage } from "../pageObjects/shoppingCartPage/shoppingCartPage";
import { CheckoutPage } from "../pageObjects/checkoutPage/checkoutPage";
import { OverviewPage } from "../pageObjects/overviewPage/overviewPage";
import { CompletePage } from "../pageObjects/completePage/completePage";
import { fakeFormData } from "../tests/tools/fakeFormData";

test.describe("Checkout: Complete test suite", () => {
  test.beforeEach(async ({ page }) => {
    await loginAsStandardUser(page);
  });

  //  TODO: fix problem with visual comparisons
  test("Should display Pony Express icon when user has dispatched order", async ({
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
    await overviewPage.finishOrder();

    const completePage = new CompletePage(page);
    const ponyIcon = completePage.getPonyIcon();

    await expect(ponyIcon).toHaveScreenshot();
  });
});
