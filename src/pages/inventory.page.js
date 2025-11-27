import BasePage from "./base.page.js";

export default class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.addToCartBtn = "#add-to-cart-sauce-labs-backpack";
    this.cartBadge = ".shopping_cart_badge";
  }

  async addBackpackToCart() {
    await this.page.click(this.addToCartBtn);
  }
}
