import {
    GET_INGRIDIENTS_REQUEST,
    GET_INGRIDIENTS_SUCCESS,
    GET_INGRIDIENTS_ERROR
} from '../constants';
import { ICardTypes } from '../../utils/propsType'
import { TIngredientsActions } from '../actions/ingridients'

interface IIngridientsState {
    isLoading: boolean
    success: boolean,
    ingridients: Array<ICardTypes>;
}

const initialState: IIngridientsState = {
    isLoading: false,
    success: false,
    ingridients: [],
}


export const ingridientsReducer = (state = initialState, action: TIngredientsActions) => {
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
                ingridients: action.ingridients,
            };
        }
        case GET_INGRIDIENTS_ERROR: {
            return {
                ...state,
                isLoading: false,
                success: false,
            };
        }
        default: {
            return state;
        }
    }
};


