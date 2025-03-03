import LoginPage from '../pageObjects/LoginPage';

Cypress.Commands.add("checkResponsive", (viewport) => {
    cy.viewport(viewport);
    cy.reload();
});
Cypress.Commands.add("login", (username, password) => {
    LoginPage.visit();
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();
});