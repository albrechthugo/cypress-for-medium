/// <reference types="cypress" />

Cypress.Commands.add('getByDataCy', (selector: string, ...args) => {
  return cy.get(`[data-cy="${selector}"]`, ...args);
});

Cypress.Commands.add('openSimulator', (...args) => {
  cy.visit('/', ...args)
    .getByDataCy('terms__main-warning')
    .should('contain.text', 'Essa aplicação é apenas um experimento')

    .getByDataCy('go-to-app__button')
    .should('be.disabled')

    .getByDataCy('terms__checkbox')
    .click()

    .getByDataCy('go-to-app__button')
    .should('be.enabled')
    .click();
});
