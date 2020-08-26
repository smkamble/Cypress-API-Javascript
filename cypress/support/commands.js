
let parameter;
let url;

Cypress.Commands.add("getAPIRequest", (url, parameter) => {
    if (parameter) {
        url = url.replace("parameter", parameter);
    }
    return cy.request({
        method: 'GET',
        url: Cypress.env('baseurl') + url,
        //followRedirect: false,
        failOnStatusCode: false,
        headers: {
            'accept': 'application/json'
        }
    }).as('response')
})

Cypress.Commands.add("verifyResponseStatus", (status) => {
    cy.get('@response').then((response) => {
        expect(response.status).to.eq(parseInt(status), 'Verify has status');
    })
})

Cypress.Commands.add("verifyHasValue", (value) => {
    cy.get('@response').then((response) => {
        expect(response.body).to.have.property(value, 'Verify Response has value')
    })
})

Cypress.Commands.add("verifyHasProperty", (value) => {
    cy.get('@response').then((response) => {
        expect(response.body.items[0]).to.have.deep.property(value, 'Verify has Property')
    })
})

Cypress.Commands.add("verifyHasPropertyValue", (property, value) => {
    cy.get('@response').then((response) => {
        expect(response.body.items[0]).to.have.deep.property(property, value, 'Verify has value for property');
    })
})

Cypress.Commands.add("verifyHasBody", () => {
    cy.get('@response').then((response) => {
        expect(response.body, 'Verify Body has value').exist
        console.log(response)
    })
})

Cypress.Commands.add("verifyHasErrorMessage", (property, value) => {
    cy.get('@response').then((response) => {
        expect(response.body).to.have.deep.property(property, value, 'Verify has value for property');
    })
})