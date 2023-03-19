import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ALL_ORDERS
} from '../constants';

import { ICardTypes, IOrderTypes } from '../../utils/propsType';
import { TIGetAllOrdersActions } from '../actions/ws-get-all-orders'

interface IGetAllOrdersState {
    wsConnected: boolean,
    orders: Array<IOrderTypes>,
    total: number,
    totalToday: number,
}

const initialState: IGetAllOrdersState = {
    wsConnected: false,
    orders: [],
    total: 0,
    totalToday: 0,
};

export const wsReducer = (state = initialState, action: TIGetAllOrdersActions): IGetAllOrdersState => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                wsConnected: true
            };

        case WS_CONNECTION_ERROR:
            return {
                ...state,
                wsConnected: false
            };

        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                wsConnected: false
            };

        case WS_GET_ALL_ORDERS:
            return {
                ...state,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            };

        default:
            return state;
    }
};