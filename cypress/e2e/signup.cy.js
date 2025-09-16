import { faker } from '@faker-js/faker';

describe('Sign Up', () => {
  it('Should signup successfully', () => {
    cy.signup(faker.internet.email(), faker.internet.password());

    cy.getByDataCy('notification-message').should('have.text', 'User is logged in');
  });

  it('Should show an error message for invalid email', () => {
    cy.signup('invalid-email', faker.internet.password());

    cy.getByDataCy('notification-message').should('have.text', 'Email format is invalid');
  });

  it('Should show an error message when email is empty', () => {
    cy.signup('{esc}', faker.internet.password());

    cy.getByDataCy('notification-message').should('have.text', 'Email and password are required');
  });

  it('Should show an error message when password is empty', () => {
    cy.signup(faker.internet.email(), '{esc}');

    cy.getByDataCy('notification-message').should('have.text', 'Email and password are required');
  });

  it('Should show an error message when email already exists', () => {
    const email = faker.internet.email();

    cy.signup(email, faker.internet.password());
    cy.getByDataCy('notification-message').should('have.text', 'User is logged in');
    cy.signup(email, faker.internet.password());

    cy.getByDataCy('notification-message').should('have.text', 'Email already exists');
  });

  it('Should show an error message when password is too short', () => {
    cy.signup(faker.internet.email(), faker.string.alphanumeric({ length: 3 }));

    cy.getByDataCy('notification-message').should('have.text', 'Password is too short');
  });
});
