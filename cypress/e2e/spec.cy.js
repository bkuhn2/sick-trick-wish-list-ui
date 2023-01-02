describe('empty spec', () => {

  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/tricks', {
      method: 'GET',
      fixture: '../fixtures/example.json'
    })

    cy.visit('http://localhost:3000/')
  })

  it('should have a name', () => {
    cy.contains('Sick Trick Wish List')
  })

  it('have inputs for adding a trick', () => {
    cy.get('#stance-choice')
    cy.get('#obstacle-choice')
    cy.get('#trick-name')
    cy.get('#link')
  })

  it('have a trick that is a regular treflip', () => {
    cy.get('#1')
      .contains('regular treflip')
  })

  it('have be able to add a trick', () => {
    cy.get('#stance-choice').select('Regular')
    cy.get('#obstacle-choice').select('Ledge')
    cy.get('#trick-name').type('Superman')
    cy.get('#link').type('a;lskdfj')

    cy.get('button').click()

    cy.get('.trick').contains('Regular Superman')
  })

})