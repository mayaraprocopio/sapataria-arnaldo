describe('Testes na Home', () => {
  it('Abre a pagina', () => {
    cy.visit('/index.html');
  })


  it('Abre o diretorio', () => {
    cy.visit('/');
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('titulo da página', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('.page-title').should('have.text', 'Sapataria do Arnaldo');
    cy.get('.page-title').click();
    cy.get('.page-title').should('be.visible');
    cy.get('.page-title').should('have.class', 'page-title');
    /* ==== End Cypress Studio ==== */
  });
})