/// <reference types="cypress" />
import { br } from 'faker-br';

describe('Teste geral caderno', () => {

    beforeEach(() => {
        cy.visit('/');
    })
    it.skip('Editar item Multipla Escolha', () => {
        cy.CriarItemMultiplaEscolha();
        // ajustar type do tinny
    })
    it.skip('Editar item Enunciado', () => {
        cy.CriarItemEnunciado();
        // ajustar type do tinny
    })
    it.skip('Editar item discursiva', () => {
        cy.CriarItemDiscursiva();
        // ajustar type do tinny
    })
})



