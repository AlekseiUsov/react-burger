import { getIngredientsRequest } from '../../utils/burger-api';

export const GET_INGRIDIENTS_REQUEST = 'GET_INGRIDIENTS_REQUEST';
export const GET_INGRIDIENTS_SUCCESS = 'GET_INGRIDIENTS_SUCCESS';
export const GET_INGRIDIENTS_ERROR = 'GET_INGRIDIENTS_ERROR';

export const getIngredients = () => {
    return function (dispatch) {
        dispatch({
            type: GET_INGRIDIENTS_REQUEST,
        })
        getIngredientsRequest().then(res => {
            if (res && res.success) {
                dispatch({
                    type: GET_INGRIDIENTS_SUCCESS,
                    ingredients: res.data,
                })
            } else {
                dispatch({
                    type: GET_INGRIDIENTS_ERROR,
                })
            }
        }).catch(err => {
            dispatch({
                type: GET_INGRIDIENTS_ERROR,
            })
        })
    }
}