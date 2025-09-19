export class LoginPage {
  visit() {
    cy.visit('/'); // Or '/login' if that's the login route
  }
  enterEmail(email: string) {
    cy.get('[formcontrolname="email"]').type(email);
  }
  enterPassword(password: string) {
    cy.get('[formcontrolname="password"]').type(password);
  }
  clickSignIn() {
    cy.contains('button', 'LOG IN').click();
  }
    closeNotification() {
    cy.get('.ant-notification-notice-close').click({ force: true });
    // or try this if you want to target the <i> icon:
    // cy.get('.anticon.ant-notification-close-icon').click({ force: true });
  }
}