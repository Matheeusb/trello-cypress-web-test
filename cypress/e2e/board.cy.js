import { faker } from '@faker-js/faker'

describe('Board', () => {
  let boardName

  beforeEach(() => (boardName = faker.color.human() + ' board'))

  it('Should display boards main page', () => {
    cy.visit('/')
    cy.contains('h1', 'My Boards').should('be.visible')
    cy.getByDataCy('create-board').should('contain.text', 'Create new board')
  })

  it('Should create a new board', () => {
    cy.createBoard(boardName)

    cy.url().should('include', '/board/')
    cy.get('.inline-block.invisible.px-3.font-bold').should(
      'contain.text',
      boardName,
    )
  })

  it('Should favorite a board', () => {
    cy.createBoard(boardName)

    cy.getByDataCy('star').click().should('have.class', 'text-yellow-300')
  })

  it('Should delete a board', () => {
    cy.createBoard(boardName)
    cy.getByDataCy('board-options').click()
    cy.getByDataCy('delete-board').click()

    cy.getByDataCy('notification-message').should(
      'have.text',
      'Board was deleted',
    )
  })
})
