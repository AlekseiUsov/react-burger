import { _REQUEST_ORDER, _SUCCESS_ORDER, _ERROR_ORDER } from '../actions/order';

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
        case _REQUEST_ORDER: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case _SUCCESS_ORDER: {
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
        case _ERROR_ORDER: {
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


