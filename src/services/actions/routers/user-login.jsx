import { loginRequest, setCookie, getCookie } from '../../../utils/burger-api';

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
            if (res && res.success) {

                let accessToken = res.accessToken.split('Bearer ')[1];
                let refreshToken = res.refreshToken;

                setCookie('accessToken', accessToken)
                localStorage.setItem('refreshToken', refreshToken);

                dispatch({
                    type: USER_LOGIN_SUCCESS,
                    success: res.success,
                    isLoading: false,
                    user: {
                        email: res.user.email,
                        name: res.user.name,
                    },
                })
            } else {
                dispatch({
                    type: USER_LOGIN_ERROR,
                })
            }
        }).catch(err => {
            dispatch({
                type: USER_LOGIN_ERROR,
            })
        })
    }
}