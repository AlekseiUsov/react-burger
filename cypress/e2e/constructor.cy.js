describe('constructor', () => {

    beforeEach(() => {
        cy.intercept("GET", "api/ingredients", { fixture: "ingredients.json" })
        cy.visit('http://localhost:3000')
    })

    it('the ingridients have been loaded', () => {
        cy.get('div[class^=burger-ingredient-card_container]').as('ingredients')

        cy.get('@ingredients').should('have.length', 15)
    })


})