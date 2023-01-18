describe('getToken', () => {
    it('Obter o Token', () => {
        cy.request({
            method: 'post',
            url: 'http://homologa.elaboracaoprova.intranet.cesgranrio.org.br/ElaboracaoProvaAPI/api/usuarios/autenticar',
            body: {
                cpf: "00000000000",
                senha: "123456"
            }
        }).its('body.accessToken').should('not.be.null')
            //.then(res => console.log(res))
    })
})