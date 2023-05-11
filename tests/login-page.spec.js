const { test, expect } = require("@playwright/test");

// Swag Labs Login page test suite

test.describe("Basic browsers and URL test suite", () => {
  test("when user go to Swag Labs Login page search input should contain URL", async ({
    page,
  }) => {});

  test("when user entered incorrect URL should expect error", async ({
    page,
  }) => {});

  test("when Login page already downloaded browser window should have title 'Swag Labs'", async ({
    page,
  }) => {});

  test("when Swag Labs Login page is downloaded URL should begin from 'https:' secure protocol", async ({
    page,
  }) => {});

  test("when Swag Labs URL is entered into search input page loading should be less than 10 seconds", async ({
    page,
  }) => {});

  test("when page loading is finished page should have EN language", async ({
    page,
  }) => {});

  test("when browser get html file response should have 'utf-8' value in meta tag", async ({
    page,
  }) => {});
});

test.describe("Network test suit", () => {
  test("when page loading is finished all requests should have status code 200", async ({
    page,
  }) => {});

  test("when page loading is finished all requests should have time for request less than 500 ms with good internet connection", async ({
    page,
  }) => {});

  test("when page loading is finished all requests should have time for request less than 5000 ms with bad internet connection", async ({
    page,
  }) => {});
});

test.describe("Source test suit", () => {
  test("when page loading is finished all javascript files should have .js extensions", async ({
    page,
  }) => {});

  test("when page loading is finished all css files should have .css extensions", async ({
    page,
  }) => {});

  test("when page loading is finished all files with fonts should have one of available extensions: woff2, ttf", async ({
    page,
  }) => {});

  test("when page loading is finished manifest file should have extension .json", async ({
    page,
  }) => {});
});
