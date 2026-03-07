import {test,expect, Locator} from '@playwright/test'

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:4200/')
})


test.skip('radio buttons', async({page}) => { 


    var menu = page.locator('nb-menu');
    await menu.locator('span.menu-title:text("Forms")').click();
    await menu.locator('span.menu-title:text("Form Layouts")').click();


    const usingTheGridForm = page.locator('nb-card', {hasText: "Using the Grid"}); 
    
    
    /*
    // Using getByRole to locate the Radio button. This menthod will find the actual input radio element even
    //if there is a custom radio button with span and label. The dispalyed radio button is a custom
    // one with span and label. The actual input element is hidden in the DOM.

     var option1RadioWithGetRole = usingTheGridForm.getByRole('radio', {name: "Option 1"});
     var option2RadioWithGetRole = usingTheGridForm.getByRole('radio', {name: "Option 2"});
     
     //check option 1 and assert if checked  
    await option1RadioWithGetRole.click({force: true});
        // force true as the input element is not visible in the DOM 
    expect(option1RadioWithGetRole).toBeChecked();
    expect(option1RadioWithGetRole).toBeTruthy();
    
    //check option 2 is not checked
    expect(option2RadioWithGetRole).not.toBeChecked();
    expect(await option2RadioWithGetRole.isChecked()).toBeFalsy();
    */



    //Using locators to find the actual input radio element which is hidden in the DOM. 
    //This is not a recommended way as it is not visible and user cannot interact with it. 
    //But this is just for demonstration purpose to show how to find the actual element and perform actions on it.

    // //click option 1
    var option1RadioHiddenInput = usingTheGridForm.locator('nb-radio-group nb-radio span:text("Option 1")').locator('..').locator('input[type="radio"]');
    var option2RadioHiddenInput = usingTheGridForm.locator('nb-radio-group nb-radio span:text("Option 2")').locator('..').locator('input[type="radio"]');
   
     //check option 1 and assert if checked  
    await option1RadioHiddenInput.click({force: true});
         // force true as the input element is not visible in the DOM 
    expect(option1RadioHiddenInput).toBeChecked();
    expect(option1RadioHiddenInput).toBeTruthy();
    
    //check option 2 is not checked
    expect(option2RadioHiddenInput).not.toBeChecked();
    expect(await option2RadioHiddenInput.isChecked()).toBeFalsy();
    
    


    //Snippet to print the actual HTML of the element located 
    // console.log(await option2RadioActualInput.evaluate(el => el.outerHTML));
    

}) 


test.skip('checkboxes', async({page}) => {

  await page.getByText('Modal & Overlays').click()
  await page.getByText('Toastr').click()
  await page.getByRole('checkbox', {name: "Hide on click"}).uncheck({force: true})
  await page.getByRole('checkbox', {name: "Prevent arising of duplicate toast"}).check({force: true})


  var allBoxes : Locator = page.getByRole('checkbox')

  for( let box of ( await allBoxes.all() ) ) {

  await box.uncheck({force: true})
  expect(await box.isChecked()).toBeFalsy();

  }

  allBoxes.filter({hasText: "Hide on click"}) 


})


test.skip('tooltips', async ({page}) => {  
  await page.getByText('Modal & Overlays').click();  
  await page.getByText('Tooltip').click();  
  
  const toolTipCard = page.locator('nb-card nb-card-header:text("Tooltip With Icon")').locator('..');  
  await toolTipCard.getByRole('button', {name: "Show Tooltip"}).first().hover();  
  
//   const tooltipSpan = await page.locator('nb-tooltip').getByText('This is a tooltip'); // working
  const tooltipSpan = await page.locator('nb-tooltip :text("This is a tooltip")');
  console.log(await tooltipSpan.evaluate(el => el.outerHTML));
  await tooltipSpan.waitFor({state: 'visible', timeout: 3000});

  let tooltipText = await tooltipSpan.textContent();
  expect(tooltipText).toContain("This is a tooltip");

  //cdk-overlay-container nb-tooltip span:text("This is a tooltip")
});  


test.skip('dialog box', async({page}) => {


    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

    //Add a listner to the dialog box and validate the message and accept the dialog
    listenerForDialogBox(page);

    await page.getByRole('table').locator('tr', {hasText: "mdo@gmail.com"}).locator('.nb-trash').click()
    //without listener , the click will not popup the dialog box.
    //you will need to add a listner to handle it.

})


function listenerForDialogBox(page) {

    page.on('dialog', async (dialog) => {

        await page.waitForTimeout(2000); // static wait for demonstration purpose.

        expect(dialog.message()).toEqual('Are you sure you want to delete?');
        await page.waitForTimeout(2000);// static wait for demonstration purpose.

        dialog.accept();
        //dialog.dismiss();

    });
}

test( 'web tables' , async ({ page }) => {

  test.setTimeout(20000);

  await page.getByText('Tables & Data').click()  
  await page.getByText('Smart Table').click()  
 

  const targetRow2 = page.locator('ngx-smart-table table tr').getByText("mdo@gmail.com").locator('xpath=ancestor::tr');
  //const targetRow2 = page.getByRole('row', { name: "twitter@outlook.com" });  // gets the same result as above.
  await targetRow2.locator("i[class='nb-edit']").click();

  await page.waitForTimeout(1000);

  var nameTextboxEditField = page.locator('ngx-smart-table table').locator('input-editor input[placeholder="First Name"]');
    //reget the field after click as the DOM will be refreshed and the previous reference will be stale.
  await nameTextboxEditField.clear();
  await nameTextboxEditField.fill("Richard");
  await page.locator('ngx-smart-table table i[class="nb-checkmark"]').click(); 

})  

