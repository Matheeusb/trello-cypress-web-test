Cypress.Commands.add('getByDataCy', (dataCyValue) => {
  cy.get(`[data-cy="${dataCyValue}"]`)
})
