import { GET_PROFILE_DATA_REQUEST, GET_PROFILE_DATA_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_ERROR, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_REGISTRATION_ERROR, USER_REGISTRATION_REQUEST } from "../constants"
import { routerReducer } from "./routers"

describe('routes', () => {

    const initialState = {
        user: {
            email: '',
            name: '',
        },
        isLogedIn: false,
        isUserDataLoaded: false,
        isLoading: false,
        hasError: false,
    }

    it('test initial state', () => {
        expect(routerReducer(undefined, {})).toEqual({
            ...initialState
        })
    })


    it('test user registration request', () => {
        const action = { type: USER_REGISTRATION_REQUEST }
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true
        })
    })


    it('test user registration error', () => {
        const action = { type: USER_REGISTRATION_ERROR }
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            hasError: true
        })
    })

    it('test login request', () => {
        const action = { type: USER_LOGIN_REQUEST }
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true
        })
    })


    it('test login success', () => {
        const data = { email: 'aleksei.usoff@gmail.com', name: 'Алексей' }
        const action = { type: USER_LOGIN_SUCCESS, user: data }
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isUserDataLoaded: true,
            isLogedIn: true,
            user: { ...data }
        })
    })


    it('test login error', () => {
        const action = { type: USER_LOGIN_ERROR }
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isUserDataLoaded: true,
            hasError: true,
        })
    })


    it('test logout request', () => {
        const action = { type: USER_LOGOUT_REQUEST }
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true
        })
    })

    it('test logout success', () => {
        const action = { type: USER_LOGOUT_SUCCESS }
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isUserDataLoaded: true,
        })
    })

    it('test logout error', () => {
        const action = { type: USER_LOGOUT_ERROR }
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: false,
            isUserDataLoaded: true,
            hasError: true,
        })
    })

    it('test get user data request', () => {
        const action = { type: GET_PROFILE_DATA_REQUEST }
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true
        })
    })

    it('test get user data success', () => {
        const data = { email: 'aleksei.usoff@gmail.com', name: 'Алексей' }
        const action = { type: USER_LOGIN_SUCCESS, user: data }
        expect(routerReducer(initialState, action)).toEqual({
            ...initialState,
            isUserDataLoaded: true,
            isLogedIn: true,
            user: { ...data }
        })
    })

})


