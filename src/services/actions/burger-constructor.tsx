import { ICardTypes } from '../../utils/propsType';

export const ADD_INGRIDIENT: 'ADD_INGRIDIENT' = 'ADD_INGRIDIENT';
export const ADD_BUN: 'ADD_BUN' = 'ADD_BUN';
export const REMOVE_INGRIDIENT: 'REMOVE_INGRIDIENT' = 'REMOVE_INGRIDIENT';
export const SET_TOTALPRICE: 'SET_TOTALPRICE' = 'SET_TOTALPRICE';
export const SORT_INGRIDIENTS: 'SORT_INGRIDIENTS' = 'SORT_INGRIDIENTS';

interface IAddIngridient {
    ingridient: ICardTypes
    type: typeof ADD_INGRIDIENT
}

interface IAddBun {
    ingridient: ICardTypes
    type: typeof ADD_BUN
}

interface IRemoveIngridient {
    ingridient: ICardTypes
    type: typeof REMOVE_INGRIDIENT
}

interface ISetTotalPrice {
    type: typeof SET_TOTALPRICE
}

interface ISortIngridients {
    rest: {
        from: number,
        to: number
    }
    type: typeof SORT_INGRIDIENTS
}

export type TConstructorActions =
    | IAddIngridient
    | IAddBun
    | IRemoveIngridient
    | ISetTotalPrice
    | ISetTotalPrice
    | ISortIngridients
