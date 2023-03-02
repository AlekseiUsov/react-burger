import { loginRequest } from '../../../utils/burger-api';
import { setCookie } from 'typescript-cookie'

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

export const userLogin = (email, password) => {
    return function (dispatch) {
        dispatch({
            type: USER_LOGIN_REQUEST,
            isLoading: true,
        })
        loginRequest(email, password).then(res => {
            let accessToken = res.accessToken.split('Bearer ')[1];
            let refreshToken = res.refreshToken;

            setCookie('accessToken', accessToken)
            localStorage.setItem('refreshToken', refreshToken);
            dispatch({
                type: USER_LOGIN_SUCCESS,
                user: {
                    email: res.user.email,
                    name: res.user.name,
                },
            })
        }).catch(err => {
            dispatch({
                type: USER_LOGIN_ERROR,
            })
        })
    }
}