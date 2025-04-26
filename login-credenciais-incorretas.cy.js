describe('CT 02 Verificar se o login funciona corretamente para credenciais incorretas', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Retornando false impede que o Cypress falhe o teste
      return false;
    });

    beforeEach(() => {
      // Visita a página de login do DemoQA
      cy.visit('https://demoqa.com/login');
    });

    it('Deve exibir uma mensagem de erro ao tentar fazer login com credenciais inválidas', () => {
      // Dados de teste com credenciais inválidas
      const invalidUser = {
        username: 'invalid_user123',
        password: 'wrong_password123'
      };


      cy.get('#userName')
        .should('be.visible')
        .type(invalidUser.username);


      cy.get('#password')
        .should('be.visible')
        .type(invalidUser.password);

      cy.get('#login')
        .should('be.visible')
        .click();

      cy.get('#name')
        .should('be.visible')
        .should('contain', 'Invalid username or password!');

      // Verifica se não foi redirecionado para a página de perfil
      cy.url().should('include', '/login');

      // Verifica se os campos foram mantidos vazios após a tentativa
      cy.get('#userName').should('have.value', invalidUser.username);
      cy.get('#password').should('have.value', invalidUser.password);
    });

    it('Deve exibir uma mensagem de erro ao tentar fazer login com campos vazios', () => {
      cy.get('#login')
        .should('be.visible')
        .click();

      cy.get('#userName')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');

      cy.get('#password')
        .should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  });
