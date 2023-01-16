describe('obterToken', () => {
    it('/api/usuarios/autenticar', () => {
        cy.request({
            method: 'POST',
            url: 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/usuarios/autenticar',
            body: {
                cpf: '00000000000',
                senha: '123456'
            }
        }).then(res => {
            expect(res.status).to.eq(200)

            const token = res.body.token
            Cypress.env('accessToken', token);
            cy.log('acessToken');
        })
    })
})