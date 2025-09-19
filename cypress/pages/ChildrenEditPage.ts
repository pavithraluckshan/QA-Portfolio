// cypress/pages/ChildrenEditPage.ts

// cypress/pages/ChildrenEditPage.ts

export class ChildrenEditPage {

  // Navigate to Children menu
  childrenMenu() {
    return cy.get('fuse-nav-vertical-item span').contains('Children');
  }

  goToChildrenMenu() {
    this.childrenMenu().click();
  }

  // Search input field
  searchInput() {
    return cy.get('input[nz-input][placeholder*="Search"]');
  }

  // Get child row by visible name (first name, full name, or partial)
  getChildRow(name: string) {
    return cy.contains('nz-list-item', name);
  }

  // Click the Edit button inside the child row
  clickEditButton(name: string) {
    this.getChildRow(name)
      .closest('nz-list-item') // ensures we target the row container
      .find('button')           // find all buttons in that row
      .contains('Edit')         // select the Edit button specifically
      .click({ force: true });  // force click if needed
  }
}
