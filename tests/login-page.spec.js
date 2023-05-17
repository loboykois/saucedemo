const { test, expect } = require("@playwright/test");
const { SwagLabsLoginPage } = require("../pom/login-page-object-model");

// Swag Labs Login page Functional tests

test.describe("Login page Swag Labs Functional tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await loginPage.visitSwagLabsPage();
  });

  test("when Swag Labs login page is downloaded she should contain login logo text", async ({
    page,
  }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await expect(loginPage.loginLogo).toHaveText("Swag Labs");
  });

  test("when login page is downloaded she should contain Login From in the middle section", async ({
    page,
  }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await expect(loginPage.loginForm).toBeVisible();
  });

  test("when login page is downloaded Login From should contain Username, Password fields & Login button", async ({
    page,
  }) => {
    const loginPage = new SwagLabsLoginPage(page);
    const loginFormBlock = [
      loginPage.userNameFormInput,
      loginPage.passwordFormInput,
      loginPage.loginButton,
    ];
    expect(
      loginFormBlock[0] && loginFormBlock[1] && loginFormBlock[2]
    ).toBeVisible();
  });

  test("when login page is downloaded Username field should displaying with placeholder 'Username'", async ({
    page,
  }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await expect(loginPage.userNamePlaceholder).toHaveText("Username");
  });

  test("when login page is downloaded Password field should displaying with placeholder 'Password'", async ({
    page,
  }) => {
    const loginPage = new SwagLabsLoginPage(page);
    await expect(loginPage.passwordPlaceholder()).toHaveText("Password");
  });

  test("when field with username placeholder was fill with any symbol placeholder should be hidden", async ({
    page,
  }) => {
    const loginPage = new SwagLabsLoginPage(page);
    if (!loginPage.toEqualUsernameEmptyString("")) {
      expect(loginPage.userNamePlaceholder).toBeVisible();
    }
    expect(loginPage.userNamePlaceholder).toBeHidden();
  });

  test("when field with password placeholder was fill with any symbol placeholder should be hidden", async ({
    page,
  }) => {
    const loginPage = new SwagLabsLoginPage(page);
    if (!loginPage.toEqualPasswordEmptyString("")) {
      expect(loginPage.passwordPlaceholder).toBeVisible();
    }
    expect(loginPage.passwordPlaceholder).toBeHidden();
  });

  test("when login page is downloaded Login button should contain text 'Login'", async ({
    page,
  }) => {
    const loginPage = new SwagLabsLoginPage(page);
    expect(loginPage.triggerButtonInnerText("Login"));
  });

  test("when login page is downloaded she should contain credential data at the bottom", async ({
    page,
  }) => {
    const loginPage = new SwagLabsLoginPage(page);
    const credentials = {
      leftTitle: "Accepted usernames are:",
      standardUser: "standard_user",
      lockedUser: "locked_out_user",
      problemUser: "problem_user",
      performanceUser: "performance_glitch_user",
      rightTitle: "Password for all users:",
      passwordCredential: "secret_sauce",
    };

    expect(loginPage.pageLoginCredentials).toHaveProperty(
      leftTitle,
      standardUser,
      lockedUser,
      problemUser,
      performanceUser
    ) &&
      expect(loginPage.passwordCredential).toHaveProperty(
        rightTitle,
        passwordCredential
      );
  });

  test("when loaded is finished credential block should composed of two parts: Accepted usernames & Password for all users", async ({
    page,
  }) => {});

  test("when loaded is finished credential block should contain text", async ({
    page,
  }) => {});

  test("when loaded is finished area around Login From should to be not clickable", async ({
    page,
  }) => {});

  test("when cursor situated in Login button area Login button should not change own statement on hover", async ({
    page,
  }) => {});

  test("when cursor situated in Login button area cursor should change his statement pointer", async ({
    page,
  }) => {});

  test("when cursor is focused on Username or Password field he should be transform into text cursor", async ({
    page,
  }) => {});

  test("when Login From displaying error message, X button should situated on the right upper corner", async ({
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
});

// Swag Labs Graphical User Interface tests

test.describe("Login page Swag Labs GUI tests", () => {
  test("when login page already rendered Login From should has white background", async ({
    page,
  }) => {});

  test("when login page already rendered Credential block should has black background", async ({
    page,
  }) => {});

  test("when login page already rendered Login button should be green", async ({
    page,
  }) => {});

  test("when Login From displaying error message rectangle with message should has red background", async ({
    page,
  }) => {});

  test("when Login From displaying error message X button on the right upper corner of red rectangle should be white", async ({
    page,
  }) => {});

  //   test("when login page already rendered Login button should be green", async ({
  //     page,
  //   }) => {});
  //   test("when login page already rendered Login button should be green", async ({
  //     page,
  //   }) => {});
});

// Positive & Negative Login from scenarios

test.describe("Swag Labs Data tests", () => {
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

  test("when user entered ONLY correct username without password should display error message", async ({
    page,
  }) => {});

  test("when user entered ONLY correct password without username should display error message", async ({
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

  test("when user is already logged in back button should return user to login page with empty Login Form", async ({
    page,
  }) => {});

  test("when problem_user was logged browser should display warning modal window about data leak", async ({
    page,
  }) => {});

  test("when performance_glitch user was logged Login button should be disabled", async ({
    page,
  }) => {});

  test("when performance_glitch user was logged cursor should be pointer until loading process is not finished", async ({
    page,
  }) => {});
});
