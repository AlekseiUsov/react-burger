import { Middleware, MiddlewareAPI } from "redux";
import { AppDispatch, RootState, TApplicationActions } from "../typesOfStoreAndThunk";


interface IWSActions {
    wsStart: string
    wsStop: string

    onOpen: (event: Event) => TApplicationActions
    onMessage: (event: MessageEvent) => TApplicationActions
    onError: (event: Event) => TApplicationActions
    onClose: (event: Event) => TApplicationActions
}


export const WSMiddleware = (WSActions: IWSActions): Middleware => {
    return (store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;
        let wsUrl = null;

        return next => (action: TApplicationActions) => {

            const { dispatch } = store;

            if (action.type === WSActions.wsStart) {
                wsUrl = (action as { payload: string }).payload
                console.log(wsUrl)

                socket = new WebSocket(wsUrl)
            }
            if (socket) {
                socket.onopen = event => {
                    dispatch(WSActions.onOpen(event));
                };

                socket.onerror = event => {
                    dispatch(WSActions.onError(event));
                    console.log('Соединение прекращено из-за ошибки')
                };

                socket.onclose = event => {
                    dispatch(WSActions.onClose(event));
                    console.log('Соединение закрыто')
                };

                socket.onmessage = event => {
                    dispatch(WSActions.onMessage(event));
                };

                if (action.type === WSActions.wsStop) {
                    socket.close();
                }
            };
            next(action);
        }
    };
}