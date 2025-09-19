/// <reference types="cypress" />
import 'cypress-xpath';

export class ChildrenPage {

  // ================= Locators =================

  childrenMenu() {
    return cy.xpath('//fuse-nav-vertical-item//span[text()="Children"]');
  }

  actionDropdown() {
    return cy.get('button[nz-dropdown][nztype="primary"]'); // Action button
  }

  createNewFromDropdown() {
    return cy.get('li[nz-menu-item]').contains('Create New'); // menu item
  }

  childModal() {
    return cy.get('child-new').should('be.visible'); // modal container
  }

  firstNameInput() {
    return this.childModal()
      .find('nz-form-item input')
      .first()
      .should('be.visible');
  }

  lastNameInput() {
    return this.childModal()
      .find('nz-form-item input')
      .eq(1)
      .should('be.visible');
  }

  checkbox() {
    return this.childModal()
      .find('p label span')
      .first()
      .should('be.visible');
  }
  
 saveButton() {
  return this.childModal()
    .find('button[nztype="primary"]')
    .contains('Save')
    .should('be.visible');
}


  // ================= NG-ZORRO Date Picker =================
  selectDateByIndex(pickerIndex: number, day: string) {
    this.childModal()
      .find('nz-date-picker')
      .eq(pickerIndex)
      .should('be.visible') // wait until visible
      .find('.ant-picker-suffix')
      .click({ force: true });

    cy.get('body')
      .find('.ant-picker-cell-inner')
      .contains(day)
      .click({ force: true });
  }

  enterDateOfBirth(day: string) {
    this.selectDateByIndex(0, day); // first date picker
  }

  enterStartDate(day: string) {
    this.selectDateByIndex(1, day); // second date picker
  }

  // ================= Gender Radio =================
selectGender(gender: 'Male' | 'Female') {
  this.childModal()                     // start from modal
    .find('nz-radio-group')             // find all radio groups
    .filter(':visible')                 // only visible ones
    .first()                            // pick the first one
    .contains('label', gender)          // find label with gender text
    .click({ force: true });            // click it
}


  // ================= Actions =================
  goToChildrenMenu() {
    this.childrenMenu().click();
  }

  openActionDropdown() {
    this.actionDropdown().should('be.visible').click({ force: true });
  }

  clickCreateNewFromDropdown() {
    this.createNewFromDropdown().should('be.visible').click({ force: true });
    this.childModal().should('be.visible');
  }

  enterFirstName(name: string) {
    this.firstNameInput().type(name);
  }

  enterLastName(name: string) {
    this.lastNameInput().type(name);
  }

  checkCheckbox() {
    this.checkbox().scrollIntoView().click();
  }

  clickSave() {
  this.saveButton().click({ force: true });
}

// Search input
searchInput() {
  return cy.get('input[placeholder*="Search ..."]'); // partial match on placeholder
}

// Enter search text
enterSearchText(name: string) {
  this.searchInput().clear().type(name);
}

// Optionally: validate child exists in results
verifyChildInList(fullName: string) {
  cy.contains(fullName).should('exist');
}


}
