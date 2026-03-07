import {test} from '@playwright/test'
import config from '../playwright.config';
import {EnvVariableHelper} from '../helpers/envVarriableHelper';

test.beforeEach(async ({page}) => {
 
})

test('test env varriables', async ( {page}) => {

    await page.goto('/');
    console.log('baseURL from config object', config.use.baseURL);
    console.log('TrainingURL',  EnvVariableHelper.getEnvVarriable("TrainingURL"));
    console.log('API_Endpoint', EnvVariableHelper.getEnvVarriable("API_Endpoint"));
    console.log('Username',     EnvVariableHelper.getEnvVarriable("Username"));
    console.log('Password',     EnvVariableHelper.getEnvVarriable("Password"));

   
});
