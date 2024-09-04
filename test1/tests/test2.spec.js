import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/running-tests/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('trace viewer', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/running-tests/');

  // Click the get started link.
  await page.locator("(//a[@class='menu__link'][normalize-space()='Trace viewer'])[1]").click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
