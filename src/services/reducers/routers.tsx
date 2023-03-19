import {
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_ERROR,
} from '../constants'

import {
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR
} from '../constants';

import {
    USER_REGISTRATION_REQUEST,
    USER_REGISTRATION_SUCCESS,
    USER_REGISTRATION_ERROR
} from '../constants';


import {
    GET_PROFILE_DATA_REQUEST,
    GET_PROFILE_DATA_SUCCESS,
    GET_PROFILE_DATA_ERROR
} from '../constants';

import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR
} from '../constants';

import {
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_ERROR
} from '../constants';

import {
    UPDATE_USER_DATA_REQUEST,
    UPDATE_USER_DATA_SUCCESS,
    UPDATE_USER_DATA_ERROR,
} from '../constants'

import { TRouteType } from '../actions/routers/router-type'

interface IRouterType {
    user: {
        email: string,
        name: string,
        isLogedIn: boolean,
    },
    isLoading: boolean,
    hasError: boolean
}

const initialState: IRouterType = {
    user: {
        email: '',
        name: '',
        isLogedIn: false,
    },
    isLoading: false,
    hasError: false,
}

export const routerReducer = (state = initialState, action: TRouteType): IRouterType => {

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
                    ...state.user,
                    email: action.user.email,
                    name: action.user.name,
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
                    ...state.user,
                    email: '',
                    name: '',
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
                    ...state.user,
                    email: action.user.email,
                    name: action.user.name,
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
                    ...state.user,
                    email: '',
                    name: '',
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
                    ...state.user,
                    email: action.user.email,
                    name: action.user.name,
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
                    ...state.user,
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
                    ...state.user,
                    email: action.user.email,
                    name: action.user.name,
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
                    ...state.user,
                },
            };
        }
        case FORGOT_PASSWORD_ERROR: {
            return {
                ...state,
                user: {
                    ...state.user,
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

