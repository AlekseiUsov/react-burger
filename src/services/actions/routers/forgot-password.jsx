import { passwordReset } from '../../../utils/burger-api';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';

export const forgotPassword = (email) => {
    return function (dispatch) {
        dispatch({
            type: FORGOT_PASSWORD_REQUEST,
        })
        passwordReset(email).then(res => {
            if (res && res.success) {
                console.log(res)
                dispatch({
                    type: FORGOT_PASSWORD_SUCCESS,
                    success: res.success,
                })
            } else {
                dispatch({
                    type: FORGOT_PASSWORD_ERROR,
                })
            }
        }).catch(err => {
            dispatch({
                type: FORGOT_PASSWORD_ERROR,
            })
        })
    }
}