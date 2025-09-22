/// <reference types="cypress" />
import { ParentPage } from '../pages/ParentPage';
import { LoginPage } from '../pages/LoginPage';

describe('Parent Page Tests', () => {
  const loginPage = new LoginPage();
  const parentPage = new ParentPage();
  

  before(() => {
    cy.viewport(1920, 1080);

    // Login first
    loginPage.visit();
    loginPage.enterEmail('pavithra@storypark.com');
    loginPage.enterPassword('Kinderm8@');
    loginPage.clickSignIn();
    cy.wait(2000); // wait for dashboard
    loginPage.closeNotification();
  });

  it('Should create a new parent and find it in search', () => {
    // Navigate to Parents menu
    parentPage.goToParentMenu();

    // Open Action dropdown and select Add
    parentPage.openActionDropdown();
    parentPage.clickAddFromDropdown();

    // Fill parent form in the order: First, Last, Email, Role, Mobile
    parentPage.enterFirstName('Pavithraoffice');
    parentPage.enterLastName('Parent');
    parentPage.enterEmail('pavithraoffice+parent@storypark.com');

    
    // DOB - pass day as string, e.g., '10' for 10th of the month
    parentPage.enterDateOfBirth('10');

    // Start date
    //parentPage.enterStartDate('1');

    // Select role
    parentPage.selectRole('Parent'); //  Parent/Guardian (depends on your dropdown options)

    // Enter mobile number
    parentPage.enterMobile('0712345678');

    // Save parent
    parentPage.clickSave();

    // Search for the newly created parent
    parentPage.enterSearchText('Pavithraoffice');

    // Validate parent appears in list
    parentPage.verifyParentInList('Pavithroffie Parent');
  });
});
