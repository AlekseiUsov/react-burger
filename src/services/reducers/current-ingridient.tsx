import {
    GET_CURRENT_INGRIDIENT,
    REMOVE_CURRENT_INGRIDIENT,
    TCurrentIngridient
} from '../actions/current-ingridient';
import { ICardTypes } from '../../utils/propsType';

interface ICurrentIngridients {
    currentIngridient: null | ICardTypes;
}

const initialState: ICurrentIngridients = {
    currentIngridient: null
}

export const currentIngridientReducer = (state = initialState, action: TCurrentIngridient) => {
    switch (action.type) {
        case GET_CURRENT_INGRIDIENT:
            return {
                ...state,
                currentIngridient: action.current
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