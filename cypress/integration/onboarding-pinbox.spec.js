describe('OmniKassa Onboarding Flow - Pinbox', () => {
  it('Test onboarding', () => {
    cy.visit('https://buccaneers-edge-router-stub.apps.pcf-t02-we.rabobank.nl/omnikassa-dashboard-login/')

    cy.get('#login').type('196562').should('have.value', '196562')

    cy.get('#target').select('OmniKassa Onboarding').should('have.value', 'onboarding')

    cy.wait(1000)

    cy.get('button').contains('Login').click()

    cy.url().should('include', '/onboarding/start-rabo-omnikassa')

    cy.wait(1000)

    cy.get('h1').contains('Laat je klanten betalen zoals zij dat willen').scrollIntoView().should('be.visible')

    cy.wait(1000)

    cy.visit('https://buccaneers-edge-router-stub.apps.pcf-t02-we.rabobank.nl/omnikassa/onboarding/start/pinbox')

    cy.url().should('include', '/onboarding/start/pinbox/1')

    cy.wait(1000)

    cy.get('*[name="input-text-brand-name"] input')
      .type('{selectall}{backspace}OmniKassa Merchant made by Cypress')
      .should('have.value', 'OmniKassa Merchant made by Cypress')

    cy.get('#select-sbi select')
      .select('292020 - Vervaardiging van aanhangwagens en opleggers')
      .should('have.value', '292020')
 
    cy.get('input[placeholder="Straatnaam"]')
      .type('{selectall}{backspace}Winthontlaan 1')
      .should('have.value', 'Winthontlaan 1')

    cy.wait(1000)

    cy.get('button').contains('Volgende').click()

    cy.wait(1000)

    cy.url().should('include', '/onboarding/start/pinbox/2')

    cy.wait(2000)

    cy.get('button').contains('Volgende').click()

    cy.url().should('include', '/onboarding/start/pinbox/3')

    cy.wait(2000)

    cy.get('input[name="checkbox-terms"]').check().should('be.checked')
  })
})
