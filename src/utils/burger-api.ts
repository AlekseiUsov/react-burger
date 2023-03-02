import { ICardTypes } from './propsType';
import { getCookie, setCookie } from 'typescript-cookie'

const NORMA_API = `https://norma.nomoreparties.space/api`;

export const checkReponse = <T>(res: Response): Promise<T> => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

type TServerResponce<T> = {
    success: boolean;
} & T

type TIngredientsResponce = TServerResponce<{
    ingredients: Array<ICardTypes>
}>

export function getIngredientsRequest() {
    return fetch(`${NORMA_API}/ingredients`)
        .then(res => checkReponse<TIngredientsResponce>(res))
}

type TOrderResponce = TServerResponce<{
    name: string;
    order: {
        number: number;
    }
}>

export function postOrder(ingredients: Array<ICardTypes>) {
    return fetch(`${NORMA_API}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
        body: JSON.stringify({
            ingredients,
        }),
    }).then(res => checkReponse<TOrderResponce>(res))
}

type TUserResponce = TServerResponce<{
    user: {
        email: string,
        name: string,
    },
}>

type TRegistrationOrAutorizationResponce = TUserResponce & {
    accessToken: string;
    refreshToken: string;
};

export function registrationRequest(email: string, password: string, name: string) {
    return fetch(`${NORMA_API}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            password
        }),
    }).then(res => checkReponse<TRegistrationOrAutorizationResponce>(res))
}

export function getUser() {
    return fetch(`${NORMA_API}/auth/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
    }).then(res => checkReponse<TUserResponce>(res))
}

export function updateUser(name: string, email: string, password: string) {
    return fetch(`${NORMA_API}/auth/user`, {
        method: 'PATCH',
        body: JSON.stringify({
            name,
            email,
            password
        }),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
    }).then(res => checkReponse<TUserResponce>(res))
}

export function loginRequest(email: string, password: string) {
    return fetch(`${NORMA_API}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        }),
    }).then(res => checkReponse<TRegistrationOrAutorizationResponce>(res))
}


type TLogoutAndPasswordResponce = TServerResponce<{
    message: string;
}>

export function logoutRequest() {
    const token = localStorage.getItem('refreshToken');

    return fetch(`${NORMA_API}/auth/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token
        }),
    }).then(res => checkReponse<TLogoutAndPasswordResponce>(res))
}

export function passwordReset(email: string) {
    return fetch(`${NORMA_API}/password-reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
        }),
    }).then(res => checkReponse<TLogoutAndPasswordResponce>(res))
}


export function passwordRecovery(password: string, token: string) {
    return fetch(`${NORMA_API}/password-reset/reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            password,
            token
        }),
    }).then(res => checkReponse<TLogoutAndPasswordResponce>(res))
}


export function refreshTokens() {
    const token = localStorage.getItem('refreshToken');

    return fetch(`${NORMA_API}/auth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token
        }),
    }).then(res => checkReponse<TRegistrationOrAutorizationResponce>(res)).then(res => {
        let accessToken = res.accessToken.split('Bearer ')[1];
        let refreshToken = res.refreshToken;

        setCookie('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken);
        return res
    }).catch((err) => console.log(err))
}


