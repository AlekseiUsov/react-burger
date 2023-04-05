import { GET_CURRENT_ORDER_ERROR, GET_CURRENT_ORDER_REQUEST, GET_CURRENT_ORDER_SUCCESS } from "../constants"
import { currentOrderReducer } from "./current-order"

describe("current-order", () => {
    const initialState = {
        isLoading: false,
        order: null,
    }

    it('test initial state', () => {
        expect(currentOrderReducer(undefined, {})).toEqual({
            ...initialState,
            order: null,
        })
    })

    it('test reqiest', () => {
        const action = { type: GET_CURRENT_ORDER_REQUEST }
        expect(currentOrderReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true,
        })
    })

    it('test success', () => {
        const action = { type: GET_CURRENT_ORDER_SUCCESS, order: { number: '1' } }
        expect(currentOrderReducer(initialState, action)).toEqual({
            ...initialState,
            order: { number: '1' }
        })
    })

    it('test error', () => {
        const action = { type: GET_CURRENT_ORDER_ERROR }
        expect(currentOrderReducer(initialState, action)).toEqual({
            ...initialState,
        })
    })


})