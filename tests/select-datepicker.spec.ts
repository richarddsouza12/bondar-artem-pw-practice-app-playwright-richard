import { test, expect, Page } from '@playwright/test';

async function pickDateDaysFromToday(page: Page, daysFromToday = 2) {
  const target = new Date();
  target.setDate(target.getDate() + daysFromToday);
  const dayStr = String(target.getDate());

  const input = page.locator('input').first();
  await input.click();
  await page.waitForTimeout(150);

  const selectors = [
    `nb-calendar button:has-text("${dayStr}")`,
    `mat-calendar button.mat-calendar-body-cell:has-text("${dayStr}")`,
    `div.ngb-datepicker button:has-text("${dayStr}")`,
    `button:has-text("${dayStr}")`,
  ];

  for (const sel of selectors) {
    const loc = page.locator(sel).first();
    if (await loc.count() > 0) {
      try {
        await loc.click();
        return;
      } catch (e) {
        // continue to next selector
      }
    }
  }

  // Fallback: fill the input directly with a locale date string
  const formatted = target.toLocaleDateString();
  await input.fill(formatted);
  await input.dispatchEvent('input');
  await input.press('Tab');
}

test('open first datepicker and select date 2 days from today', async ({ page }) => {
  await page.goto('http://localhost:4200/pages/forms/datepicker');
  await pickDateDaysFromToday(page, 2);

  const input = page.locator('input').first();
  const val = await input.inputValue();

  const expected = new Date();
  expected.setDate(expected.getDate() + 2);
  const expectedDay = String(expected.getDate());

  expect(val).toContain(expectedDay);
});
