import { postOrder } from '../../utils/burger-api';
import { ORDER_REQUEST, ORDER_SUCCESS, ORDER_ERROR } from '../constants';
import { AppDispatch, AppThunk } from '../typesOfStoreAndThunk';

interface IGetOrderRequestAction {
    type: typeof ORDER_REQUEST;
}

interface IGetOrderSuccessAction {
    type: typeof ORDER_SUCCESS;
    name: string;
    order: {
        number: number
    }
}

interface IGetOrderErrorAction {
    type: typeof ORDER_ERROR;
}

export type TOrderActions =
    | IGetOrderRequestAction
    | IGetOrderSuccessAction
    | IGetOrderErrorAction

const getOrderAction = (): IGetOrderRequestAction => ({
    type: ORDER_REQUEST
});

const getIngredientsSuccessAction = (
    name: string,
    order: {
        number: number;
    }
): IGetOrderSuccessAction => ({
    type: ORDER_SUCCESS,
    name,
    order
});

const getOrderErrorAction = (): IGetOrderErrorAction => ({
    type: ORDER_ERROR
});


export const getOrderDetails = (ingredients: string[]): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch(getOrderAction())
        postOrder(ingredients).then(res => {
            if (res && res.success) {
                dispatch(getIngredientsSuccessAction(res.name, res.order))
            } else {
                dispatch(getOrderErrorAction())
            }
        }).catch(err => {
            dispatch(getOrderErrorAction())
        })
    }
}