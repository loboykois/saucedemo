import { SwagLabsLoginPage } from "../../pageObjects/loginPage/loginPage";

const loginAsUser = async(userType) => {
  const loginPage = new SwagLabsLoginPage(page);
  await loginPage.visitLoginPage();

  const userName = await loginPage.pageLegend.getUserNameByType(userType);
  const password = await loginPage.pageLegend.getPassword();

  await loginPage.enterUserName(userName);
  await loginPage.enterPassword(password);
  await loginPage.loginForm.pressLoginButton();
}

export async function loginAsStandardUser(page) {
  await loginAsUser("standard");
}

export async function loginAsOtherUser(page) {
  await loginAsUser("standard");
}