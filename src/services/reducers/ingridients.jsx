import {
    GET_INGRIDIENTS_REQUEST,
    GET_INGRIDIENTS_SUCCESS,
    GET_INGRIDIENTS_ERROR
} from '../actions/ingridients';

const initialState = {
    isLoading: false,
    succes: false,
    ingridients: [],
}


export const ingridientsReducer = (state = initialState, action) => {
    const { type, ...rest } = action;
    switch (action.type) {
        case GET_INGRIDIENTS_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        }
        case GET_INGRIDIENTS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                success: true,
                ingridients: rest.ingredients,
            };
        }
        case GET_INGRIDIENTS_ERROR: {
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


