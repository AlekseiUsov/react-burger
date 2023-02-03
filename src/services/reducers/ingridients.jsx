import {
    _REQUEST_GET_INGRIDIENTS,
    _SUCCESS_GET_INGRIDIENTS,
    _ERROR_GET_INGRIDIENTS
} from '../actions/ingridients';

const initialState = {
    isLoading: false,
    succes: false,
    ingridients: [],
}


export const ingridientsReducer = (state = initialState, action) => {
    const { type, ...rest } = action;
    switch (action.type) {
        case _REQUEST_GET_INGRIDIENTS: {
            return {
                ...state,
                isLoading: true
            };
        }
        case _SUCCESS_GET_INGRIDIENTS: {
            return {
                ...state,
                isLoading: false,
                success: true,
                ingridients: rest.ingredients,
            };
        }
        case _ERROR_GET_INGRIDIENTS: {
            return {
                ...state,
                ingridients: [],
                isLoading: false,
                success: false,
            };
        }
        default: {
            return state;
        }
    }
};


