import { getIngredientsRequest } from '../../utils/burger-api';
import { GET_INGRIDIENTS_REQUEST, GET_INGRIDIENTS_SUCCESS, GET_INGRIDIENTS_ERROR } from '../constants';
import { ICardTypes } from '../../utils/propsType'
import { AppDispatch, AppThunk } from '../typesOfStoreAndThunk';

interface IGetIngredientsAction {
    type: typeof GET_INGRIDIENTS_REQUEST;
}

interface IGetIngredientsSuccessAction {
    type: typeof GET_INGRIDIENTS_SUCCESS;
    ingridients: Array<ICardTypes>;
}

interface IGetIngredientsFailedAction {
    type: typeof GET_INGRIDIENTS_ERROR;
}

export type TIngredientsActions =
    | IGetIngredientsAction
    | IGetIngredientsSuccessAction
    | IGetIngredientsFailedAction

const getIngredientsAction = (): IGetIngredientsAction => ({
    type: GET_INGRIDIENTS_REQUEST
});

const getIngredientsSuccessAction = (
    ingridients: Array<ICardTypes>
): IGetIngredientsSuccessAction => ({
    type: GET_INGRIDIENTS_SUCCESS,
    ingridients
});

const getIngredientsFailedAction = (): IGetIngredientsFailedAction => ({
    type: GET_INGRIDIENTS_ERROR
});


export const getIngredients = (): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch(getIngredientsAction())
        getIngredientsRequest().then(res => {
            if (res && res.success) {
                dispatch(getIngredientsSuccessAction(res.data))
            } else {
                dispatch(getIngredientsFailedAction())
            }
        }).catch(err => {
            dispatch(getIngredientsFailedAction())
        })
    }
}