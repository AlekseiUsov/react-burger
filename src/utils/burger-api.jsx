const NORMA_API = `https://norma.nomoreparties.space/api`;

export const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function getIngredientsRequest() {
    return fetch(`${NORMA_API}/ingredients`)
        .then(checkReponse)
}

export function postOrder(ingredients) {
    console.log(ingredients)
    return fetch(`${NORMA_API}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
        body: JSON.stringify({
            ingredients,
        }),
    }).then(checkReponse)
}

export function registrationRequest(email, password, name) {
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
    }).then(checkReponse)
}


export function getUser() {
    //console.log('Bearer ' + getCookie('accessToken'))
    return fetch(`${NORMA_API}/auth/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
    }).then(checkReponse)
}

export function updateUser(name, email, password) {
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
    }).then(checkReponse)
}

export function loginRequest(email, password) {
    return fetch(`${NORMA_API}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        }),
    }).then(checkReponse)
}

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
    }).then(checkReponse)
}

export function passwordReset(email) {
    return fetch(`${NORMA_API}/password-reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
        }),
    }).then(checkReponse)
}


export function passwordRecovery(password, token) {
    return fetch(`${NORMA_API}/password-reset/reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            password,
            token
        }),
    }).then(checkReponse)
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
    }).then(checkReponse).then(res => {
        let accessToken = res.accessToken.split('Bearer ')[1];
        let refreshToken = res.refreshToken;

        setCookie('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken);
        return res
    }).catch((err) => console.log(err))
}


export function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

export function getCookie(name) {
    const matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}