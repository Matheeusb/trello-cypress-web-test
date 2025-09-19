import { faker } from '@faker-js/faker'

describe('List', () => {
  let listName

  beforeEach(() => {
    listName = faker.book.title() + ' list'
    cy.createBoard(faker.book.genre() + ' board')
  })

  it('Should add a new list', () => {
    cy.createList(listName)

    cy.getByDataCy('list-name')
      .should('have.length', 1)
      .and('have.value', listName)
  })

  it('Should delete a list', () => {
    cy.createList(listName)

    cy.getByDataCy('list-name')
      .should('have.length', 1)
      .and('have.value', listName)

    cy.getByDataCy('list-options').click()
    cy.getByDataCy('delete-list').click()

    cy.getByDataCy('list-name').should('have.length', 0)
  })
})
