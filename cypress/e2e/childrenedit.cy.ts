/// <reference types="cypress" />

import { ChildrenEditPage } from '../pages/ChildrenEditPage';
import { LoginPage } from '../pages/LoginPage';

describe('Search and Edit Child', () => {
  const loginPage = new LoginPage();
  const childrenEditPage = new ChildrenEditPage();
  const childName = 'Pavithraoffice';

  before(() => {
    cy.viewport(1920, 1080);

    // Login
    loginPage.visit();
    loginPage.enterEmail('pavithra@storypark.com');
    loginPage.enterPassword('Kinderm8@');
    loginPage.clickSignIn();
    cy.wait(2000);
    loginPage.closeNotification();
  });

  it('Search for a child and click Edit', () => {
    childrenEditPage.goToChildrenMenu();

    // Search child
    childrenEditPage.searchInput()
      .clear()
      .type(`${childName}{enter}`);

    cy.wait(1000); // wait for search results to appear

    // Click the Edit button for that child
    childrenEditPage.clickEditButton(childName);

    cy.wait(2000); // wait for edit page/modal
  });
});
