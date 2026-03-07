import {test, expect} from '@playwright/test'
import {NavigationPage} from '../page-objects/navigationPage'
import { FormLayoutsPage } from '../page-objects/formLayoutsPage'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
})



test('Submit Usign Grid Form in Forms Layout Page Test', async ({page}) => {  

  const navigateTo = new NavigationPage(page)  
  const onFormLayoutsPage = new FormLayoutsPage(page)  
  
  await navigateTo.formLayoutsPage()  
  await onFormLayoutsPage.submitUsingTheGrigdFormWithCredentialsAndSelectOption('tesdt@test.com', 'Welcomel', 'Option 2')  
  
  //force failure 
  expect(1).toBe(2);

})  


test('Submit Inline Form in Forms Layout Page Test', async ({page}) => {  

  const navigateTo = new NavigationPage(page)  
  const onFormLayoutsPage = new FormLayoutsPage(page)  
  
  await navigateTo.formLayoutsPage()  
  await onFormLayoutsPage.sumbitInlineFormWithNameEmailAndCheckbox('John Smith', 'John@test.com', false)  
  
})  
