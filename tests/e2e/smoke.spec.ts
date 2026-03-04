import { test, expect } from '@playwright/test';

test('homepage and language switch render', async ({ page }) => {
  await page.goto('/tr');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Turançiftçi Law Firm');
  await page.getByRole('link', { name: 'en' }).click();
  await expect(page).toHaveURL(/\/en/);
});

test('contact page form fields exist', async ({ page }) => {
  await page.goto('/tr/contact');
  await expect(page.getByRole('button', { name: 'Mesaji Gonder' })).toBeVisible();
});
