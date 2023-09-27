import { SwagLabsLoginPage } from "../../pageObjects/loginPage/loginPage";

export async function loginAsStandardUser(page) {
  const loginPage = new SwagLabsLoginPage(page);
  await loginPage.visitLoginPage();

  const userName = await loginPage.pageLegend.getUserNameByType("standard");
  const password = await loginPage.pageLegend.getPassword();

  await loginPage.enterUserName(userName);
  await loginPage.enterPassword(password);
  await loginPage.loginForm.pressLoginButton();
}
