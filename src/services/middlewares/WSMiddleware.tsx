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

                socket = new WebSocket(wsUrl)
                console.log('сокет старт')
            }
            if (socket) {
                socket.onopen = event => {
                    dispatch(WSActions.onOpen(event));
                    console.log('открыли соеденение')
                };

                socket.onerror = event => {
                    console.log('Возникла ошибка')
                    console.log(event)
                    dispatch(WSActions.onError(event));
                };

                socket.onclose = event => {
                    dispatch(WSActions.onClose(event));
                    console.log('Соединение закрыто')
                };

                socket.onmessage = event => {
                    dispatch(WSActions.onMessage(event));
                    console.log('Идет обмен данными')
                };

                if (action.type === WSActions.wsStop) {
                    socket.close();
                    console.log('сокет стоп')
                }
            };
            next(action);
        }
    };
}