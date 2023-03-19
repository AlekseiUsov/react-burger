import {
    GET_CURRENT_ORDER_REQUEST,
    GET_CURRENT_ORDER_SUCCESS,
    GET_CURRENT_ORDER_ERROR
} from '../constants';
import { IOrderTypes } from '../../utils/propsType';
import { TCurrentOrderActions } from '../actions/current-order';

interface ICurrentOrder {
    isLoading: boolean,
    orders: [] | Array<IOrderTypes>;
}

const initialState: ICurrentOrder = {
    isLoading: false,
    orders: []
}

export const currentOrderReducer = (state = initialState, action: TCurrentOrderActions) => {
    switch (action.type) {
        case GET_CURRENT_ORDER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case GET_CURRENT_ORDER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orders: action.orders
            }
        case GET_CURRENT_ORDER_ERROR:
            return initialState

        default:
            return state
    }
}