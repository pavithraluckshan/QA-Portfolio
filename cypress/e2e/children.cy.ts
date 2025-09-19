/// <reference types="cypress" />
import { ChildrenPage } from '../pages/ChildrenPage';
import { LoginPage } from '../pages/LoginPage';

describe('Children Page Tests', () => {
  const loginPage = new LoginPage();
  const childrenPage = new ChildrenPage();

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

  it('Should create a new child in correct order and find it in search', () => {
    // Navigate to Children menu
    childrenPage.goToChildrenMenu();

    // Open Action dropdown and select Create New
    childrenPage.openActionDropdown();
    childrenPage.clickCreateNewFromDropdown();

    // Fill child form in the order: First, Last, DOB, Start, Gender, Checkbox
    childrenPage.enterFirstName('Pavithraoffice');
    childrenPage.enterLastName('Luckshan');

    // DOB - pass day as string, e.g., '10' for 10th of the month
    childrenPage.enterDateOfBirth('10');

    // Start date
    childrenPage.enterStartDate('1');

    // Gender
    childrenPage.selectGender('Male');

    // Attendance checkbox
    childrenPage.checkCheckbox();

    // Save child
    childrenPage.clickSave();

   // Search for the newly created child
  childrenPage.enterSearchText('Pavithraoffice');

  // Validate child appears in list
  childrenPage.verifyChildInList('Pavithraoffice Luckshan');

 

  });
});
