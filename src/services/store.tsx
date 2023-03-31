import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';
import { WSMiddleware } from './middlewares/WSMiddleware'
import { allOrdersTypes, userOrdersTypes } from './middlewares/middlewaresTypes';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(
    thunk,
    WSMiddleware(allOrdersTypes),
    WSMiddleware(userOrdersTypes),
));

export const store = createStore(rootReducer, enhancer);