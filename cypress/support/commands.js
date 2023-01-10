/// <reference types="cypress" />

describe('Comandos personalizados do caderno', () => {

    beforeEach(() => {
        cy.visit('http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/');
    })
    //login sucesso
    Cypress.Commands.add('loginCaderno', (nome, senha) => {
        cy.get('input[type="text"]').type(nome);
        cy.get('input[type="password"]').type(senha);
        cy.get('button[type="submit"]').click();
        cy.get('select[id="undefined"]').select('0: 1');
        cy.get('.btn-dark').click();
    })
    Cypress.Commands.add('EditarItem', () => {
        cy.loginCaderno('00000000000', '123456');
        cy.get('.modal-body > app-seletor-modulo > .row > .col > :nth-child(2) > .seletor-modulo-titulo').click();
        cy.contains('span', 'Eventos').click();
        cy.get('a[ng-reflect-router-link="/home/evento-editar,57"]').click();
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.contains('span', 'Itens').click();
        cy.get('tbody > :nth-child(1) > :nth-child(5)').click().wait(2000);
        cy.contains('button', 'Editar Item');
        cy.get('[ng-reflect-ng-class=""]');
    })
});
