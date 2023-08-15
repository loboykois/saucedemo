import { test, expect } from "@playwright/test";
import { Filter, optionType } from "../pageObjects/filter";
import { SwagLabsLoginPage } from "../pageObjects/loginPage";
import { Products } from "../pageObjects/productsPage";
import {
  byAlphabetAscending,
  byAlphabetDescending,
  byPriceAscending,
  byPriceDescending,
} from "./tools/sorting";

test.describe("Filter dropdown test suite", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await loginPage.visitLoginPage();

    const userName = await loginPage.pageLegend.getUserNameByType("standard");
    const password = await loginPage.pageLegend.getPassword();

    await loginPage.enterUserName(userName);
    await loginPage.enterPassword(password);
    await loginPage.loginForm.pressLoginButton();
  });

  test("when user is logged in product filter option should displaying first value from list of options", async ({
    page,
  }) => {
    const filter = new Filter(page);
    const activeOption = await filter.selectDefaultOption();

    expect(activeOption).toBe("Name (A to Z)");

    //  expect(await activeOption).toBe("Name (A to Z)");
    //  const activeOption = await page.locator(".active_option").innerText();
  });

  test("filter should contain four slots in option list", async ({ page }) => {
    const filter = new Filter(page);
    const optionsList = await filter.getListOfOptions();

    expect(await optionsList.length).toBe(4);
  });

  test("when Name (Z to A) options is chosen filter should set correct first product item", async ({
    page,
  }) => {
    const filter = new Filter(page);

    await filter.selectOption(optionType.descending);

    const products = new Products(page);
    const productItem = await products.getProductItem(0);

    expect(await productItem.getItemTitle()).toBe(
      "Test.allTheThings() T-Shirt (Red)"
    );
  });

  test("when Name (A to Z) options is chosen filter should set correct first product item", async ({
    page,
  }) => {
    const filter = new Filter(page);

    await filter.selectOption(optionType.ascending);

    const products = new Products(page);
    const productItem = await products.getProductItem(0);

    expect(await productItem.getItemTitle()).toBe("Sauce Labs Backpack");
  });

  test("when Name (Z to A) options is chosen filter should sort product items in alphabet descending order", async ({
    page,
  }) => {
    const filter = new Filter(page);

    await filter.selectOption(optionType.descending);

    const products = new Products(page);
    const productItems = await products.getProductsItems();

    const titles = await Promise.all(productItems.map((p) => p.getItemTitle()));

    //  for (let i = 0; i < productItems.length; i++) {
    //     const title = await productItems[i].getItemTitle();

    //     titles.push(title);
    //  }
    //   const byAlphabetDescending = (a, b) => (a > b ? -1 : 1);

    const ordered = titles.sort(byAlphabetDescending);
    const expected = [
      "Test.allTheThings() T-Shirt (Red)",
      "Sauce Labs Onesie",
      "Sauce Labs Fleece Jacket",
      "Sauce Labs Bolt T-Shirt",
      "Sauce Labs Bike Light",
      "Sauce Labs Backpack",
    ];
    expect(ordered).toEqual(expected);
  });

  test("when Name (A to Z) options is chosen filter should sort product items in alphabet ascending order", async ({
    page,
  }) => {
    const filter = new Filter(page);

    await filter.selectOption(optionType.ascending);

    const products = new Products(page);
    const productItems = await products.getProductsItems();

    const titles = await Promise.all(productItems.map((t) => t.getItemTitle()));

    const ordered = titles.sort(byAlphabetAscending);
    const expected = [
      "Test.allTheThings() T-Shirt (Red)",
      "Sauce Labs Onesie",
      "Sauce Labs Fleece Jacket",
      "Sauce Labs Bolt T-Shirt",
      "Sauce Labs Bike Light",
      "Sauce Labs Backpack",
    ];
    expect(ordered).toEqual(expected.reverse());
  });

  test("when Price (low to high) options is chosen filter should sort product items by price from lowest to highest", async ({
    page,
  }) => {
    const filter = new Filter(page);

    await filter.selectOption(optionType.lowPrice);

    const products = new Products(page);
    const productItems = await products.getProductsItems();

    const prices = await Promise.all(productItems.map((p) => p.getItemPrice()));

    const priceValues = await Promise.all(prices.map((v) => v["value"]));

    const ordered = priceValues.sort(byPriceAscending);

    const expected = [7.99, 9.99, 15.99, 15.99, 29.99, 49.99];

    expect(ordered).toEqual(expected);
  });

  test("when Price (high to low) options is chosen filter should sort product items by price from highest to lowest", async ({
    page,
  }) => {
    const filter = new Filter(page);

    await filter.selectOption(optionType.lowPrice);

    const products = new Products(page);
    const productItems = await products.getProductsItems();

    const prices = await Promise.all(productItems.map((p) => p.getItemPrice()));
    const priceValues = await Promise.all(prices.map((v) => v["value"]));

    const ordered = priceValues.sort(byPriceDescending);
    const expected = [7.99, 9.99, 15.99, 15.99, 29.99, 49.99];

    expect(ordered).toEqual(expected.reverse());
  });
});
