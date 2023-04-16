import { WS_CONNECTION__USER_ORDERS_CLOSED, WS_CONNECTION__USER_ORDERS_ERROR, WS_CONNECTION__USER_ORDERS_SUCCESS, WS_GET_USER_ORDERS } from "../constants"
import { wsReducerGetUserOrders } from "./get-user-orders"

describe("current-order", () => {
    const initialState = {
        wsConnected: false,
        orders: null,
        total: 0,
        totalToday: 0,
    }

    it('test initial state', () => {
        expect(wsReducerGetUserOrders(undefined, {})).toEqual({
            ...initialState
        })
    })

    it('test connection success', () => {
        const action = { type: WS_CONNECTION__USER_ORDERS_SUCCESS }
        expect(wsReducerGetUserOrders(initialState, action)).toEqual({
            ...initialState,
            wsConnected: true,
        })
    })

    it('test connection error', () => {
        const action = { type: WS_CONNECTION__USER_ORDERS_ERROR }
        expect(wsReducerGetUserOrders(initialState, action)).toEqual({
            ...initialState
        })
    })

    it('test connection closed', () => {
        const action = { type: WS_CONNECTION__USER_ORDERS_CLOSED }
        expect(wsReducerGetUserOrders(initialState, action)).toEqual({
            ...initialState,
        })
    })

    it('test get a user orders', () => {
        const data = {
            total: '10',
            totalToday: '5',
            orders: [{ order: 1 }, { order: 2 }],
        }
        const action = { type: WS_GET_USER_ORDERS, payload: data }
        expect(wsReducerGetUserOrders(initialState, action)).toEqual({
            wsConnected: false,
            ...data
        })
    })


})