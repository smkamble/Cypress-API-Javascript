describe('Launch QA Environment', () => {

    it('google should launch', () => {
        cy.visit(Cypress.config().baseUrl);
    });
});