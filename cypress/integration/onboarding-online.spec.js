describe('OmniKassa Onboarding Flow - Online', () => {
  it('Test onboarding', () => {
    // cy.visit('https://omnikassa-edge-router-stub.apps.pcf-t02-we.rabobank.nl/omnikassa-dashboard-login/')
    cy.visit('https://buccaneers-edge-router-stub.apps.pcf-t02-we.rabobank.nl/omnikassa-dashboard-login/')

    // cy.get('#login').type('322425').should('have.value', '322425')
    cy.get('#login').type('196515').should('have.value', '196515')

    cy.get('#target').select('OmniKassa Onboarding').should('have.value', 'onboarding')

    cy.wait(4000)

    cy.get('button').contains('Login').click()

    cy.url().should('include', '/onboarding/start-rabo-omnikassa')
    
    // cy.get('button').contains('Inloggen mijn Rabo OmniKassa').click()

    cy.wait(2000)
    
    cy.get('h1').contains('Laat je klanten betalen zoals zij dat willen').scrollIntoView().should('be.visible')

    cy.wait(2000)

    // cy.visit('https://omnikassa-edge-router-stub.apps.pcf-t02-we.rabobank.nl/omnikassa/onboarding/start/online')
    cy.visit('https://buccaneers-edge-router-stub.apps.pcf-t02-we.rabobank.nl/omnikassa/onboarding/start/online/1')

    cy.url().should('include', '/onboarding/start/online/1')

    cy.wait(2000)

    cy.get('*[name="input-text-brand-name"] input')
      .type('{selectall}{backspace}OmniKassa Merchant made by Cypress')
      .should('have.value', 'OmniKassa Merchant made by Cypress')

    cy.get('#select-sbi select')
      .select('292020 - Vervaardiging van aanhangwagens en opleggers')
      .should('have.value', '292020')

    cy.wait(1000)

    cy.get('button').contains('Volgende').click()

    cy.url().should('include', '/onboarding/start/online/2')

    cy.wait(1000)
    
    cy.get('#webshopUrl').type('{selectall}{backspace}https://www.mijnwebwinkel.nl').should('have.value', 'https://www.mijnwebwinkel.nl')

    cy.get('input[value="ideal"]').uncheck().should('not.be.checked')
    cy.get('input[value="mastercard"]').uncheck().should('not.be.checked')
    cy.get('input[value="visa"]').uncheck().should('not.be.checked')
    cy.get('input[value="maestro"]').uncheck().should('not.be.checked')
    cy.get('input[value="vpay"]').uncheck().should('not.be.checked')
    
    cy.get('input[value="ideal"]').check().should('be.checked')
    cy.get('input[value="mastercard"]').check().should('be.checked')
    cy.get('input[value="visa"]').check().should('be.checked')
    cy.get('input[value="maestro"]').check().should('be.checked')
    cy.get('input[value="vpay"]').check().should('be.checked')

    cy.wait(1000)
    
    cy.get('button').contains('Volgende').click()

    cy.url().should('include', '/onboarding/start/online/3')

    cy.wait(2000)

    // cy.visit('https://omnikassa-edge-router-stub.apps.pcf-t02-we.rabobank.nl/omnikassa/onboarding/start/online/2')
    cy.visit('https://buccaneers-edge-router-stub.apps.pcf-t02-we.rabobank.nl/omnikassa/onboarding/start/online/2')

    cy.url().should('include', '/onboarding/start/online/2')

    cy.get('input[value="visa"]').uncheck().should('not.be.checked')
    cy.get('input[value="maestro"]').uncheck().should('not.be.checked')
    
    cy.wait(1000)
    
    cy.get('button').contains('Volgende').click()
    
    cy.url().should('include', '/onboarding/start/online/3')

    cy.wait(1000)

    cy.get('input[name="checkbox-terms"]').check().should('be.checked')
  })
})
