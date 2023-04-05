import { GET_INGRIDIENTS_ERROR, GET_INGRIDIENTS_REQUEST, GET_INGRIDIENTS_SUCCESS } from "../constants"
import { ingridientsReducer } from "./ingridients"

describe('ingridients', () => {

    const initialState = {
        isLoading: false,
        success: false,
        ingridients: [],
    }

    it('test initial state', () => {
        expect(ingridientsReducer(undefined, {})).toEqual({
            ...initialState
        })
    })

    it('test request', () => {
        const action = { type: GET_INGRIDIENTS_REQUEST }
        expect(ingridientsReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true
        })
    })

    it('test success', () => {
        const ingridients = [{ ingridient: 1 }, { ingridient: 2 }, { ingridient: 3 }]
        const action = { type: GET_INGRIDIENTS_SUCCESS, ingridients: ingridients }
        expect(ingridientsReducer(initialState, action)).toEqual({
            ...initialState,
            success: true,
            ingridients: ingridients
        })
    })

    it('test error', () => {
        const action = { type: GET_INGRIDIENTS_ERROR }
        expect(ingridientsReducer(initialState, action)).toEqual({
            ...initialState,
            success: false,
        })
    })

})