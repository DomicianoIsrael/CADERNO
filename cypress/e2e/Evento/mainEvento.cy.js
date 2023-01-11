/// <reference types="cypress" />

const faker = require('faker-br');



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

        let gerarCpf = faker.br.cpf();

        cy.get('input[name="cpf"]').type(gerarCpf);
        cy.get('button[class="btn btn-dark text-nowrap"]').click();
        cy.get('input[name="nome"]').type('UsuárioCypress');
        cy.get('input[name="senha"]').type('123456');
        cy.get('button[class="btn btn-dark text-nowrap"]').click();
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.get('input[ng-reflect-model="true"]').should('be.checked');
        cy.get('input[id="administrador"]').should('not.be.checked');


    });
    it('Validar tela de grupos', () => {
        cy.loginCaderno('00000000000', '123456');
        cy.get('.modal-body > app-seletor-modulo > .row > .col > :nth-child(2) > .seletor-modulo-titulo').click();
        cy.contains('span', 'Grupos').click();
        cy.url().should('include', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/home/grupo-listar');
        cy.get('h2[class="navbar-brand"]').should('contain', ' Grupos').wait(1000);
        cy.get('button[class="btn btn-block btn-dark"]').click();

        cy.url().should('include', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/home/grupo-editar');
        cy.get('input[id="nome"]').type('GrupoCypress')
        cy.get('button[class="btn btn-dark btn-block"]').click();
        cy.contains('div', 'Grupo incluído com sucesso.').should("be.visible");

        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.get('.align-self-right > .btn').click();
        cy.get('input[placeholder="Informe o CPF do usuário"]').type('15275162707');
        cy.get('button[class="btn btn-dark text-nowrap"]').click();
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();

        cy.contains('span', 'Grupos').click();
        cy.contains('td', 'GrupoCypress')
            .parent()
            .find('a.btn.btn-outline-secondary.text-nowrap.ng-star-inserted')
            .contains('Editar')
            .click();

        cy.get('button[class="btn btn-outline-danger mr-2"]').click();
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.get('button[class="btn btn-outline-danger btn-block"]').click();
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.contains('td', 'GrupoCypress').should("not.exist");
    })
    it('Validar tela de área', () => {
        cy.loginCaderno('00000000000', '123456');
        cy.get('.modal-body > app-seletor-modulo > .row > .col > :nth-child(2) > .seletor-modulo-titulo').click();
        cy.contains('span', 'Áreas').click();
        cy.url().should('include', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/home/area-listar');
        cy.get('h2[class="navbar-brand"]').should('contain', ' Áreas');
        cy.get('button[class="btn btn-block btn-dark"]').click();

        cy.url().should('include', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/home/area-editar');
        cy.get('input[id="rotulo"]').type('cyT');
        cy.get('input[id="nome"]').type('areaCypress');
        cy.get('button[class="btn btn-dark btn-block"]').click();
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.get('button[class="btn btn-outline-light mr-2 px-4"]').click();

        cy.contains('td', 'areaCypress')
            .parent()
            .find('a.btn.btn-outline-secondary.text-nowrap.ng-star-inserted')
            .contains('Editar')
            .click();
        cy.get('button[class="btn btn-outline-danger btn-block"]').click();
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.get('button[class="swal2-confirm swal2-styled swal2-default-outline"]').click();
        cy.contains('td', 'areaCypress').should("not.exist");

    })
    it('Validar tela elmah', () => {
        cy.loginCaderno('00000000000', '123456');
        cy.get('.modal-body > app-seletor-modulo > .row > .col > :nth-child(2) > .seletor-modulo-titulo').click();
        cy.contains('span', ' Elmah erros').click();
        cy.url().should('include', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/home/elmah-errors-listar');
        cy.get('h2[class="navbar-brand"]').should('contain', ' Elmah erros');
        /* cy.request({
            method: 'GET',
            url: 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/ElmahErrors?errorId=&pagina=1&limitePorPagina=50',
            headers: { 'Content-Type': 'application/json' },
            body: { 'param': 'value' }
        })
            .its('status')
            .should('equal', 200) */

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



