/// <reference types="cypress" />

describe('Testes da tela de Login', () => {

    beforeEach(() => {
        cy.visit('http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/');
    })
    it('Autenticação -> Módulo encomenda', () => {
        cy.get('input[type="text"]').type('00000000000');
        cy.get('input[type="password"]').type('123456');
        cy.get('button[type="submit"]').click();
        cy.get('select[id="undefined"]').select('0: 1');
        cy.get('.btn-dark').click();
        cy.get('.modal-body > app-seletor-modulo > .row > .col > :nth-child(1)').click();
        cy.url().should('include', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/home/home-encomenda');
    })
})