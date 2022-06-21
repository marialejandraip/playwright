import { test as base } from "@playwright/test";

import {CartPage } from "../src/page/CartPage";
import { HomePage } from "../src/page/homePage";
import { LoginPage } from "../src/page/login";

const cartTest = base.extend <{cartPage: CartPage}> ({
  cartPage: async ({page}, use) => {
    
  }
})
