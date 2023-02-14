import { getUser, updateAccessToken } from '../../../utils/burger-api';

export const GET_PROFILE_DATA_REQUEST = 'GET_PROFILE_DATA_REQUEST';
export const GET_PROFILE_DATA_SUCCESS = 'GET_PROFILE_DATA_SUCCESS';
export const GET_PROFILE_DATA_ERROR = 'GET_PROFILE_DATA_ERROR';

export const getUserData = () => {
    return function (dispatch) {
        dispatch({
            type: GET_PROFILE_DATA_REQUEST,
            isLoading: true,
        })
        console.log(localStorage.getItem('refreshToken'))
        getUser().then(res => {
            if (res && res.success) {
                dispatch({
                    type: GET_PROFILE_DATA_SUCCESS,
                    success: res.success,
                    isLoading: false,
                    user: {
                        email: res.user.email,
                        name: res.user.name
                    }
                })
            } else {
                dispatch({
                    isLoading: false,
                    type: GET_PROFILE_DATA_ERROR,
                })
            }
        }).catch(err => {
            const refreshToken = localStorage.getItem('refreshToken');
            console.log(refreshToken)
            if (err.message === 'jwt expired') {
                updateAccessToken(refreshToken)
                    .then(() => getUserData())
            } else {
                dispatch({
                    type: GET_PROFILE_DATA_ERROR,
                })
            }
        })
    }
}