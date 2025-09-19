import { faker } from '@faker-js/faker'
import dayjs from 'dayjs'

describe('Card', () => {
  let cardName

  beforeEach(() => {
    cy.createBoard(faker.book.genre() + ' board')
    cy.createList(faker.book.publisher() + ' list')

    cardName = faker.book.title() + ' card'
  })

  it('Should add a new card', () => {
    const today = dayjs().format('MMM DD YYYY')

    cy.createCard(cardName)

    cy.getByDataCy('card-text').should('have.text', cardName)
    cy.getByDataCy('due-date')
      .invoke('text')
      .then((dateText) => {
        expect(dateText.trim()).to.eq(today)
      })
  })

  it('Should delete a card', () => {
    cy.createCard(cardName)
    cy.getByDataCy('card').should('have.length', 1)

    cy.getByDataCy('card').click()
    cy.getByDataCy('card-detail-delete').click()

    cy.getByDataCy('notification-message').should(
      'have.text',
      'Card was deleted',
    )
    cy.getByDataCy('card').should('have.length', 0)
  })

  it('Should adding a description to a card', () => {
    cy.createCard(cardName)

    cy.getByDataCy('card').click()
    cy.getByDataCy('card-description').type('Just a test description{enter}')

    cy.getByDataCy('notification-message').should(
      'have.text',
      'Description was changed',
    )
  })

  it.only('Should complete a card', () => {
    cy.createCard(cardName)

    cy.getByDataCy('card').click()
    cy.getByDataCy('card-checkbox').check()

    cy.contains('div', 'COMPLETED')
      .should('exist')
      .should('have.css', 'background-color', 'rgb(123, 200, 108)')
  })
})
