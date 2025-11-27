import BasePage from "./base.page.js";

export default class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstName = "#first-name";
    this.lastName = "#last-name";
    this.postalCode = "#postal-code";
    this.continueBtn = "#continue";
  }

  async submitForm(data) {
    await this.page.fill(this.firstName, data.first);
    await this.page.fill(this.lastName, data.last);
    await this.page.fill(this.postalCode, data.zip);
    await this.page.click(this.continueBtn);
  }
}
