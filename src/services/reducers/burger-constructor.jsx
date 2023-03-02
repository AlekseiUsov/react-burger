import {
    ADD_INGRIDIENT,
    ADD_BUN,
    REMOVE_INGRIDIENT,
    SET_TOTALPRICE,
    SORT_INGRIDIENT
} from '../actions/burger-constructor';

import uniqid from 'uniqid';

const initialState = {
    bun: null,
    constructorIngridients: [],
    totalPrice: 0,
}

export const burgerConstructorReducer = (state = initialState, action) => {
    const { type, ...rest } = action;

    switch (action.type) {
        case ADD_BUN:
            return {
                ...state,
                bun: rest.ingridient
            }
        case ADD_INGRIDIENT: {
            return {
                ...state,
                constructorIngridients: [
                    ...state.constructorIngridients,
                    { ...rest.ingridient, uniqid: uniqid() }
                ]
            }
        }
        case REMOVE_INGRIDIENT: {
            return {
                ...state,
                constructorIngridients: [...state.constructorIngridients]
                    .filter(ingridient => ingridient.uniqid !== rest.ingridient.uniqid)
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
        case SORT_INGRIDIENT: {
            const prevState = [...state.constructorIngridients];
            const item = prevState[rest.rest.from]

            prevState.splice(rest.rest.from, 1)
            prevState.splice(rest.rest.to, 0, item)

            return {
                ...state,
                constructorIngridients: prevState,
            }
        }
        default:
            return state
    }

} 