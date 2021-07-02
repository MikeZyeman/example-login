describe('app', () => {
  beforeEach(() => cy.visit('/'));

  it('should just succeed for the test', () => {

    expect(true).to.equal(true);

  });
});
