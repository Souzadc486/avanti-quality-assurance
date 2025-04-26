describe('Login com credenciais válidas no DemoQA', () => {
    it('Deve logar com sucesso e redirecionar para a página de perfil', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
      cy.visit('https://demoqa.com');
      cy.visit('https://demoqa.com/login')
  
      // Inserir credenciais válidas
      cy.get('#userName').type('ndacardoso'); 
      cy.get('#password').type('Demoqa123*');     
  
      cy.get('#login').click();
  
      // Verificar se foi redirecionado para /profile
      cy.url().should('include', '/profile');
  
      // Verificar se o nome do usuário está visível
      cy.get('#userName-value').should('contain.text', 'ndacardoso');
    });
  });
