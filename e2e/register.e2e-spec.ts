import { browser, element, by } from "protractor";
import { BabyListHelper } from './helper.e2e-spec';

describe('register user', () => {
  beforeEach(async () => {
    await browser.get('/register');
  });
  it('should display register form', () => {
    expect(element(by.css('h2')).getText()).toEqual('Register form:')
  });
  it('should register a baby if the form is valid and submitted', async () => {
    await browser.get('/baby-list');
    const numberOfBabiesBefore = await BabyListHelper.getNumberOfUsers();
    await browser.get('/register');
    element(by.css('[name="userName"]')).sendKeys('sebbaby');
    element(by.css('[name="firstName"]')).sendKeys('Sebastian');
    element(by.css('[name="lastName"]')).sendKeys('Nielsen');
    element(by.css('[name="birthDate"]')).sendKeys('19061992');
    element(by.css('[name="typeOfUser"]')).element(by.cssContainingText('option','Baby')).click();
    element(by.css('[name="gender"]')).sendKeys('Male');
    element(by.css('[name="rate"]')).sendKeys('120');
    element(by.css('[name="area"]')).sendKeys('Greater Copenhagen');
    element(by.css('[name="isAdmin"]')).click();
    element(by.css('[type="submit"]')).click();
    
    await browser.waitForAngular();
    
    const numberOfBabiesAfter = await BabyListHelper.getNumberOfUsers();

    expect(numberOfBabiesAfter - numberOfBabiesBefore).toEqual( 1);
  })
});

