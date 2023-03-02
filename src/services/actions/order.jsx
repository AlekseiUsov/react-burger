import { postOrder } from '../../utils/burger-api';

export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_ERROR = 'ORDER_ERROR';

export const getOrderDetails = (ingredients) => {
    return function (dispatch) {
        dispatch({
            type: ORDER_REQUEST,
        })
        postOrder(ingredients).then(res => {
            if (res && res.success) {
                dispatch({
                    type: ORDER_SUCCESS,
                    name: res.name,
                    order: {
                        number: res.order.number
                    },
                })
            } else {
                dispatch({
                    type: ORDER_ERROR,
                })
            }
        }).catch(err => {
            dispatch({
                type: ORDER_ERROR,
            })
        })
    }
}