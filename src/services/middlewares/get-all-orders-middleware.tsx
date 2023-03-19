import { Middleware, MiddlewareAPI } from "redux";
import { AppDispatch, RootState, TApplicationActions } from "../typesOfStoreAndThunk";
import { WS_CONNECTION_START } from '../constants';
import {
    getAllOrdersSuccess,
    getAllOrdersError,
    getAllOrdersDisconnect,
    getAllOrders,
} from '../actions/ws-get-all-orders'


export const WSgetAllOrdersMiddleware = (): Middleware => {
    return (store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

        return next => (action: TApplicationActions) => {

            const { dispatch } = store;

            if (action.type === WS_CONNECTION_START) {
                socket = new WebSocket(action.payload);
                console.log('Соединение установлено')
            }
            if (socket) {
                socket.onopen = event => {
                    dispatch(getAllOrdersSuccess(event));
                };

                socket.onerror = event => {
                    dispatch(getAllOrdersError(event));
                };

                socket.onclose = event => {
                    dispatch(getAllOrdersDisconnect(event));
                };

                socket.onmessage = event => {
                    dispatch(getAllOrders(event));
                };
            }
            next(action);
        };
    }
};
