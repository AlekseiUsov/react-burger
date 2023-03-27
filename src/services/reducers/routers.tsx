
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
    },
    isLogedIn: boolean,
    isUserDataLoaded: boolean,
    isLoading: boolean,
    hasError: boolean
}

const initialState: IRouterType = {
    user: {
        email: '',
        name: '',
    },
    isLogedIn: false,
    isUserDataLoaded: false,
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
                isLoading: false,
                isUserDataLoaded: true,
                hasError: false,
                isLogedIn: true,
                user: {
                    email: action.user.email,
                    name: action.user.name,
                },
            };
        }
        case USER_REGISTRATION_ERROR: {
            return {
                ...state,
                hasError: true,
            };
        }

        case USER_LOGIN_REQUEST: {
            return {
                ...initialState,
                isLoading: true,
            };
        }
        case USER_LOGIN_SUCCESS: {
            return {
                isLoading: false,
                isUserDataLoaded: true,
                hasError: false,
                isLogedIn: true,
                user: {
                    email: action.user.email,
                    name: action.user.name,
                },
            };
        }
        case USER_LOGIN_ERROR: {
            return {
                ...state,
                isUserDataLoaded: true,
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
                ...initialState,
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
                isLoading: false,
                hasError: false,
                isUserDataLoaded: true,
                isLogedIn: true,
                user: {
                    email: action.user.email,
                    name: action.user.name,
                },
            };
        }
        case GET_PROFILE_DATA_ERROR: {
            return {
                ...state,
                isUserDataLoaded: true,
                hasError: true,
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
                isLoading: false,
                hasError: false,
                isUserDataLoaded: true,
                isLogedIn: true,
                user: {
                    email: action.user.email,
                    name: action.user.name,
                },
            };
        }
        case UPDATE_USER_DATA_ERROR: {
            return {
                ...initialState,
                isUserDataLoaded: true,
                hasError: true,
            };
        }
        default: {
            return state;
        }
    }
};

