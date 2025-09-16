import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';

describe('Card', () => {
  beforeEach(() => {
    cy.createBoard(faker.book.genre() + ' board');
    cy.createList(faker.book.publisher() + ' list');
  });

  it('Should add a new card', () => {
    const today = dayjs().format('MMM DD YYYY');
    const cardName = faker.book.title() + ' card';

    cy.createCard(cardName);

    cy.getByDataCy('card-text').should('have.text', cardName);
    cy.getByDataCy('due-date')
      .invoke('text')
      .then((dateText) => {
        expect(dateText.trim()).to.eq(today);
      });
  });
});
