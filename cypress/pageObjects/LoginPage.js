export default class LoginPage {
    elements = {
        usernameField: () => cy.get("input[name='loginKey']"),
        passwordField: () => cy.get("input[name='password']"),
        loginButton: () => cy.get("button[type='submit']"),
        successMessage: () => cy.contains("Welcome"),
        errorMessage: () => cy.contains("Invalid username or password"),
    };

    visit() {
        cy.visit("https://shopee.vn/");
    }

    enterUsername(username) {
        this.elements.usernameField().type(username);
    }

    enterPassword(password) {
        this.elements.passwordField().type(password);
    }

    clickLogin() {
        this.elements.loginButton().click();
    }

    verifyLoginSuccess() {
        this.elements.successMessage().should("be.visible");
    }

    verifyLoginFailure() {
        this.elements.errorMessage().should("be.visible");
    }
}
