import { test, expect } from '@playwright/test';

test('homepage shows hero copy', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Elegance Redefined for the Modern Indian Woman')).toBeVisible();
});
