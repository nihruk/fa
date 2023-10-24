describe('template spec', () => {
  it('displays the home page', () => {
    // Visit homepage
    cy.visit('/');
    cy.contains('NIHR');
  });
});
