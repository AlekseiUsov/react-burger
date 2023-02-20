import {
    GET_CURRENT_INGRIDIENT,
    REMOVE_CURRENT_INGRIDIENT,
} from '../actions/current-ingridient';

const initialState = {
    currentIngridient: null
}

export const currentIngridientReducer = (state = initialState, action) => {
    const { type, ...rest } = action;

    switch (action.type) {
        case GET_CURRENT_INGRIDIENT:
            return {
                ...state,
                currentIngridient: rest.ingridient
            }
        case REMOVE_CURRENT_INGRIDIENT:
            return {
                ...state,
                currentIngridient: null
            }
        default:
            return state
    }
}