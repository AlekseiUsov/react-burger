import {
    ADD_INGRIDIENT,
    ADD_BUN,
    REMOVE_INGRIDIENT,
    SET_TOTALPRICE,
    SORT_INGRIDIENTS,
    TConstructorActions
} from '../actions/burger-constructor';
import { ICardTypes } from '../../utils/propsType';

import uniqid from 'uniqid';

interface IConsructorType {
    bun: null | ICardTypes,
    constructorIngridients: [] | Array<ICardTypes>,
    totalPrice: number
}

const initialState: IConsructorType = {
    bun: null,
    constructorIngridients: [],
    totalPrice: 0,
}

export const burgerConstructorReducer = (state = initialState, action: TConstructorActions): IConsructorType => {

    switch (action.type) {
        case ADD_BUN:
            return {
                ...state,
                bun: action.ingridient
            }
        case ADD_INGRIDIENT: {
            return {
                ...state,
                constructorIngridients: [
                    ...state.constructorIngridients,
                    { ...action.ingridient, uniqid: uniqid() }
                ]
            }
        }
        case REMOVE_INGRIDIENT: {
            return {
                ...state,
                constructorIngridients: [...state.constructorIngridients]
                    .filter(ingridient => ingridient.uniqid !== action.ingridient.uniqid)
            }
        }
        case SET_TOTALPRICE: {
            const bunPrice = state.bun === null ? 0 : (state.bun.price * 2);
            return {
                ...state,
                totalPrice: [...state.constructorIngridients]
                    .reduce((acc, ingridient) => acc + ingridient.price, 0) + bunPrice
            }
        }
        case SORT_INGRIDIENTS: {
            const prevState = [...state.constructorIngridients];
            const item = prevState[action.rest.from]

            prevState.splice(action.rest.from, 1)
            prevState.splice(action.rest.to, 0, item)

            return {
                ...state,
                constructorIngridients: prevState,
            }
        }
        default:
            return state
    }

}
