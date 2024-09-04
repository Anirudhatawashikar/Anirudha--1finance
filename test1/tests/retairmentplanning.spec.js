import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://1finance.co.in/retirement-planning/');
  await page.locator('//input[@placeholder="Enter your name"]').fill("Anirudha");
  await page.locator('//input[@placeholder="Enter your phone number"]').fill("7448143454");
  await page.locator('//button[@class="hero_modal_btn__9SnMB"]').click();
});

test('calculate', async ({ page }) => {
  await page.goto('https://1finance.co.in/retirement-planning/');
    await page.locator('//a[@class="what-is-retirement-planning_cta_btn__Uanww"]').click();
    await page.waitForTimeout(4000)
});

 