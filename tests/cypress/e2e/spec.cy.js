describe('template spec', () => {
  it('can open home page', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.contains('Wir schaffen ästhetische, barrierefreie Weberfahrungen')
  })
  it('react button can be clicked', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.contains('0').click()
    cy.contains('1').click()
    cy.contains('2')
  })
})