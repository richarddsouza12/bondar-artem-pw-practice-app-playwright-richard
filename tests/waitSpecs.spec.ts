import { state } from '@angular/animations';
import {test,expect} from '@playwright/test'


test('Auto waiting', async ({page}) => {

await page.goto('http://uitestingplayground.com/ajax');
await page.getByText('Button Triggering AJAX Request').click();


// using click()  - will implicitly wait by default.
// var successLabel = await page.locator('.bg-success').click();
// // will wait inplicitly for the lable to show after click . No Error. - max timeout default 30 secs


// using textContent()  - this also waits till the test timeout.
// var successLabel = page.locator('.bg-success');
// var text = await successLabel.textContent();
// expect(text).toEqual('Data loaded with AJAX get request.')


// using allTextContents()  - this will not implicity wati . it will fail on next step
// var successLabel = page.locator('.bg-success');
// var arraytxt = await successLabel.allTextContents()
// expect(arraytxt).toEqual('Data loaded with AJAX get request.')


// using allTextContents()  - this will not implicity wait . But it will wait using explicit wait.
var successLabel = page.locator('.bg-success');
await successLabel.waitFor({state:'visible'});
var arraytxt = await successLabel.allTextContents();
expect(arraytxt).toContain('Data loaded with AJAX get request.');



// __ wait for element
// await page.waitForSelector('.bg-success')

// // __ wait for particlular response - network tab response axax
// await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

// // wait for all network calls to be completed ('NOT RECOMMENDED')
// await page.waitForLoadState('networkidle')

})