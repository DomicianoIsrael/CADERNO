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
    Cypress.Commands.add('acessarGrupos', () => {
        cy.loginCaderno('00000000000', '123456');
        cy.contains('span', 'Grupos').click();
        cy.url().should('include', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/home/grupo-listar');
        cy.get('h2[class="navbar-brand"]').should('contain', ' Grupos').wait(1000);
    })
    Cypress.Commands.add('CriarItemMultiplaEscolha', () => {
        cy.loginCaderno('00000000000', '123456');
        cy.get('.modal-body > app-seletor-modulo > .row > .col > :nth-child(2) > .seletor-modulo-titulo').click();
        cy.contains('span', 'Eventos').click();
        cy.get('a[ng-reflect-router-link="/home/evento-editar,57"]').click();
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.get('div[ng-reflect-tooltip="Itens"]').click();
        cy.get('button[class="btn btn-block btn-dark"]').click();

        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        cy.get('input[name="codigo"]').clear().type(randomNumber);
        cy.get(':nth-child(2) > .ng-dirty > #undefined').select("1: 1");
        cy.get(':nth-child(3) > .ng-dirty > #undefined').select("1: 81");
        cy.get('button[class="btn btn-dark text-nowrap"]').click().wait(1000);
    })
    Cypress.Commands.add('CriarItemEnunciado', () => {
        cy.loginCaderno('00000000000', '123456');
        cy.get('.modal-body > app-seletor-modulo > .row > .col > :nth-child(2) > .seletor-modulo-titulo').click();
        cy.contains('span', 'Eventos').click();
        cy.get('a[ng-reflect-router-link="/home/evento-editar,57"]').click();
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.get('div[ng-reflect-tooltip="Itens"]').click();
        cy.get('button[class="btn btn-block btn-dark"]').click();

        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        cy.get('input[name="codigo"]').clear().type(randomNumber);
        cy.get(':nth-child(2) > .ng-dirty > #undefined').select("2: 2");
        cy.get(':nth-child(3) > .ng-dirty > #undefined').select("1: 81");
        cy.get('button[class="btn btn-dark text-nowrap"]').click().wait(1000);
    })
    Cypress.Commands.add('CriarItemDiscursiva', () => {
        cy.loginCaderno('00000000000', '123456');
        cy.get('.modal-body > app-seletor-modulo > .row > .col > :nth-child(2) > .seletor-modulo-titulo').click();
        cy.contains('span', 'Eventos').click();
        cy.get('a[ng-reflect-router-link="/home/evento-editar,57"]').click();
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.get('div[ng-reflect-tooltip="Itens"]').click();
        cy.get('button[class="btn btn-block btn-dark"]').click();

        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        cy.get('input[name="codigo"]').clear().type(randomNumber);
        cy.get(':nth-child(2) > .ng-dirty > #undefined').select("3: 3");
        cy.get(':nth-child(3) > .ng-dirty > #undefined').select("1: 81");
        cy.get('button[class="btn btn-dark text-nowrap"]').click().wait(1000);
    })
    Cypress.Commands.add('loginCadernoFalha', (nome, senha) => {
        cy.get('input[type="text"]').type(nome);
        cy.get('input[type="password"]').type(senha);
        cy.get('button[type="submit"]').click();
    })
    Cypress.Commands.add('getToken', (cpf, senha) => {
        cy.request({
            method: 'post',
            url: 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/usuarios/autenticar',
            body: {
                cpf: cpf,
                senha: senha
            }
        }).then(res => console.log(res))
        .its('body.accessToken').should('not.be.null').then(accessToken => {
            return accessToken
        })
    })
})
