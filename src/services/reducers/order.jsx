import { ORDER_REQUEST, ORDER_SUCCESS, ORDER_ERROR } from '../actions/order';

const initialState = {
    isLoading: false,
    name: null,
    order: {
        number: null,
    },
    success: false,
}

export const orderReducer = (state = initialState, action) => {
    const { type, ...rest } = action;

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
                name: rest.name,
                order: {
                    number: rest.order.number,
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


