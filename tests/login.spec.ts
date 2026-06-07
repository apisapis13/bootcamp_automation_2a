import { test, expect } from '@playwright/test';

test('Success Login using Valid Credentials @smoke @p0 @positive', async ({ page }) => {
  await page.goto('https://www.emra.chat/login');
  await page.getByRole('textbox', { name: 'Email' }).fill('apisaditya@gmail.com');
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page).toHaveURL('https://www.emra.chat/home');
});


test('Invalid Password @smoke @p0 @negative', async ({ page }) => {
  await page.goto('https://www.emra.chat/login');
  await page.getByRole('textbox', { name: 'Email' }).fill('apisaditya@gmail.com');
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Password' }).fill('apisapis13');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.pageErrors().then(errors => {
    expect(errors).toContain('Invalid credentials');
  })
});
