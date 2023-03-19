import { IOrderTypes } from '../../utils/propsType';
import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ALL_ORDERS
} from '../constants';

export interface IGetAllOrdersConnect {
    type: typeof WS_CONNECTION_START
    payload: string
}
export interface IGetAllOrdersSuccess {
    type: typeof WS_CONNECTION_SUCCESS
    payload: Event
}
export interface IGetAllOrdersError {
    type: typeof WS_CONNECTION_ERROR
    payload: Event
}
export interface IGetAllOrdersDisconnect {
    type: typeof WS_CONNECTION_CLOSED
    payload: Event
}

export interface IGetAllOrders {
    type: typeof WS_GET_ALL_ORDERS
    payload: {
        orders: Array<IOrderTypes>
        total: number,
        totalToday: number
    }
}

export type TIGetAllOrdersActions =
    | IGetAllOrdersConnect
    | IGetAllOrdersSuccess
    | IGetAllOrdersError
    | IGetAllOrdersDisconnect
    | IGetAllOrders

export const getAllOrdersConnect = (
    url: string
): IGetAllOrdersConnect => ({
    type: WS_CONNECTION_START,
    payload: url,
})

export const getAllOrdersSuccess = (
    event: Event,
): IGetAllOrdersSuccess => ({
    type: WS_CONNECTION_SUCCESS,
    payload: event,
})

export const getAllOrdersError = (
    event: Event,
): IGetAllOrdersError => ({
    type: WS_CONNECTION_ERROR,
    payload: event
})

export const getAllOrdersDisconnect = (
    event: Event,
): IGetAllOrdersDisconnect => ({
    type: WS_CONNECTION_CLOSED,
    payload: event,
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