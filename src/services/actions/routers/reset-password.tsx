import { passwordRecovery } from '../../../utils/burger-api';
import { RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR } from '../../constants';

interface IResetPasswordRequest {
    type: typeof RESET_PASSWORD_REQUEST;
}

interface IResetPasswordSuccessRequest {
    type: typeof RESET_PASSWORD_SUCCESS;
    success: boolean;
}

interface IResetPasswordErrorRequest {
    type: typeof RESET_PASSWORD_ERROR;
}

export type TResetPassword =
    | IResetPasswordRequest
    | IResetPasswordSuccessRequest
    | IResetPasswordErrorRequest

const resetPasswordRequest = (): IResetPasswordRequest => ({
    type: RESET_PASSWORD_REQUEST
})

const resetPasswordSuccessRequest = (
    success: boolean
): IResetPasswordSuccessRequest => ({
    type: RESET_PASSWORD_SUCCESS,
    success
})

const resetPasswordErrorRequest = (): IResetPasswordErrorRequest => ({
    type: RESET_PASSWORD_ERROR
})

export const resetPassword = (password: string, token: string) => {
    return function (dispatch: any) {
        dispatch(resetPasswordRequest())
        passwordRecovery(password, token).then(res => {
            if (res && res.success) {
                dispatch(resetPasswordSuccessRequest(res.success))
            }
        }).catch(err => {
            dispatch(dispatch(resetPasswordErrorRequest()))
        })
    }
}