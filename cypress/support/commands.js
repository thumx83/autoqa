import LoginPage from '../pageObjects/LoginPage';

const loginPage = new LoginPage()

Cypress.Commands.add("checkResponsive", (viewport) => {
    cy.viewport(viewport);
    cy.reload();
});
Cypress.Commands.add("login", (username, password) => {
    loginPage.visit();
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickLogin();
});