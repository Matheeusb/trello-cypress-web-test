Cypress.Commands.add('createBoard', (boardName) => {
  cy.visit('/');
  cy.getByDataCy('create-board').click();
  cy.get('.new-board-input').type(boardName + '{enter}');
});

Cypress.Commands.add('createList', (listName) => {
  cy.getByDataCy('add-list-input').type(listName + '{enter}');
});

Cypress.Commands.add('createCard', (cardName) => {
  cy.getByDataCy('new-card').click();
  cy.getByDataCy('new-card-input').type(cardName + '{enter}');
});
