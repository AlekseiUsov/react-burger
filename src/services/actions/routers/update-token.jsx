import { updateAccessToken } from '../../../utils/burger-api';
import { setCookie } from 'typescript-cookie'


export const UPDATE_TOKEN_REQUEST = 'UPDATE_TOKEN_REQUEST';
export const UPDATE_TOKEN_SUCCESS = 'UPDATE_TOKEN_SUCCESS';
export const UPDATE_TOKEN_ERROR = 'UPDATE_TOKEN_ERROR';

export const updateToken = (token) => {
    return function (dispatch) {
        dispatch({
            type: UPDATE_TOKEN_REQUEST,
        })
        updateAccessToken(token).then(res => {
            if (res && res.success) {

                let accessToken = res.accessToken.split('Bearer ')[1];
                let refreshToken = res.refreshToken;

                setCookie('accessToken', accessToken)
                localStorage.setItem('refreshToken', refreshToken);

                dispatch({
                    type: UPDATE_TOKEN_SUCCESS,
                    success: res.success,
                })
            } else {
                dispatch({
                    type: UPDATE_TOKEN_ERROR,
                })
            }
        }).catch(err => {
            dispatch({
                type: UPDATE_TOKEN_ERROR,
            })
        })
    }
}