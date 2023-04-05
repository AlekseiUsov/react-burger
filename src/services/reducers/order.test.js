import { ORDER_ERROR, ORDER_REQUEST, ORDER_SUCCESS } from "../constants"
import { orderReducer } from "./order"

describe('order', () => {
    const initialState = {
        isLoading: false,
        name: null,
        order: {
            number: null,
        },
        success: false,
    }

    it('test initial state', () => {
        expect(orderReducer(undefined, {})).toEqual({
            ...initialState
        })
    })

    it('test request', () => {
        const action = { type: ORDER_REQUEST }
        expect(orderReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true,
        })
    })


    it('test success', () => {
        const order = { name: 'name', order: { number: '23234' } }
        const action = { type: ORDER_SUCCESS, ...order }
        expect(orderReducer(initialState, action)).toEqual({
            ...initialState,
            success: true,
            ...order
        })
    })


    it('test error', () => {
        const action = { type: ORDER_ERROR }
        expect(orderReducer(initialState, action)).toEqual({
            ...initialState,
        })
    })
})