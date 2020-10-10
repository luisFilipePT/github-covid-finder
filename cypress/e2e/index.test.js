
describe('home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should initially load some repos', () => {
    cy.findByText(/tokyo-metropolitan-gov\/covid19/)
  })
})

describe('home page search bar', () => {
  beforeEach(() => {
    cy.visit('/')
    // cy.waitForReact()
  })

  it('should update corresponding search state', () => {
    cy.get('input[placeholder="Search Covid-19 related repos"]:first').type('covid19')
    cy.get('select:has(option:contains("Sort by Stars")):first').select('Sort by Best Match')
    cy.get('select:has(option:contains("All Languages")):first').select('Dart')

    cy.get('input[placeholder="Search Covid-19 related repos"]:first').should('have.value', 'covid19')
    cy.get('select:has(option:contains("Sort by Stars")):first').should('have.value', '')
    cy.get('select:has(option:contains("All Languages")):first').should('have.value', 'Dart')
  })

  it('should only list repo that filtered with certain language', () => {
    cy.get('select:has(option:contains("All Languages")):first').select('Dart')
    cy.get('input[placeholder="Search Covid-19 related repos"]:first').parent('div').get('svg:eq(0)').click()
    cy.get('main div a').parent('div').children('div:contains("Dart")').should('have.length', 30)
  })

  it('should not show on navbar in smaller screen size and instead show button to toggle modal with search', () => {
    cy.viewport('ipad-2')
    cy
      .get('select:has(option:contains("All Languages")):first')
      .should('not.be.visible')
    cy.get('button[name="toggle-modal-with-search"]').should('be.visible')
  })

  it('should be toggle via search button and show in modal on smaller screen size', () => {
    cy.viewport('ipad-2')
    cy.get('input[placeholder="Search Covid-19 related repos"]:eq(1)').should('not.be.visible')
    cy.get('button[name="toggle-modal-with-search"]').click()
    cy.get('input[placeholder="Search Covid-19 related repos"]:eq(1)').should('be.visible')
  })

  it('that show within modal when in smaller screen should be able to search github repo', () => {
    cy.viewport('ipad-2')
    cy.get('button[name="toggle-modal-with-search"]').click()
    cy.get('input[placeholder="Search Covid-19 related repos"]:eq(1)').type('flutter')
    cy.get('input[placeholder="Search Covid-19 related repos"]:eq(1)').parent('div').children('svg:eq(0)').click()
    cy.get('main div a').parent('div').children('div:contains("Dart")').should('have.length', 30)
  })
})
