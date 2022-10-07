import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given("realizado a conexão com o host", () => {
    cy.request({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET'
    }).as('response');

    cy.get('@response').then(res => {
        expect(res.status).to.be.equal(200)
    });
});