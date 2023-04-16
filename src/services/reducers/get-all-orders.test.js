import {
    WS_CONNECTION__ALL_ORDERS_CLOSED,
    WS_CONNECTION__ALL_ORDERS_ERROR,
    WS_CONNECTION__ALL_ORDERS_SUCCESS,
    WS_GET_ALL_ORDERS
} from "../constants"
import { wsReducerGetAllOrders } from "./get-all-orders"

describe("current-order", () => {
    const initialState = {
        wsConnected: false,
        orders: [],
        total: 0,
        totalToday: 0,
    }

    it('test initial state', () => {
        expect(wsReducerGetAllOrders(undefined, {})).toEqual({
            ...initialState
        })
    })

    it('test connection success', () => {
        const action = { type: WS_CONNECTION__ALL_ORDERS_SUCCESS }
        expect(wsReducerGetAllOrders(initialState, action)).toEqual({
            ...initialState,
            wsConnected: true,
        })
    })

    it('test connection error', () => {
        const action = { type: WS_CONNECTION__ALL_ORDERS_ERROR }
        expect(wsReducerGetAllOrders(initialState, action)).toEqual({
            ...initialState
        })
    })

    it('test connection closed', () => {
        const action = { type: WS_CONNECTION__ALL_ORDERS_CLOSED }
        expect(wsReducerGetAllOrders(initialState, action)).toEqual({
            ...initialState,
        })
    })

    it('test get all users orders', () => {
        const data = {
            total: '123',
            totalToday: '345',
            orders: [{ order: 1 }, { order: 2 }, { order: 3 }, { order: 4 }],
        }
        const action = { type: WS_GET_ALL_ORDERS, payload: data }
        expect(wsReducerGetAllOrders(initialState, action)).toEqual({
            wsConnected: false,
            ...data
        })
    })


})