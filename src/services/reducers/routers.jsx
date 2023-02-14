import {
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_ERROR,
} from '../../services/actions/routers/forgot-password';

import {
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR
} from '../actions/routers/reset-password';

import {
    USER_REGISTRATION_REQUEST,
    USER_REGISTRATION_SUCCESS,
    USER_REGISTRATION_ERROR
} from '../actions/routers/user-registration';


import {
    GET_PROFILE_DATA_REQUEST,
    GET_PROFILE_DATA_SUCCESS,
    GET_PROFILE_DATA_ERROR
} from '../actions/routers/get-profile-data';


import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR
} from '../actions/routers/user-login';

const initialState = {
    user: {
        email: null,
        name: null,
    },
    isLoading: false,
    success: false,
}

export const routerReducer = (state = initialState, action) => {

    const { type, ...rest } = action;

    switch (action.type) {
        case USER_REGISTRATION_REQUEST: {
            return {
                ...state,
            };
        }
        case USER_REGISTRATION_SUCCESS: {
            return {
                ...state,
                success: true,
                user: {
                    email: rest.user.email,
                    name: rest.user.name,
                },
            };
        }
        case USER_REGISTRATION_ERROR: {
            return {
                ...state,
                user: {
                    password: null,
                },
                success: false,
            };
        }

        case USER_LOGIN_REQUEST: {
            return {
                ...state,
            };
        }
        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                success: true,
                user: {
                    email: rest.user.email,
                    name: rest.user.name,
                },
            };
        }
        case USER_LOGIN_ERROR: {
            return {
                ...state,
                success: false,
            };
        }

        case GET_PROFILE_DATA_REQUEST: {
            return {
                ...state,
            };
        }
        case GET_PROFILE_DATA_SUCCESS: {
            return {
                ...state,
                success: true,
                user: {
                    email: rest.user.email,
                    name: rest.user.name,
                },
            };
        }
        case GET_PROFILE_DATA_ERROR: {
            return {
                ...state,
                success: false,
            };
        }

        case FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
            };
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                user: {
                    password: null,
                },
                success: true,
            };
        }
        case FORGOT_PASSWORD_ERROR: {
            return {
                ...state,
                user: {
                    password: null,
                },
                success: false,
            };
        }

        case RESET_PASSWORD_REQUEST: {
            return {
                ...state,
            };
        }
        case RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                user: {
                    password: null,
                },
                success: true,
            };
        }
        case RESET_PASSWORD_ERROR: {
            return {
                ...state,
                user: {
                    password: null,
                },
                success: false,
            };
        }
        default: {
            return state;
        }
    }
};

