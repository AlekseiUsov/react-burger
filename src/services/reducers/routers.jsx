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

import {
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_ERROR
} from '../actions/routers/user-logout';

import {
    UPDATE_USER_DATA_REQUEST,
    UPDATE_USER_DATA_SUCCESS,
    UPDATE_USER_DATA_ERROR
} from '../actions/routers/change-user-data';


const initialState = {
    user: {
        email: null,
        name: null,
        isLogedIn: false,
    },
    isLoading: false,
    hasError: false,
}

export const routerReducer = (state = initialState, action) => {
    const { type, ...rest } = action;

    switch (action.type) {
        case USER_REGISTRATION_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case USER_REGISTRATION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                user: {
                    email: rest.user.email,
                    name: rest.user.name,
                },
            };
        }
        case USER_REGISTRATION_ERROR: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
            };
        }

        case USER_LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true,
                hasError: false,
                user: {
                    email: null,
                    name: null,
                    isLogedIn: false,
                },
            };
        }
        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                user: {
                    email: rest.user.email,
                    name: rest.user.name,
                    isLogedIn: true,
                },
            };
        }
        case USER_LOGIN_ERROR: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
            };
        }


        case USER_LOGOUT_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case USER_LOGOUT_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                user: {
                    email: null,
                    name: null,
                    isLogedIn: false,
                },
            };
        }
        case USER_LOGOUT_ERROR: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
            };
        }

        case GET_PROFILE_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_PROFILE_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                user: {
                    email: rest.user.email,
                    name: rest.user.name,
                    isLogedIn: true,
                },
            };
        }
        case GET_PROFILE_DATA_ERROR: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
                user: {
                    isLogedIn: false,
                },
            };
        }

        case UPDATE_USER_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case UPDATE_USER_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                hasError: false,
                user: {
                    email: rest.user.email,
                    name: rest.user.name,
                },
            };
        }
        case UPDATE_USER_DATA_ERROR: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
            };
        }

        case FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                user: {
                    password: null,
                },
            };
        }
        case FORGOT_PASSWORD_ERROR: {
            return {
                ...state,
                user: {
                    password: null,
                },
                isLoading: false,
                hasError: true,
            };
        }

        case RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case RESET_PASSWORD_ERROR: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
            };
        }
        default: {
            return state;
        }
    }
};

