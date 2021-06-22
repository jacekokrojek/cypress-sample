import {
    setupApp,
    loginAs, 
} from '../support/common-utils'

import {
    goToLeads,
    addLead,
    getLeadDetails,
    getUniqueLead,
} from '../support/leads-utils'

describe('Sonnen Partner Portal', function () {

    beforeEach(function () {
        setupApp();
        loginAs(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));
    })

    context('When partner is logged in', function () {    
        it('should be able to add a lead', function () {
            goToLeads();
            addLead(getUniqueLead());
            // Below you can find a sample verification 
            goToLeads(); 
            getLeadDetails(0)
            .should(($lead) => {
                expect($lead.find('.c-lead-list-name')).to.contain("beforeDeployment")
              });
        })

        it('should be able to view a lead', function () {
            goToLeads();
        })
    })

})