// <reference types="cypress" />

describe('Teste geral caderno', () => {

    beforeEach(() => {
        cy.visit('http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/');
    })
    it('Autenticação -> Módulo evento', () => {
        cy.loginCaderno('00000000000', '123456');
        cy.get('.modal-body > app-seletor-modulo > .row > .col > :nth-child(2)').click();
        cy.url().should('include', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/home/home-evento');
    })
    it('US13019 - Criar Item', () => {
        cy.loginCaderno('00000000000', '123456');
        cy.get('.modal-body > app-seletor-modulo > .row > .col > :nth-child(2) > .seletor-modulo-titulo').click();
        cy.contains('span', 'Eventos').click();
        cy.get('a[ng-reflect-router-link="/home/evento-editar,57"]').click();
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.contains('span', 'Itens').click();
        cy.get('button[class="btn btn-block btn-dark"]').click();

        const codigoInvalido = 'códigoInvalido!@?';
        cy.get('input[name="codigo"]').type(codigoInvalido);
        cy.get(':nth-child(2) > .ng-dirty > #undefined').select("1: 1");
        cy.get(':nth-child(3) > .ng-dirty > #undefined').select("1: 81");
        cy.get('button[class="btn btn-dark text-nowrap"]').click();
        //valida não permitir caractere especiais
        cy.contains('div', 'Código do item inválido, não são permitidos caracteres especiais').should("be.visible");
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();

        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        cy.get('input[name="codigo"]').clear().type(randomNumber);
        cy.get('button[class="btn btn-dark text-nowrap"]').click();
        cy.url().should('include', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/home/item-editar/');
        cy.contains('span', 'Itens').click();
        cy.get('body').contains(randomNumber).log('Código encontrado');
    })
    it('US16827 - Validação das configurações do item', () => {
        cy.loginCaderno('00000000000', '123456');
        cy.get('.modal-body > app-seletor-modulo > .row > .col > :nth-child(2) > .seletor-modulo-titulo').click();
        cy.contains('span', 'Eventos').click();
        cy.get('a[ng-reflect-router-link="/home/evento-editar,57"]').click();
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.contains('span', 'Itens').click();
        cy.get('tbody > :nth-child(1) > :nth-child(5)').click().wait(2000);
        //acessa o item
        cy.contains('button', 'Editar Item');
        cy.get('[ng-reflect-ng-class=""]').click().wait(2000);
        cy.get('#button-basic').click();
        cy.get(':nth-child(1) > .dropdown-item').click();
        cy.contains('Label Questão').should("be.visible");
        cy.contains('Rótulo da justificativa').should("be.visible");
        cy.contains('Peso').should("be.visible");
        cy.contains('Alternativa').should("be.visible");
        cy.contains('Dificuldade').should("be.visible");
        cy.get(':nth-child(6) > div > .btn').click();
        cy.get('.swal2-confirm').click();

    })
    it.only('editar item', () => {
        cy.EditarItem();
        cy.get('#tiny-angular_64073972151672933945052_ifr').click();
    })
})
