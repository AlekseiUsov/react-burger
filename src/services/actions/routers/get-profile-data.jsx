import { getUser, refreshTokens } from '../../../utils/burger-api';

export const GET_PROFILE_DATA_REQUEST = 'GET_PROFILE_DATA_REQUEST';
export const GET_PROFILE_DATA_SUCCESS = 'GET_PROFILE_DATA_SUCCESS';
export const GET_PROFILE_DATA_ERROR = 'GET_PROFILE_DATA_ERROR';

export const getUserData = () => {
    return function (dispatch) {
        dispatch({
            type: GET_PROFILE_DATA_REQUEST,
            isLoading: true,
        })
        getUser().then(res => {
            dispatch({
                type: GET_PROFILE_DATA_SUCCESS,
                user: {
                    email: res.user.email,
                    name: res.user.name
                }
            })
        }).catch(err => {
            if (err.message === 'jwt expired') {
                refreshTokens().then(() => dispatch(getUserData()))
            } else {
                dispatch({
                    type: GET_PROFILE_DATA_ERROR,
                })
            }
        })
    }
}