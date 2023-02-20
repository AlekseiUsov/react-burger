import { logoutRequest, deleteCookie } from '../../../utils/burger-api';

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_ERROR = 'USER_LOGOUT_ERROR';

export const userLogout = () => {
    return function (dispatch) {
        dispatch({
            type: USER_LOGOUT_REQUEST,

        })
        logoutRequest().then(res => {
            dispatch({
                type: USER_LOGOUT_SUCCESS,
            })
        }).catch(err => {
            dispatch({
                type: USER_LOGOUT_ERROR,
            })
        })
        deleteCookie('accessToken')
        localStorage.removeItem('refreshToken')
    }
}