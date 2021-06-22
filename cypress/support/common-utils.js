const GDRP_COOKIE_NAME = "_evidon_consent_cookie"
const GDRP_COOKIE_SETTINGS = {"date":"2021-06-22T08:22:52.823Z"}

const HJ_POLL_COOKIE_NAME = "_hjDonePolls"
const HJ_POLL_COOKIE_SETTINGS = "0%2C680922%2C680922"
const HJ_POLL_COOKIE_OPTIONS = {domain: "partner.dev.sonnen.de"}


export const loginAs = (username, password) => {
    cy.get('#user_email').type(username);
    cy.get('#user_password').type(password);
    cy.get('.btn').click();
}

export const setupApp = () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    cy.visit("/");
    cy.setCookie(GDRP_COOKIE_NAME, JSON.stringify(GDRP_COOKIE_SETTINGS));
    cy.setCookie(HJ_POLL_COOKIE_NAME, HJ_POLL_COOKIE_SETTINGS, HJ_POLL_COOKIE_OPTIONS);
}
