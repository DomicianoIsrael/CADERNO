describe('API GET', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('elaboracao-prova-client/', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/')
            .its('status')
            .should('equal', 200)
    })
    it('api/usuarios/sair', () => {
        cy.loginCadernoFalha('00000000000', '123456');
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/usuarios/sair')
            .its('status')
            .should('equal', 200)
    })
    it('/api/grupos/ObtemTodos', () => {
        cy.loginCaderno('00000000000', '123456')
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/grupos/ObtemTodos')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Funcoes/ObtemFuncoesUsuario', () => {
        cy.loginCaderno('00000000000', '123456')
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Funcoes/ObtemFuncoesUsuario?eventoId=&encomendaId=')
            .its('status')
            .should('equal', 200)
    })
    it('//ElaboracaoProvaAPI/api/grupos', () => {
        cy.loginCaderno('00000000000', '123456')
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/grupos?nome=&pagina=1&limitePorPagina=50')
            .its('status')
            .should('equal', 200)
    })
    it('/ElaboracaoProvaAPI/api/ElmahErrors', () => {
        cy.loginCaderno('00000000000', '123456')
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/ElmahErrors?errorId=&pagina=1&limitePorPagina=50')
            .its('status')
            .should('equal', 200)
    })
    it('/ElaboracaoProvaAPI/api/eventos', () => {
        cy.loginCaderno('00000000000', '123456')
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/eventos/')
            .its('status')
            .should('equal', 200)
    })
    it('/ElaboracaoProvaAPI/api/areas', () => {
        cy.loginCaderno('00000000000', '123456')
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/areas')
            .its('status')
            .should('equal', 200)
    })
    it('/ElaboracaoProvaAPI/api/usuarios/paginados', () => {
        cy.loginCaderno('00000000000', '123456')
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/usuarios/paginados')
            .its('status')
            .should('equal', 200)
    })
    it('/ElaboracaoProvaAPI/api/Funcoes/ObtemPorModulo', () => {
        cy.loginCaderno('00000000000', '123456')
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Funcoes/ObtemPorModulo')
            .its('status')
            .should('equal', 200)
    })
    it('/ElaboracaoProvaAPI/api/expurgo', () => {
        cy.loginCaderno('00000000000', '123456')
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/expurgo/paginados')
            .its('status')
            .should('equal', 200)
    })
    it('/ElaboracaoProvaAPI/api/LogGeral', () => {
        cy.loginCaderno('00000000000', '123456')
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/LogGeral')
            .its('status')
            .should('equal', 200)
    })
    it('/ElaboracaoProvaAPI/api/itemTipo', () => {
        cy.loginCaderno('00000000000', '123456')
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/itemTipo')
            .its('status')
            .should('equal', 200)
    })
    it('/ElaboracaoProvaAPI/api/eventos', () => {
        cy.loginCaderno('00000000000', '123456')
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/eventos/')
            .its('status')
            .should('equal', 200)
    })
    it('/ElaboracaoProvaAPI/api/Funcoes/ObtemFuncoesUsuario', () => {
        cy.loginCaderno('00000000000', '123456')
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Funcoes/ObtemFuncoesUsuario')
            .its('status')
            .should('equal', 200)
    })
})





