/// <reference types="cypress" />

const faker = require("faker-br");

describe('Teste geral caderno', () => {

    beforeEach(() => {
        cy.visit('/');
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
    it('Validar tela de usuário', () => {
        cy.loginCaderno('00000000000', '123456');
        cy.get('.modal-body > app-seletor-modulo > .row > .col > :nth-child(2) > .seletor-modulo-titulo').click();
        cy.get('div[ng-reflect-tooltip="Usuários"]').click();
        cy.url().should('include', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/home/usuario-listar');
        cy.get('h2[class="navbar-brand"]').should('contain', ' Usuários');
        cy.get('button[class="btn btn-block btn-dark"]').click();

        let fakerBr = require('faker-br');
        let gerarCpf = faker.br.cpf();

        cy.get('input[name="cpf"]').type(gerarCpf);
        cy.get('button[class="btn btn-dark text-nowrap"]').click();
        cy.get('input[name="nome"]').type('UsuárioCypress');
        cy.get('input[name="senha"]').type('123456');
        cy.get('button[class="btn btn-dark text-nowrap"]').click();
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
    });
    it('Validar tela de grupos', () => {
        cy.loginCaderno('00000000000', '123456');
        cy.get('.modal-body > app-seletor-modulo > .row > .col > :nth-child(2) > .seletor-modulo-titulo').click();
        cy.contains('span', 'Grupos').click();
        cy.url().should('include', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/home/grupo-listar');
        cy.get('h2[class="navbar-brand"]').should('contain', ' Grupos');
    })
    it('Validar tela de área', () => {
        cy.loginCaderno('00000000000', '123456');
        cy.get('.modal-body > app-seletor-modulo > .row > .col > :nth-child(2) > .seletor-modulo-titulo').click();
        cy.contains('span', 'Áreas').click();
        cy.url().should('include', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/home/area-listar');
        cy.get('h2[class="navbar-brand"]').should('contain', ' Áreas');
    })
    it('Validar tela elmah', () => {
        cy.loginCaderno('00000000000', '123456');
        cy.get('.modal-body > app-seletor-modulo > .row > .col > :nth-child(2) > .seletor-modulo-titulo').click();
        cy.contains('span', ' Elmah erros').click();
        cy.url().should('include', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/home/elmah-errors-listar');
        cy.get('h2[class="navbar-brand"]').should('contain', ' Elmah erros');
    })
    it('Validar tela expurgo', () => {
        cy.loginCaderno('00000000000', '123456');
        cy.get('.modal-body > app-seletor-modulo > .row > .col > :nth-child(2) > .seletor-modulo-titulo').click();
        cy.contains('span', ' Expurgo').click();
        cy.url().should('include', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/home/expurgo-listar');
        cy.get('h2[class="navbar-brand"]').should('contain', ' Expurgo');
    })
    it('Validar tela Log Geral', () => {
        cy.loginCaderno('00000000000', '123456');
        cy.get('.modal-body > app-seletor-modulo > .row > .col > :nth-child(2) > .seletor-modulo-titulo').click();
        cy.contains('span', ' Log Geral').click();
        cy.url().should('include', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/home/log-geral');
        cy.get('h2[class="navbar-brand"]').should('contain', ' Log do sistema');
    })
})

