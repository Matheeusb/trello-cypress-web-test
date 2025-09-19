import { faker } from '@faker-js/faker'

describe('Login', () => {
  const email = faker.internet.email()
  const password = faker.internet.password()

  beforeEach(() => cy.signup(email, password))

  it('Should login successfully', () => {
    cy.login(email, password)

    cy.getByDataCy('notification-message').should(
      'have.text',
      'User is logged in',
    )
  })

  it('Should show an error message for email not found', () => {
    cy.login(faker.internet.email(), password)

    cy.getByDataCy('notification-message').should(
      'have.text',
      'Cannot find user',
    )
  })

  it.only('Should show an error message for password incorrect', () => {
    cy.login(email, faker.internet.password())

    cy.getByDataCy('notification-message').should(
      'have.text',
      'Incorrect password',
    )
  })
})
