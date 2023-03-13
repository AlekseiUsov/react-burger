import { passwordReset } from '../../../utils/burger-api';
import { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_ERROR } from '../../constants';

interface IForgotPasswordRequest {
    type: typeof FORGOT_PASSWORD_REQUEST;
}

interface IForgotPasswordSuccessRequest {
    success: boolean;
    type: typeof FORGOT_PASSWORD_SUCCESS;
}

interface IForgotPasswordErrorRequest {
    type: typeof FORGOT_PASSWORD_ERROR;
}

export type TForgotPassword =
    | IForgotPasswordRequest
    | IForgotPasswordSuccessRequest
    | IForgotPasswordErrorRequest

const forgotPasswordRequest = (): IForgotPasswordRequest => ({
    type: FORGOT_PASSWORD_REQUEST
})

const forgotPasswordSuccessRequest = (
    success: boolean
): IForgotPasswordSuccessRequest => ({
    type: FORGOT_PASSWORD_SUCCESS,
    success
})

const forgotPasswordErrorRequest = (): IForgotPasswordErrorRequest => ({
    type: FORGOT_PASSWORD_ERROR
})

export const forgotPassword = (email: string) => {
    return function (dispatch: any) {
        dispatch(forgotPasswordRequest())
        passwordReset(email).then(res => {
            if (res && res.success) {
                dispatch(forgotPasswordSuccessRequest(res.success))
            }
        }).catch(err => {
            dispatch(forgotPasswordErrorRequest())
        })
    }
}