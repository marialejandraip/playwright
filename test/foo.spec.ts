import { test, expect } from '@playwright/test';
import { HomePage } from '../src/page/homePage';
import { LoginPage } from '../src/page/login';
import {CartPage} from'../src/page/CartPage';

test('test', async ({ page }) => {
  // Go to https://www.saucedemo.com/

  const loginPage = new LoginPage(page);
  await loginPage.navigate('/');
  await loginPage.login("standard_user", "secret_sauce");
  
  const homePage = new HomePage(page);
  await homePage.addToCart("backpack");
  await homePage.addToCart("bike-light");
  await homePage.addToCart("bolt-t-shirt");

  const cartPage = new CartPage(page);
  await 
 
  //await page.goto('/');
  // Click [data-test="username"]
  // await page.click('[data-test="username"]');
  // // Fill [data-test="username"]
  // await page.fill('[data-test="username"]', 'user_demo');
  // // Press Tab
  // await page.press('[data-test="username"]', 'Tab');
  // // Fill [data-test="password"]
  // await page.fill('[data-test="password"]', 'holii');
  // // Click [data-test="login-button"]
  // await page.click('[data-test="login-button"]');
  // // Click [data-test="username"]
  // await page.click('[data-test="username"]');
  // // Fill [data-test="username"]
  // await page.fill('[data-test="username"]', 'standard_user');
  // Click [data-test="login-button"]
  await page.click('[data-test="login-button"]');
  // Click [data-test="password"]
  await page.click('[data-test="password"]');
  // Fill [data-test="password"]
  await page.fill('[data-test="password"]', 'secret_sauce');
  // Press Enter
  await page.press('[data-test="password"]', 'Enter');
  // Click [data-test="login-button"]
  await page.click('[data-test="login-button"]');
  expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
  // Click [data-test="add-to-cart-sauce-labs-backpack"]
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  // Click [data-test="add-to-cart-sauce-labs-bike-light"]
  await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
});