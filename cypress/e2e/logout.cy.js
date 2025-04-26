describe('Logout', () => {
  // before(() => {
  //   cy.clearLocalStorage();
  // })

  // describe('Registrar', () => {

  //   it('Acessar o site registrar', () => {
  //     cy.visit('https://demoqa.com/register');
  //     cy.wait(4000);
  //   });

  //   it('inserir firstName', () => {
  //     cy.get('#firstname').scrollIntoView().type('Erick');

  //   });
  //   it('inserir lastName', () => {
  //     cy.get('#lastname').scrollIntoView().type('Wendel');

  //   });
  //   it('inserir userName', () => {
  //     cy.get('#userName').scrollIntoView().type('testedemoqa');

  //   });
  //   it('inserir password', () => {
  //     cy.get('#password').scrollIntoView().type('Qwerty@123');

  //   });

  //   it('Clicar no botão registrar', () => {
  //     cy.get('#register.btn.btn-primary').click();
  //   });
  // });

  describe("Cenário 01 Fazer Logout", () => {

    it("Acessar a página de login:https://demoqa.com/login", () => {
      cy.visit("https://demoqa.com/login");
    });
    it("Inserir usuário e senha", () => {
      cy.get("#userName").should("be.visible");
      cy.get("#userName").scrollIntoView().type("testedemoqa");
      cy.get("#password").should("be.visible");
      cy.get("#password").scrollIntoView().type("Qwerty@123");
    });
    it("Clicar no botão login.", () => {
      cy.get("#login").should("be.visible");
      cy.get("#login").click();
    });
    it("Usuário deve ter feito o login", () => {
      cy.wait(2000);
      cy.get("#userName-value").should("have.text", "testedemoqa");
    });
    it("Usuario deve estar na tela de Profile(https://demoqa.com/profile)", () => {
      cy.wait(2000);
      cy.url().should("eq", "https://demoqa.com/profile");
    });
    it("Clicar no botão logout", () => {
      cy.get("#submit").should("be.visible");
      cy.get("#submit").click();
    });
    it("Deve voltar para a tela de login", () => {
      cy.wait(2000);
      cy.url().should("eq", "https://demoqa.com/login");
    });
  });

  describe("Cenário 02 Ser redirecionado para Book Store ao clicar em Go to Book Store", () => {

    it('Usuário deve ter feito o login', () => {
      cy.wait(2000);
      cy.PerformLogin();
      cy.get('#userName-value').should('have.text', 'testedemoqa');
    })
    it('Usuario deve estar na tela de Profile(https://demoqa.com/profile)', () => {
      cy.visit('https://demoqa.com/profile');
    })
    it('Usuário localiza o botão de Go to Book Store', () => {
      cy.get('#gotoStore').should('be.visible');
    })
    it('Usuário clica no botão', () => {
      cy.get('#gotoStore').click();
    })
    it('Redirecionado para a tela de books', () => {
      cy.url().should("eq", "https://demoqa.com/books");
    });

  });

  describe('Cenário 03 Deletar conta de usuário', () => {

    it('Usuario deve estar na tela de Profile(https://demoqa.com/profile)', () => {
      cy.visit('https://demoqa.com/profile');
    })
    it('Usuário deve ter feito o login', () => {
      cy.get('#userName-value').should('have.text', 'testedemoqa')
    })
    it('1.Usuário localiza o botão de Delete Account', () => {
      cy.contains('button', 'Delete Account').should('be.visible')
      cy.get('button').contains('Delete Account').click()
    })
    it('2.O sistema mostra uma janela confirmando a ação com a mensagem “Do you want to delete your account ?”', () => {
      cy.contains('Do you want to delete your account?').should('be.visible')
    })
    it('3.Usuário clica no botão OK', () => {
      cy.get('#closeSmallModal-ok').click()
    })
    it('4 Usuario tenta usar a conta anterior', () => {
      cy.PerformLogin()
    })
  })

})
