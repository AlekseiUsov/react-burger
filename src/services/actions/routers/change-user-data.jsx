import { updateUser, refreshTokens } from '../../../utils/burger-api';

export const UPDATE_USER_DATA_REQUEST = 'UPDATE_USER_DATA_REQUEST';
export const UPDATE_USER_DATA_SUCCESS = 'UPDATE_USER_DATA_SUCCESS';
export const UPDATE_USER_DATA_ERROR = 'UPDATE_USER_DATA_ERROR';

export const changeUserData = (name, email, password) => {
    return function (dispatch) {
        dispatch({
            type: UPDATE_USER_DATA_REQUEST,
        })
        updateUser(name, email, password).then(res => {
            console.log(res)
            dispatch({
                type: UPDATE_USER_DATA_SUCCESS,
                user: {
                    email: res.user.email,
                    name: res.user.name,
                },
            })
        }).catch(err => {
            if (err.message === 'jwt expired') {
                refreshTokens().then(() => dispatch(changeUserData()))
            } else {
                dispatch({
                    type: UPDATE_USER_DATA_ERROR,
                })
            }
        })
    }
}


