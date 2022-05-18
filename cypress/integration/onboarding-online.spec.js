describe('OmniKassa Onboarding Flow - Online', () => {
  it('Login to onboarding flow', () => {
    cy.visit('https://omnikassa-edge-router-stub.apps.pcf-t02-we.rabobank.nl/omnikassa-dashboard-login/')

    cy.get('#login').type('322425').should('have.value', '322425')

    cy.get('#target').select('OmniKassa Onboarding').should('have.value', 'onboarding')

    cy.wait(5000)

    cy.get('button').contains('Login').click()

    cy.url().should('include', '/onboarding/start-rabo-omnikassa')

    cy.wait(5000)

    cy.visit('https://omnikassa-edge-router-stub.apps.pcf-t02-we.rabobank.nl/omnikassa/onboarding/start/online')

    cy.url().should('include', '/onboarding/start/online/1')

    cy.wait(5000)
  })

  it('Fill in the onboarding form', () => {
    cy.get('input[placeholder="Handelsnaam of merknaam"]').type('{selectall}{backspace}OmniKassa Merchant made by Cypress').should('have.value', 'OmniKassa Merchant made by Cypress')
  })
})
