import {test,expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:4200/')
})


test('Testing Locators', async ({page}) => {

      var menu = page.locator('nb-menu');
      await menu.locator('span.menu-title:text("Forms")').click();
      await menu.locator('span.menu-title:text("Form Layouts")').click();
      await page.locator('nb-card nb-card-header:text("Using the Grid")').click();

  })


 test('Testing Assertions', async ({page}) => {

      var menu = page.locator('nb-menu');
      await menu.locator('span.menu-title:text("Forms")').click();
      await menu.locator('span.menu-title:text("Form Layouts")').click();
      await page.locator('nb-card nb-card-header:text("Using the Grid")').click();

     var textVar = "hello";
     var numberVar = 10;
     var numArray = [1,2,3];


     var radioButton = page.locator('#some-raido-button-id');
     //Number and string validations 

     expect(textVar).toContain("Hello");
     expect(textVar).toEqual("hello");

     expect(numberVar).toEqual(10);
     expect(numArray).toContain(1);

     //checked validation
     expect(radioButton).toBeChecked();
     expect(radioButton).toBeDisabled();
     expect(radioButton).toBeEnabled();
    
  })







// test.describe('suite1', () => {

//   test.beforeEach(async ({page}) => {
//     await page.getByText('Charts').click();
//   })

//   test('the first test', async ({page}) => {
//     await page.getByText('Echarts').click();
//   })

//   test('navigate to datepicker page', async ({page}) => {
//     await page.getByText('Pie').isVisible();
//   })
// })

// test.describe('suite2', () => {

//   test.beforeEach(async ({page}) => {
//     await page.getByText('Forms').click();
//   })

//   test('the first test1', async ({page}) => {
//     await page.getByText('Form Layouts').click();
//   })

//   test('navigate to datepicker page1', async ({page}) => {
//     await page.getByText('Datepicker').click();
//   })
// })
