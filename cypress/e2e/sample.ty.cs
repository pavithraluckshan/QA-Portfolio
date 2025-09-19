/// <reference types="cypress" />

describe('Sanity Test', () => {
  it('should load home page', () => {
    cy.visit('/');
    cy.title().should('exist');
  });
});