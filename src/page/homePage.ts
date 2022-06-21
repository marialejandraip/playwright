import {Page} from "playwright"; 

export class HomePage {
  readonly page: Page;
  
  constructor (page: Page) {
    this.page = page
  }

  async addToCart(item){
    const itemElement = this.page.locator(`"[data-test="add-to-cart-sauce-labs-${item}]"`);

    await itemElement.click();
  }

  async goToCart() {
    const cartButton = this.page.locator('.shopping-cart-link');
  }

}