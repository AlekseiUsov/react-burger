import { IOrderTypes } from '../../utils/propsType';
import {
    WS_CONNECTION_ALL_ORDERS_START,
    WS_CONNECTION_ALL_ORDERS_STOP,
    WS_CONNECTION__ALL_ORDERS_SUCCESS,
    WS_CONNECTION__ALL_ORDERS_ERROR,
    WS_CONNECTION__ALL_ORDERS_CLOSED,
    WS_GET_ALL_ORDERS
} from '../constants';

export interface IGetAllOrdersConnect {
    type: typeof WS_CONNECTION_ALL_ORDERS_START
    payload: string
}

export interface ICloseAllOrdersConnect {
    type: typeof WS_CONNECTION_ALL_ORDERS_STOP,

}
export interface IGetAllOrdersSuccess {
    type: typeof WS_CONNECTION__ALL_ORDERS_SUCCESS
    payload: Event
}
export interface IGetAllOrdersError {
    type: typeof WS_CONNECTION__ALL_ORDERS_ERROR
    payload: Event
}
export interface IGetAllOrdersDisconnect {
    type: typeof WS_CONNECTION__ALL_ORDERS_CLOSED
    payload: Event
}

export interface IGetAllOrders {
    type: typeof WS_GET_ALL_ORDERS,
    payload: {
        orders: Array<IOrderTypes>
        total: number,
        totalToday: number
    }
}

export type TGetAllOrdersActions =
    | IGetAllOrdersConnect
    | ICloseAllOrdersConnect
    | IGetAllOrdersSuccess
    | IGetAllOrdersError
    | IGetAllOrdersDisconnect
    | IGetAllOrders

export const getAllOrdersConnect = (
    url: string
): IGetAllOrdersConnect => ({
    type: WS_CONNECTION_ALL_ORDERS_START,
    payload: url,
})

export const getAllOrdersSuccess = (
    event: Event,
): IGetAllOrdersSuccess => ({
    type: WS_CONNECTION__ALL_ORDERS_SUCCESS,
    payload: event,
})

export const getAllOrdersError = (
    event: Event,
): IGetAllOrdersError => ({
    type: WS_CONNECTION__ALL_ORDERS_ERROR,
    payload: event
})

export const getAllOrdersDisconnect = (
    event: Event,
): IGetAllOrdersDisconnect => ({
    type: WS_CONNECTION__ALL_ORDERS_CLOSED,
    payload: event,
})

export const closeAllOrders = (): ICloseAllOrdersConnect => ({
    type: WS_CONNECTION_ALL_ORDERS_STOP,
})

export const getAllOrders = (
    event: MessageEvent,
): IGetAllOrders => {
    const data = JSON.parse(event.data);
    return {
        type: WS_GET_ALL_ORDERS,
        payload: {
            orders: data.orders,
            total: data.total,
            totalToday: data.totalToday,
        }
    }
}