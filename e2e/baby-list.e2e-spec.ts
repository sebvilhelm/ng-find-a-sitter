import { browser, element, by } from "protractor";

describe('update babies', () => {
  beforeEach(async () => {
    await browser.get('/baby-list');
  });
  it('should redirect to UserDetailComponent, when clicked', () => {
    element.all(by.css('#babyList li')).get(0).click();
    expect(element(by.css('h2')).getText()).toEqual('Edit user:');
  });
  it('should update the user info when the form is submitted', async () => {
    element.all(by.css('#babyList li')).get(0).click(); // click the first baby
    
    const promiseArray = [
      element(by.css('[name="userName"]')).clear(),
      element(by.css('[name="firstName"]')).clear(),
      element(by.css('[name="lastName"]')).clear(),
      element(by.css('[name="area"]')).clear()
    ];
    await Promise.all<any>(promiseArray); // Clear the inputs

    element(by.css('[name="userName"]')).sendKeys('sebbaby');
    element(by.css('[name="firstName"]')).sendKeys('Sebastian');
    element(by.css('[name="lastName"]')).sendKeys('Nielsen');
    element(by.css('[name="birthDate"]')).sendKeys('19061992');
    element(by.css('[name="area"]')).sendKeys('Copenhagen');
    element(by.css('[type="submit"]')).click();

    expect(element.all(by.css('#babyList li')).get(0).getText()).toEqual('Sebastian');
  });
  it('should delete a user from the form', async () => {
    element.all(by.css('#babyList li')).get(0).click();

  });
});