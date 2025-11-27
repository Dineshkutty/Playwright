import BasePage from "./base.page.js";

export default class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.username = "#user-name";
    this.password = "#password";
    this.loginBtn = "#login-button";
    this.errorMsg = '[data-test="error"]';
  }

  async login(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }
}
