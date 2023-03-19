import { refreshTokens } from '../../../utils/burger-api';
import { setCookie } from 'typescript-cookie'
import { UPDATE_TOKEN_REQUEST, UPDATE_TOKEN_SUCCESS, UPDATE_TOKEN_ERROR } from '../../constants'
import { AppDispatch, AppThunk } from '../../typesOfStoreAndThunk';

interface IUpdateTokenRequest {
    type: typeof UPDATE_TOKEN_REQUEST;
}

interface IUpdateTokenSuccessRequest {
    type: typeof UPDATE_TOKEN_SUCCESS;
    success: boolean;
}

interface IUpdateTokenErrorRequest {
    type: typeof UPDATE_TOKEN_ERROR;
}

export type TUpdateToken =
    | IUpdateTokenRequest
    | IUpdateTokenSuccessRequest
    | IUpdateTokenErrorRequest

const updateTokenRequest = (): IUpdateTokenRequest => ({
    type: UPDATE_TOKEN_REQUEST
})

const updateTokenSuccessRequest = (
    success: boolean
): IUpdateTokenSuccessRequest => ({
    type: UPDATE_TOKEN_SUCCESS,
    success
})

const updateTokenErrorRequest = (): IUpdateTokenErrorRequest => ({
    type: UPDATE_TOKEN_ERROR
})

export const updateToken = (): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch(updateTokenRequest())
        refreshTokens().then(res => {
            if (res && res.success) {

                let accessToken = res.accessToken.split('Bearer ')[1];
                let refreshToken = res.refreshToken;

                setCookie('accessToken', accessToken)
                localStorage.setItem('refreshToken', refreshToken);

                dispatch(updateTokenSuccessRequest(res.success))
            } else {
                dispatch({
                    type: UPDATE_TOKEN_ERROR,
                })
            }
        }).catch(err => {
            dispatch(updateTokenErrorRequest())
        })
    }
}