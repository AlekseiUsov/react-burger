import { registrationRequest } from '../../../utils/burger-api';
import { setCookie } from 'typescript-cookie'

export const USER_REGISTRATION_REQUEST = 'USER_REGISTRATION_REQUEST';
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS';
export const USER_REGISTRATION_ERROR = 'USER_REGISTRATION_ERROR';

export const userRegistration = (email, password, name) => {
    return function (dispatch) {
        dispatch({
            type: USER_REGISTRATION_REQUEST,
        })
        registrationRequest(email, password, name).then(res => {
            if (res && res.success) {
                let accessToken = res.accessToken.split('Bearer ')[1];
                let refreshToken = res.refreshToken;

                setCookie('accessToken', accessToken)
                localStorage.setItem('refreshToken', refreshToken);

                dispatch({
                    type: USER_REGISTRATION_SUCCESS,
                    success: res.success,
                    accessToken: res.accessToken,
                    refreshToken: res.refreshToken,
                    user: {
                        email: res.user.email,
                        name: res.user.name,
                    },
                })
            } else {
                dispatch({
                    type: USER_REGISTRATION_ERROR,
                })
            }
        }).catch(err => {
            dispatch({
                type: USER_REGISTRATION_ERROR,
            })
        })
    }
}