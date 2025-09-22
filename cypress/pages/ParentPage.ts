/// <reference types="cypress" />

import 'cypress-xpath';

export class ParentPage {
  // ================= Locators =================

  parentMenu() {
    return cy.xpath('//span[contains(@class,"nav-link-title") and text()="Parents"]');
  }

  actionDropdown() {
    return cy.xpath('//button[@nztype="primary" and contains(@class,"ant-dropdown-trigger")]//span[text()=" Action "]');
  }

  addFromDropdown() {
    return cy.xpath('//ul[contains(@class,"ant-dropdown-menu")]//li[@nz-menu-item]//span[text()="Add"]');
  }

  // 🔹 Parent modal root
  parentModal() {
    return cy.get('#mat-dialog-0 create-user').should('be.visible');
  }

  // 🔹 Input fields
  firstNameInput() {
    return this.parentModal().find('input[formcontrolname="f_name"]').should('be.visible');
  }

  lastNameInput() {
    return this.parentModal().find('input[formcontrolname="l_name"]').should('be.visible');

  }

   // ================= NG-ZORRO Date Picker =================
selectDateByIndex(pickerIndex: number, day: string) {
  this.parentModal()
    .find('nz-date-picker')
    .eq(pickerIndex)
    .should('be.visible')
    .find('.ant-picker-suffix')
    .click({ force: true }); // open calendar

  cy.get('body')
    .find('.ant-picker-cell-inner')
    .contains(day)
    .click({ force: true }); // pick the day
}

// DOB (first date picker in the form)
enterDateOfBirth(day: string) {
  this.selectDateByIndex(0, day);
}


  emailInput() {
    return this.parentModal().find('input[formcontrolname="email"]').should('be.visible');
  }


// If parent has another date field (like Start Date / Enrolment)
//enterStartDate(day: string) {
  //this.selectDateByIndex(1, day);
//}


// Role checkbox helper
roleCheckbox(role: string) {
  return this.parentModal()
    .find('label[nz-checkbox]')
    .contains(new RegExp(`^${role}$`, 'i')) // case-insensitive match
    .should('be.visible');
}



  mobileInput() {
    return this.parentModal().find('input[formcontrolname="mobile"]').should('be.visible');
  }

  phoneInput() {
    return this.parentModal().find('input[formcontrolname="phone"]').should('be.visible');
  }

  addressLine1Input() {
    return this.parentModal().find('input[formcontrolname="address1"]').should('be.visible');
  }

  addressLine2Input() {
    return this.parentModal().find('input[formcontrolname="address2"]').should('be.visible');
  }

saveButton() {
  return this.parentModal()
    .find('button.ant-btn-primary') // select primary buttons only
    .contains('Save')               // match inner span text
    .should('be.visible');
}


  closeButton() {
    return this.parentModal().find('button').contains('CLOSE').should('be.visible');
  }

  // ================= Actions =================

  goToParentMenu() {
    this.parentMenu().click();
  }

  openActionDropdown() {
    this.actionDropdown().should('be.visible').click({ force: true });
  }

  clickAddFromDropdown() {
    this.addFromDropdown().should('be.visible').click({ force: true });
    this.parentModal().should('be.visible');
  }

  enterFirstName(name: string) {
    this.firstNameInput().clear().type(name);
  }

  enterLastName(name: string) {
    this.lastNameInput().clear().type(name);
  }

  enterEmail(email: string) {
    this.emailInput().clear().type(email);
  }

 
  selectRole(role: string) {
    this.roleCheckbox(role).click({ force: true });
  }

  enterMobile(mobile: string) {
    this.mobileInput().clear().type(mobile);
  }

  enterPhone(phone: string) {
    this.phoneInput().clear().type(phone);
  }

  enterAddress1(addr: string) {
    this.addressLine1Input().clear().type(addr);
  }

  enterAddress2(addr: string) {
    this.addressLine2Input().clear().type(addr);
  }

  clickSave() {
    this.saveButton().click({ force: true });
  

   // Optional: wait for modal to close
  this.parentModal().should('not.exist');
}
  //clickClose() {
    //this.closeButton().click({ force: true });
  //}

  // ================= Search & Validation =================

  searchInput() {
    return cy.get('input[placeholder*="Search"]');
  }

  enterSearchText(name: string) {
    this.searchInput().clear().type(name);
  }

  verifyParentInList(fullName: string) {
    cy.contains(fullName).should('exist');
  }
}
