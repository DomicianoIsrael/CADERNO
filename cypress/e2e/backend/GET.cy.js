describe('API GET', () => {
    beforeEach(() => {
        cy.getToken('00000000000', '123456')
    })
    it('/api/grupos/ObtemTodos', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/grupos/ObtemTodos')
        .then(res => console.log(res))
            .its('status')
            .should('equal', 200)
            
    })
    it('/api/Funcoes/ObtemFuncoesUsuario', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Funcoes/ObtemFuncoesUsuario')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/grupos', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/grupos')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
            
    })
    it('/api/ElmahErrors', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/ElmahErrors')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/eventos', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/eventos/')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/areas', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/areas')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/usuarios/paginados', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/usuarios/paginados')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/Funcoes/ObtemPorModulo', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Funcoes/ObtemPorModulo')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/expurgo/paginados', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/expurgo/paginados')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/LogGeral', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/LogGeral')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/itemTipo', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/itemTipo')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/eventos', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/eventos/')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/itemStatus/Evento', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/itemStatus/Evento')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/papeisitemstatus', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/papeisitemstatus')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/Armazenamento/ObterTiposConteudo', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Armazenamento/ObterTiposConteudo')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/Alternativas', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Alternativas')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/AnoEscolar', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/AnoEscolar')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/Blocos/paginados', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Blocos/paginados')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/Cadernos/paginados', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Cadernos/paginados')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/CadernoStatus', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/CadernoStatus')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/Descritor/arvore', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Descritor/arvore')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/Descritor/todos', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Descritor/todos')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/Descritor/todos/folhas', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Descritor/todos/folhas')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/Encomenda/totalPorUsuario', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Encomenda/totalPorUsuario')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/Encomenda/itens/sumario', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Encomenda/itens/sumario')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/EncomendaUsuarios/ObtemPorEncomendaArea', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/EncomendaUsuarios/ObtemPorEncomendaArea')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/Eventos/paginados', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Eventos/paginados')
            .its('status')
            .should('equal', 200)
            .then(res => console.log(res))
    })
    it('/api/Eventos/detalhados/paginados', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Eventos/detalhados/paginados')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Eventos/totalPorUsuario', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Eventos/totalPorUsuario')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Expurgo/paginados', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Expurgo/paginados')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Funcoes/tipo-funcao', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Funcoes/tipo-funcao')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Funcoes/ObtemPorModulo', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Funcoes/ObtemPorModulo')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Grupos/ObtemPorUsuario', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Grupos/ObtemPorUsuario')
            .its('status')
            .should('equal', 200)
    })
    it('/api/check', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/check')
            .its('status')
            .should('equal', 200)
    })
    it('/api/check/data-base', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/check/data-base')
            .its('status')
            .should('equal', 200)
    })
    it('/api/check/write-file', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/check/write-file')
            .its('status')
            .should('equal', 200)
    })
    it('/api/check/error-falha-acesso', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/check/error-falha-acesso')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Importacoes/templates/blocoPadrao', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Importacoes/templates/blocoPadrao')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Importacoes/templates/cadernoPadrao', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Importacoes/templates/cadernoPadrao')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Importacoes/templates/cadernoInep', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Importacoes/templates/cadernoInep')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Importacoes/templates/rotacaoInep', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Importacoes/templates/rotacaoInep')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Importacoes/templates/blocoInep', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Importacoes/templates/blocoInep')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Importacoes/templates/itemPadrao', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Importacoes/templates/itemPadrao')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Importacoes/templates/itemInep', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Importacoes/templates/itemInep')
            .its('status')
            .should('equal', 200)
    })
    it('/api/ItemComentarios/paginado', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/ItemComentarios/paginado')
            .its('status')
            .should('equal', 200)
    })
    it('/api/ItemStatus/Encomenda', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/ItemStatus/Encomenda')
            .its('status')
            .should('equal', 200)
    })
    it('/api/ItemVersoes', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/ItemVersoes')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Itens/paginados', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Itens/paginados')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Itens/exportarItensCSV', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Itens/exportarItensCSV')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Itens/paginadosPorBloco', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Itens/paginadosPorBloco')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Itens/listaParaNavegacao', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Itens/listaParaNavegacao')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Itens/imagens/paginados', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Itens/imagens/paginados')
            .its('status')
            .should('equal', 200)
    })
    it('/api/LogGeral', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/LogGeral')
            .its('status')
            .should('equal', 200)
    })
    it('/api/LogGeral/paginados', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/LogGeral/paginados')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Papeis/grupoUsuario', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Papeis/grupoUsuario')
            .its('status')
            .should('equal', 200)
    })
    it('/api/TipoMedias', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/TipoMedias')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Usuarios/checkUsuarioExistente', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/Usuarios/checkUsuarioExistente')
            .its('status')
            .should('equal', 200)
    })
    it('/api/Usuarios/checkUsuarioExistente', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/CapaTag/capaTagValor/obtemPorTodos')
            .its('status')
            .should('equal', 200)
    })
    it('/api/DistribuicaoPedidos/paginados', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/DistribuicaoPedidos/paginados')
            .its('status')
            .should('equal', 200)
    })
    it('nox /api/ItemDimensao/ObtemPorTipoVisualizacaoItem', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI//api/ItemDimensao/ObtemPorTipoVisualizacaoItem')
            .its('status')
            .should('equal', 200)
    })
    it('/elaboracao-prova-client/home/item-listar', () => {
        cy.request('GET', 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/elaboracao-prova-client/home/item-listar')
            .its('status')
            .should('equal', 200)
    })
})









