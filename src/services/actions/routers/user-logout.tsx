import { logoutRequest } from '../../../utils/burger-api';
import { getCookie, removeCookie } from 'typescript-cookie'
import { USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_LOGOUT_ERROR } from '../../constants'
import { AppDispatch, AppThunk } from '../../typesOfStoreAndThunk';

interface IUserLogoutRequest {
    type: typeof USER_LOGOUT_REQUEST;
}

interface IUserLogoutSuccessRequest {
    type: typeof USER_LOGOUT_SUCCESS;
}

interface IUserLogoutErrorRequest {
    type: typeof USER_LOGOUT_ERROR;
}

export type TUserLogout =
    | IUserLogoutRequest
    | IUserLogoutSuccessRequest
    | IUserLogoutErrorRequest

const userLogoutRequest = (): IUserLogoutRequest => ({
    type: USER_LOGOUT_REQUEST
})

const userLoginSuccessRequest = (): IUserLogoutSuccessRequest => ({
    type: USER_LOGOUT_SUCCESS
})

const userLogoutErrorRequest = (): IUserLogoutErrorRequest => ({
    type: USER_LOGOUT_ERROR
})


export const userLogout = (): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch(userLogoutRequest())
        logoutRequest().then(res => {
            dispatch(userLoginSuccessRequest())
        }).catch(err => {
            dispatch(userLogoutErrorRequest())
        })
        removeCookie('accessToken')
        localStorage.removeItem('refreshToken')
        console.log(getCookie('accessToken'))
    }
}