import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
});

test('button called login makes logged in text appear', async ({ page }) => {
	await page.goto('/');
	await page.locator('button >> text=/login/i').click()
	await expect(page.locator('html >> text=/logged in/i')).toBeVisible()
})