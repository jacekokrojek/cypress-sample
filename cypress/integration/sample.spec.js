import {
    setupApp,
    loginAs, 
} from '../support/common-utils'

import {
    goToLeads,
    addLead,
    getLeadDetails,
    getUniqueLead,
    getName
} from '../support/leads-utils'

describe('Sonnen Partner Portal', function () {

    beforeEach(function () {
        setupApp();
        loginAs(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
    })

    context('When partner is logged in', function () {    
        it('should be able to add a lead', function () {
            const FIRST_ROW = 0;
            goToLeads();
            addLead(getUniqueLead());
            // Below you can find a sample verification 
            goToLeads(); 
            getName(getLeadDetails(FIRST_ROW)).should('contain.text', 'beforeDeployment')
        })  

        it('should be able to view a lead', function () {
            goToLeads();
        })
    })

})