Cypress.Commands.add('signup', (email, password) => {
  cy.visit('/signup');
  cy.getByDataCy('signup-email').type(email);
  cy.getByDataCy('signup-password').type(password, { log: false });
  cy.getByDataCy('signup-submit').click();
});

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.getByDataCy('login-email').type(email);
  cy.getByDataCy('login-password').type(password, { log: false });
  cy.getByDataCy('login-submit').click();
});
