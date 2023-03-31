import { loginRequest } from '../../../utils/burger-api';
import { setCookie } from 'typescript-cookie'
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from '../../constants'
import { AppDispatch, AppThunk } from '../../typesOfStoreAndThunk';

interface IUserLoginRequest {
    type: typeof USER_LOGIN_REQUEST;
}

interface IUserLoginSuccessRequest {
    type: typeof USER_LOGIN_SUCCESS;
    user: {
        email: string;
        name: string;
    }
}

interface IUserLoginErrorRequest {
    type: typeof USER_LOGIN_ERROR;
}

export type TUserLogin =
    | IUserLoginRequest
    | IUserLoginSuccessRequest
    | IUserLoginErrorRequest

const userLoginRequest = (): IUserLoginRequest => ({
    type: USER_LOGIN_REQUEST
})

const userLoginSuccessRequest = (
    user: {
        email: string;
        name: string;
    }
): IUserLoginSuccessRequest => ({
    type: USER_LOGIN_SUCCESS,
    user
})

const userLoginErrorRequest = (): IUserLoginErrorRequest => ({
    type: USER_LOGIN_ERROR
})


export const userLogin = (email: string, password: string): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch(userLoginRequest())
        loginRequest(email, password).then(res => {
            const accessToken = res.accessToken.split('Bearer ')[1];
            const refreshToken = res.refreshToken;

            setCookie('accessToken', accessToken)
            localStorage.setItem('refreshToken', refreshToken);
            dispatch(userLoginSuccessRequest(res.user))
        }).catch(err => {
            dispatch(userLoginErrorRequest())
        })
    }
}