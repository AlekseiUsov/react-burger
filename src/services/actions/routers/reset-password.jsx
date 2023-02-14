import { passwordRecovery } from '../../../utils/burger-api';

export const RESET_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';

export const resetPassword = (password, token) => {
    return function (dispatch) {
        dispatch({
            type: RESET_PASSWORD_REQUEST,
        })
        passwordRecovery(password, token).then(res => {
            console.log(res)
            if (res && res.success) {
                console.log(res)
                dispatch({
                    type: RESET_PASSWORD_SUCCESS,
                    success: res.success,
                })
            } else {
                dispatch({
                    type: RESET_PASSWORD_ERROR,
                })
            }
        }).catch(err => {
            dispatch({
                type: RESET_PASSWORD_ERROR,
            })
        })
    }
}