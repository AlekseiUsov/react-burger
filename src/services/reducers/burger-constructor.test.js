import { burgerConstructorReducer, ADD_BUN } from "./burger-constructor"


describe("Burger-constructor", () => {
    const initialState = {
        bun: null,
        constructorIngridients: [],
        totalPrice: 0,
    }

    it('test initial state', () => {
        expect(burgerConstructorReducer(undefined, {})).toEqual(initialState)
    })

    it('test add bun', () => {
        const bun = { type: 'bun' }
        const action = { type: ADD_BUN, ingridient: bun }
        expect(burgerConstructorReducer(initialState, action)).toEqual({
            ...initialState,
            bun: bun,
        })
    })
})


