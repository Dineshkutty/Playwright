import BasePage from "./base.page.js";

export default class TodoPage extends BasePage {
  constructor(page) {
    super(page);
    this.input = ".new-todo";
    this.items = ".todo-list li";
  }

  async addItem(text) {
    await this.page.fill(this.input, text);
    await this.page.press(this.input, "Enter");
  }

  async deleteItem(index) {
    await this.page.hover(`${this.items}:nth-child(${index})`);
    await this.page.click(`${this.items}:nth-child(${index}) .destroy`);
  }
}
