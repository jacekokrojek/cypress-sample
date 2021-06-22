const defaultLeadDetails = require('../fixtures/lead')

export const goToLeads = () => {
    cy.get('nav').contains('Leads').click();
}

export const addLead = (lead) => {

    cy.get('button').contains('New Lead').click();
    cy.get('input[name="title"]').type(lead.title);
    cy.get('input[name="firstName"]').type(lead.firstname);
    cy.get('input[name="lastName"]').type(lead.lastname);
    if (lead.xxx === true) {
        cy.get('#agreedToGdpr').click({force: true});
    }
    cy.get('#agreedToMarketingMailing').click({force: true});

    cy.get('input.sw-select__input').type(lead.address);
    cy.get('.sw-loader').should('not.exist')
    cy.get('.c-lead-autosuggested-address__select').find('li').eq(0).click();
    cy.get('.sw-loader').should('not.exist')
    cy.get('input[name="email"]').type(lead.email);
    cy.get('input[name="phone"]').type(lead.phone);
    //cy.get('button').contains('Create').click()
} 

export const getUniqueLead = () => {
    defaultLeadDetails.email = `ashish.deshmukh+${new Date().getTime()}@gmail.com`
    return defaultLeadDetails;
}

export const getLeadDetails = (idx) => {
        return cy.get('.c-inbox-lead-list-table-item').eq(idx);
}
