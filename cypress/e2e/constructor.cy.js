import '@4tw/cypress-drag-drop'
import { email, password } from '../fixtures/login.json'

describe('constructor', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.intercept("GET", "api/ingredients", { fixture: "ingredients.json" })
        cy.get('a[class^=burger-ingredient-card_container]').as('ingredients')
        cy.get('@ingredients').first().as('bun')
        cy.get('@ingredients').eq(5).as('main')
        cy.get('@ingredients').last().as('sauce')
    })


    it('the ingridients have been loaded', () => {
        cy.get('@ingredients').should('have.length', 15)
    })

    it('the plugs exists', () => {
        cy.get('div[class^=burger-constructor-plug_wrapper]').as('plugs')
        cy.get('@plugs').should('have.length', 3)
        cy.get('@plugs').first().contains('Верхняя булка')
        cy.get('@plugs').eq(1).contains('Начинки')
        cy.get('@plugs').last().contains('Нижняя булка')
    })

    it('add ingridients in constructor', () => {

        cy.get('div[class^=burger-constructor_cardsContainer]').as('dropContainer')
        cy.get('@bun').drag('@dropContainer')
        cy.get('@main').drag('@dropContainer')
        cy.get('@sauce').drag('@dropContainer')

        cy.get('div[class^=constructor-element]').as('orderIngridients')
        cy.get('@orderIngridients').should('have.length', 4)
        cy.get('div[class^=constructor-element]')
            .first()
            .contains('Ингредиент 1 (верх)')

        cy.get('div[class^=constructor-element]')
            .last()
            .contains('Ингредиент 1 (низ)')

        cy.get('div[class^=constructor-element]')
            .first()
            .contains('Ингредиент 1 (верх)')

        cy.get('div[class^=constructor-element]')
            .eq(1)
            .contains('Ингредиент 6')

        cy.get('div[class^=constructor-element]')
            .eq(2)
            .contains('Ингредиент 10')

        cy.get('button').contains('Оформить заказ').click()


        cy.get('input[name=email]').type(`${email}`)
        cy.get('input[name=password]').type(`${password}`)
        cy.get('button').click()
        cy.intercept("POST", "api/login", { fixture: "login.json" })

    })

})