import { getIngredientsRequest } from '../../utils/burger-api';

export const _REQUEST_GET_INGRIDIENTS = '_REQUEST';
export const _SUCCESS_GET_INGRIDIENTS = '_SUCCESS';
export const _ERROR_GET_INGRIDIENTS = '_ERROR';

export const getIngredients = () => {
    return function (dispatch) {
        dispatch({
            type: _REQUEST_GET_INGRIDIENTS,
        })
        getIngredientsRequest().then(res => {
            if (res && res.success) {
                dispatch({
                    type: _SUCCESS_GET_INGRIDIENTS,
                    ingredients: res.data,
                })
            } else {
                dispatch({
                    type: _ERROR_GET_INGRIDIENTS,
                })
            }
        }).catch(err => {
            dispatch({
                type: _ERROR_GET_INGRIDIENTS,
            })
        })
    }
}