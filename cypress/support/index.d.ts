/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * It's a custom command to get elements by data-cy tag.
     * @example cy.getByDataCy('my-element-selector')
     * @param selector: string
     */

    getByDataCy(selector: string): Cypress.Chainable<JQuery<HTMLElement>>;

    /**
     * It's a custom command to visit the baseUrl, to assert and to accept terms then open the simulator.
     * @example cy.openSimulator()
     * @returns void
     */
    openSimulator(): Cypress.Chainable<void>;
  }
}
