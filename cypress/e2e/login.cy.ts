/// <reference types="cypress" />
import { LoginPage } from '../pages/LoginPage';

describe('KM8 Login Test', () => {
  const loginPage = new LoginPage();

  it('should log in and close notification reminder', () => {
    loginPage.visit();
    cy.contains('Email').should('be.visible'); // Wait for page to load
    loginPage.enterEmail('pavithra@storypark.com'); // Use your actual email/username
    loginPage.enterPassword('Kinderm8@');
    loginPage.clickSignIn();
    cy.wait(2000); // Only if needed!
     loginPage.closeNotification();
    cy.wait(1000);
  });
});