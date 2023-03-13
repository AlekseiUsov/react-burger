import { updateUser, refreshTokens } from '../../../utils/burger-api';
import { UPDATE_USER_DATA_REQUEST, UPDATE_USER_DATA_SUCCESS, UPDATE_USER_DATA_ERROR } from '../../constants'

interface IUpdateUserDataRequest {
    type: typeof UPDATE_USER_DATA_REQUEST;
}

interface IUpdateUserDataSuccessRequest {
    type: typeof UPDATE_USER_DATA_SUCCESS;
    user: {
        email: string;
        name: string;
    }
}

interface IUpdateUserDataErrorRequest {
    type: typeof UPDATE_USER_DATA_ERROR;
}

export type TChangeUserData =
    | IUpdateUserDataRequest
    | IUpdateUserDataSuccessRequest
    | IUpdateUserDataErrorRequest

const updateUserData = (): IUpdateUserDataRequest => ({
    type: UPDATE_USER_DATA_REQUEST
})

const updateUserDataSuccess = (
    user: {
        email: string;
        name: string;
    }
): IUpdateUserDataSuccessRequest => ({
    type: UPDATE_USER_DATA_SUCCESS,
    user
})

const updateUserDataError = (): IUpdateUserDataErrorRequest => ({
    type: UPDATE_USER_DATA_ERROR
})

export const changeUserData = (name: string, email: string, password: string) => {
    return function (dispatch: any) {
        dispatch(updateUserData())
        updateUser(name, email, password).then(res => {
            dispatch(updateUserDataSuccess(res.user))
        }).catch(err => {
            if (err.message === 'jwt expired') {
                refreshTokens().then(() => dispatch(changeUserData(name, email, password)))
            } else {
                dispatch(updateUserDataError())
            }
        })
    }
}


