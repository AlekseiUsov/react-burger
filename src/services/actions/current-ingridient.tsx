import { ICardTypes } from '../../utils/propsType';
export const GET_CURRENT_INGRIDIENT: 'GET_CURRENT_INGRIDIENT' = 'GET_CURRENT_INGRIDIENT';
export const REMOVE_CURRENT_INGRIDIENT: 'REMOVE_CURRENT_INGRIDIENT' = 'REMOVE_CURRENT_INGRIDIENT';

interface IGetCurrentIngridientAction {
    current: ICardTypes;
    type: typeof GET_CURRENT_INGRIDIENT
}

interface IRemoveCurrentIngridientAction {
    type: typeof REMOVE_CURRENT_INGRIDIENT
}

export type TCurrentIngridient =
    | IGetCurrentIngridientAction
    | IRemoveCurrentIngridientAction
