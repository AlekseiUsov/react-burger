import { getUser, refreshTokens } from '../../../utils/burger-api';
import { GET_PROFILE_DATA_REQUEST, GET_PROFILE_DATA_SUCCESS, GET_PROFILE_DATA_ERROR } from '../../constants';
import { AppDispatch, AppThunk } from '../../typesOfStoreAndThunk';

interface IGetProfileDataRequest {
    type: typeof GET_PROFILE_DATA_REQUEST;
}

interface IGetProfileDataSuccessRequest {
    type: typeof GET_PROFILE_DATA_SUCCESS;
    user: {
        email: string;
        name: string;
    }
}

interface IGetProfileDataErrorRequest {
    type: typeof GET_PROFILE_DATA_ERROR;
}

export type TGetProfileData =
    | IGetProfileDataRequest
    | IGetProfileDataSuccessRequest
    | IGetProfileDataErrorRequest

const getProfileDataRequest = (): IGetProfileDataRequest => ({
    type: GET_PROFILE_DATA_REQUEST
})

const getProfileDataSuccessRequest = (
    user: {
        email: string;
        name: string;
    }
): IGetProfileDataSuccessRequest => ({
    type: GET_PROFILE_DATA_SUCCESS,
    user
})

const getProfileDataErrorRequest = (): IGetProfileDataErrorRequest => ({
    type: GET_PROFILE_DATA_ERROR
})


export const getUserData = (): AppThunk => {
    return function (dispatch: AppDispatch) {
        dispatch(getProfileDataRequest())
        getUser().then(res => {
            dispatch(getProfileDataSuccessRequest(res.user))
        }).catch(err => {
            if (err.message === 'jwt expired') {
                refreshTokens().then(() => dispatch(getUserData()))
            } else {
                dispatch(getProfileDataErrorRequest())
            }
        })
    }
}