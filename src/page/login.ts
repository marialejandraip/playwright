import {Page} from "playwright"; 

export class LoginPage {
  readonly page: Page;
  
  constructor (page: Page) {
    this.page = page
  }

  async navigate(url) {
    await this.page.goto(url)
  }

  async login(username, password) {
    //Busca el elemento que responda a ese css selector en cualquier parte
    const usernameInput = this.page.locator('[data-test="username"]');
    await usernameInput.fill(username);

    const passwordInput = this.page.locator('[data-test="password"]');
    await passwordInput.fill(password);

    const buttonLogin = this.page.locator('[data-test="login-button"]');
    await buttonLogin.click();
  }
}