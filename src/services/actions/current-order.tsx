import { getCurrentOrderRequest, refreshTokens } from '../../utils/burger-api';
import { GET_CURRENT_ORDER_REQUEST, GET_CURRENT_ORDER_SUCCESS, GET_CURRENT_ORDER_ERROR } from '../constants';
import { IOrderTypes } from '../../utils/propsType'
import { AppDispatch, AppThunk } from '../typesOfStoreAndThunk';

interface IGetCurrentOrderAction {
    type: typeof GET_CURRENT_ORDER_REQUEST;
}

interface IGetCurrentOrderSuccessAction {
    type: typeof GET_CURRENT_ORDER_SUCCESS;
    order: IOrderTypes;
}

interface IGetCurrentOrderFailedAction {
    type: typeof GET_CURRENT_ORDER_ERROR;
}

export type TCurrentOrderActions =
    | IGetCurrentOrderAction
    | IGetCurrentOrderSuccessAction
    | IGetCurrentOrderFailedAction

const getCurrentOrderAction = (): IGetCurrentOrderAction => ({
    type: GET_CURRENT_ORDER_REQUEST
});

const getCurrentOrderSuccessAction = (
    order: IOrderTypes,
): IGetCurrentOrderSuccessAction => ({
    type: GET_CURRENT_ORDER_SUCCESS,
    order
});

const getCurrentOrderErrorAction = (): IGetCurrentOrderFailedAction => ({
    type: GET_CURRENT_ORDER_ERROR
});


interface IAuthorization {
    [key: string]: string,
}


export const getCurrentOrder = (pathname: string): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch(getCurrentOrderAction())
        getCurrentOrderRequest(pathname).then(res => {
            if (res && res.success) {
                dispatch(getCurrentOrderSuccessAction(res.orders[0]))
            }
        }).catch(err => {
            console.log(err)
            if (err.message === 'jwt expired') {
                refreshTokens().then(() => dispatch(getCurrentOrder(pathname)))
            }
            dispatch(getCurrentOrderErrorAction())
        })
    }
}