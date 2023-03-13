describe('Simulator', () => {
  beforeEach(() => {
    cy.openSimulator();
  });

  describe('Vehicles Loan', () => {
    it('should simulate a 12 months loan', () => {
      cy.getByDataCy('simulator__tab__vehicles')
        .should('contain.text', 'Veículos')

        .getByDataCy('simulator-form__selected-months')
        .should('contain.text', 'Em 24 meses')

        .getByDataCy('simulator-form__slider')
        .click()
        .type('{leftarrow}')

        .getByDataCy('simulator-form__selected-months')
        .should('contain.text', 'Em 12 meses')

        .getByDataCy('simulator-form__amount-input')
        .type('34500')

        .getByDataCy('simulator-form__final-amount__label')
        .should('contain.text', 'Você pagará em seu veículo')

        .getByDataCy('simulator-form__final-amount__value')
        .invoke('text')
        .should('match', /^R\$\s[\w\,\.]+/)

        .getByDataCy('simulator-form__confirm-button')
        .should('contain.text', 'Eu quero')
        .should('be.enabled')
        .click();
    });
  });

  describe('Properties Loan', () => {
    it('should simulate a 60 months loan', () => {
      cy.getByDataCy('simulator__tab__properties')
        .should('contain.text', 'Imóveis')
        .click()

        .getByDataCy('simulator-form__selected-months')
        .should('contain.text', 'Em 24 meses')

        .getByDataCy('simulator-form__slider')
        .click()
        .type('{rightarrow}' + '{rightarrow}')

        .getByDataCy('simulator-form__selected-months')
        .should('contain.text', 'Em 60 meses')

        .getByDataCy('simulator-form__amount-input')
        .type('450900,90')

        .getByDataCy('simulator-form__final-amount__label')
        .should('contain.text', 'Você pagará em seu imóvel')

        .getByDataCy('simulator-form__final-amount__value')
        .invoke('text')
        .should('match', /^R\$\s[\w\,\.]+/)

        .getByDataCy('simulator-form__confirm-button')
        .should('contain.text', 'Eu quero')
        .should('be.enabled')
        .click();
    });
  });

  it('should not enable confirm button if amount is not greather than 0', () => {
    cy.getByDataCy('simulator__tab__properties')
      .should('contain.text', 'Imóveis')
      .click()

      .getByDataCy('simulator-form__final-amount__value')
      .invoke('text')
      .should('match', /^R\$\s0,00$/)

      .getByDataCy('simulator-form__confirm-button')
      .should('contain.text', 'Eu quero')
      .should('be.disabled');
  });
});
