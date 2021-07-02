describe('login', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('should log in successfully', () => {

    cy.contains('#loginUsernameInput');
    cy.contains('#loginPasswordInput');

    cy.contains('#loginSubmit')

  })

  it('', () => {
    cy.contains('#loginSubmit').click();

  })
})
