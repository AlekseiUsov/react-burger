import { ORDER_REQUEST, ORDER_SUCCESS, ORDER_ERROR } from '../constants';
import { TOrderActions } from '../actions/order'

interface IOrderState {
    isLoading: boolean,
    name: null | string,
    order: {
        number: null | number
    }
    success: boolean,
}

const initialState: IOrderState = {
    isLoading: false,
    name: null,
    order: {
        number: null,
    },
    success: false,
}

export const orderReducer = (state = initialState, action: TOrderActions) => {

    switch (action.type) {
        case ORDER_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case ORDER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                name: action.name,
                order: {
                    number: action.order.number,
                },
                success: true,
            };
        }
        case ORDER_ERROR: {
            return {
                ...state,
                name: null,
                order: {
                    number: null,
                },
                success: false,
            };
        }
        default: {
            return state;
        }
    }
};


