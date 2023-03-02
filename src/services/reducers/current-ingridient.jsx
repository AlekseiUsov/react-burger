import {
    GET_CURRENT_INGRIDIENT,
    REMOVE_CURRENT_INGRIDIENT,
} from '../actions/current-ingridient';

const initialState = {
    currentIngridient: null
}

export const currentIngridientReducer = (state = initialState, action) => {
    const { type, ...current } = action;
    switch (action.type) {
        case GET_CURRENT_INGRIDIENT:
            return {
                ...state,
                currentIngridient: current.current
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