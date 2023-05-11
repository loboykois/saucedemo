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

test.describe("Login form test suit", () => {
  test("when username and password are entered correctly user should be logged in", async ({
    page,
  }) => {});

  test("when entered username is incorrect should display error message", async ({
    page,
  }) => {});
  test("when entered password is incorrect should display error message", async ({
    page,
  }) => {});
  test("when username and password fields are empty should display error message", async ({
    page,
  }) => {});
  test("when entered less than 6 characters in username or password fields should display error about range of characters", async ({
    page,
  }) => {});
  test("when user tried to login with correct credentials from two different browsers at same time, authorization should succeed", async ({
    page,
  }) => {});
  test("when user tried to login with incorrect credentials from another browser, authorization should unsuccessful", async ({
    page,
  }) => {});
  test("when error message is triggered should display rectangle red block with error message", async ({
    page,
  }) => {});
  test("when error message is triggered rectangle block with error message should contain X button from right upper corner", async ({
    page,
  }) => {});
  test("when X button is pressed in error message block all hints should disappears", async ({
    page,
  }) => {});
  test("when refresh button pressed all credentials should be erased", async ({
    page,
  }) => {});
  test("when user is already logged in back button should return user to login page with empty username and password fields", async ({
    page,
  }) => {});
});
