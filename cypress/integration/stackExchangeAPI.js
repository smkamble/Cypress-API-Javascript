let apiData = require("../fixtures/APIResources.json")

describe('API Testing for StackExchange', () => {

  it('validate should return data for tag', () => {
    //Given
    cy.getAPIRequest(apiData.StackExchangeData.GETTagAPI)
    //Then
    cy.verifyResponseStatus(200);
    cy.verifyHasBody();
    cy.verifyHasPropertyValue("name", "javascript")

  });

  it('validate should return data for recipients', () => {
    //Given
    cy.getAPIRequest(apiData.StackExchangeData.GetRecipientsAPI)
    //Then
    cy.verifyResponseStatus(200);
    cy.verifyHasBody();
    cy.verifyHasPropertyValue("name", "Informed")
  });

  it('validate should return data for id', () => {
    //Given
    cy.getAPIRequest(apiData.StackExchangeData.GetIdAPI, 1)
    //Then
    cy.verifyResponseStatus(200);
    cy.verifyHasBody();
    cy.verifyHasPropertyValue("badge_id", 1)
  });

  it('validate should fail return data for invalid id', () => {
    //Given
    cy.getAPIRequest(apiData.StackExchangeData.GetIdAPI, 345345435345345)
    //Then
    cy.verifyResponseStatus(400);
    cy.verifyHasBody();
    cy.verifyHasErrorMessage("error_name", "bad_parameter")
  });
});