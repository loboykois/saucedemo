const { test, expect } = require("@playwright/test");
const { SwagLabsLoginPage} = require("../pageObjects/loginPage");


// Swag Labs Login page Functional tests

test.describe("Login page Swag Labs Functional tests", () => {
  test.beforeEach(async ({ page }) => {});

  test("when Swag Labs login page is downloaded she should contain login logo text", async ({
    page,
  }) => {});

  test("when field with username placeholder was fill with any symbol placeholder should be hidden", async ({
    page,
  }) => {});

  test("when field with password placeholder was fill with any symbol placeholder should be hidden", async ({
    page,
  }) => {});

  test("when login page is downloaded credential data at the bottom should be visible", async ({
    page,
  }) => {});

  test("when Login From displaying error message, X button should displayed on the right upper corner", async ({
    page,
  }) => {});

  test("when incorrect credentials entered in Login from, X button in error message block should close hint about mistake", async ({
    page,
  }) => {});

  test("when incorrect credentials entered in Login from, X circles symbols should be displayed on opposite side from credential", async ({
    page,
  }) => {});

  test("when user is pressed on X button in error message hint should be hidden without erasing incorrect credentials", async ({
    page,
  }) => {});

  test("when Login button pressed without entered credentials should display error message for user", async ({
    page,
  }) => {});

  test("when user entered ONLY username without password should display error message", async ({
    page,
  }) => {});

  test("when user entered ONLY password without username should display error message", async ({
    page,
  }) => {});

  test("when user entered incorrect username should display error message", async ({
    page,
  }) => {});

  test("when user entered incorrect password should display error message", async ({
    page,
  }) => {});

  test("when username and password are entered correctly user should be logged in", async ({
    page,
  }) => {});

  test("when entered more than 50 characters inside username or password field should not display error message", async ({
    page,
  }) => {});

  test("when user refresh the page Login Form credentials should be erased", async ({
    page,
  }) => {});

  test("when user is already logged in, back button should return user to login page with empty Login Form", async ({
    page,
  }) => {});

  test("when problem_user was logged browser should display warning modal window about data leak", async ({
    page,
  }) => {});

  test("when performance_glitch user was logged Login button should be disabled", async ({
    page,
  }) => {});
});
