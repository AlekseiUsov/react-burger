import { registrationRequest } from '../../../utils/burger-api';
import { setCookie } from 'typescript-cookie'
import { USER_REGISTRATION_REQUEST, USER_REGISTRATION_SUCCESS, USER_REGISTRATION_ERROR } from '../../constants'
import { AppDispatch, AppThunk } from '../../typesOfStoreAndThunk';


interface IUserRegistrationRequest {
    type: typeof USER_REGISTRATION_REQUEST;
}

interface IUserRegistrationSuccessRequest {
    type: typeof USER_REGISTRATION_SUCCESS;
    success: boolean;
    accessToken: string;
    refreshToken: string
    user: {
        email: string
        name: string
    },
}

interface IUserRegistrationErrorRequest {
    type: typeof USER_REGISTRATION_ERROR;
}

export type TUserRegistration =
    | IUserRegistrationRequest
    | IUserRegistrationSuccessRequest
    | IUserRegistrationErrorRequest

const userRegistrationRequest = (): IUserRegistrationRequest => ({
    type: USER_REGISTRATION_REQUEST
})

const userRegistrationSuccessRequest = (
    success: boolean,
    accessToken: string,
    refreshToken: string,
    user: {
        name: string,
        email: string
    }
): IUserRegistrationSuccessRequest => ({
    type: USER_REGISTRATION_SUCCESS,
    success,
    accessToken,
    refreshToken,
    user
})

const userRegistrationErrorRequest = (): IUserRegistrationErrorRequest => ({
    type: USER_REGISTRATION_ERROR
})

export const userRegistration = (email: string, password: string, name: string): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch(userRegistrationRequest())
        registrationRequest(email, password, name).then(res => {
            if (res && res.success) {
                let accessToken = res.accessToken.split('Bearer ')[1];
                let refreshToken = res.refreshToken;

                setCookie('accessToken', accessToken)
                localStorage.setItem('refreshToken', refreshToken);

                dispatch(userRegistrationSuccessRequest(res.success, res.accessToken, res.refreshToken, res.user))
            }
        }).catch(err => {
            dispatch(userRegistrationErrorRequest())
        })
    }
}