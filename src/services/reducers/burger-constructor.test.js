import { ADD_BUN, ADD_INGRIDIENT, REMOVE_INGRIDIENT, SET_TOTALPRICE, SORT_INGRIDIENTS } from "../actions/burger-constructor"
import { burgerConstructorReducer } from "./burger-constructor"


describe("Burger-constructor", () => {

    it('test initial state', () => {
        expect(burgerConstructorReducer(undefined, {})).toEqual({
            bun: null,
            constructorIngridients: [],
            totalPrice: 0,
        })
    })

    it('test add bun', () => {
        const initialState = {
            bun: null,
            constructorIngridients: [],
            totalPrice: 0,
        }
        const bun = { type: 'bun' }
        const action = { type: ADD_BUN, ingridient: bun }
        expect(burgerConstructorReducer(initialState, action)).toEqual({
            ...initialState,
            bun: bun,
        })
    })

    it('test add ingridient', () => {
        const initialState = {
            bun: null,
            constructorIngridients: [],
            totalPrice: 0,
        }
        let result;
        const ingridient = { type: 'main' }
        const action = { type: ADD_INGRIDIENT, ingridient: ingridient }
        result = burgerConstructorReducer(initialState, action);
        expect(result.constructorIngridients.length).toBe(1)


        const ingridient2 = { type: 'sauce' }
        const action2 = { type: ADD_INGRIDIENT, ingridient: ingridient2 }
        result = burgerConstructorReducer(result, action2);
        expect(result.constructorIngridients.length).toBe(2)
    })

    it('test remove ingridient', () => {
        const initialState = {
            bun: { type: 'bun' },
            constructorIngridients: [
                { type: 'main', uniqid: '12345' },
                { type: 'sauce', uniqid: '67890' },
            ],
            totalPrice: 0,
        }
        let result;
        const action = { type: REMOVE_INGRIDIENT, ingridient: { type: 'main', uniqid: '12345' } }
        result = burgerConstructorReducer(initialState, action);
        expect(result.constructorIngridients.length).toBe(1)

        const action2 = { type: REMOVE_INGRIDIENT, ingridient: { type: 'sauce', uniqid: '67890' } }
        result = burgerConstructorReducer(result, action2);
        expect(result.constructorIngridients.length).toBe(0)
    })


    it('test total price', () => {
        const initialState = {
            bun: { type: 'bun', price: 500 },
            constructorIngridients: [
                { type: 'main', uniqid: '12345', price: 1000 },
                { type: 'sauce', uniqid: '67890', price: 500 },
            ],
            totalPrice: 0,
        }
        let result;
        const action = { type: SET_TOTALPRICE }
        result = burgerConstructorReducer(initialState, action);
        expect(result.totalPrice).toBe(2500)
    })


    it('sort ingridients', () => {
        const initialState = {
            bun: { type: 'bun', price: 500 },
            constructorIngridients: [
                { type: 'main', uniqid: '12345', price: 1000 },
                { type: 'sauce', uniqid: '67890', price: 500 },
                { type: 'sauce', uniqid: '34245', price: 700 },
            ],
            totalPrice: 0,
        }
        const action = { type: SORT_INGRIDIENTS, rest: { from: 1, to: 2 } }
        const result = burgerConstructorReducer(initialState, action);
        expect(result.constructorIngridients).toEqual([
            { type: 'main', uniqid: '12345', price: 1000 },
            { type: 'sauce', uniqid: '34245', price: 700 },
            { type: 'sauce', uniqid: '67890', price: 500 },
        ])
    })
})


