const NORMA_API = `https://norma.nomoreparties.space/api`;


export const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export function getIngredientsRequest() {
    return fetch(`${NORMA_API}/ingredients`)
        .then(checkReponse)
}

export function postOrder(ingredients) {
    return fetch(`${NORMA_API}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ingredients,
        }),
    }).then(checkReponse)
}
