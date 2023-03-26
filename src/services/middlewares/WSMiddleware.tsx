import { Middleware, MiddlewareAPI } from "redux";
import { refreshTokens } from "../../utils/burger-api";
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
        let wsUrl: string | null = null;

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
                    dispatch(WSActions.onError(event));
                };

                socket.onclose = event => {
                    dispatch(WSActions.onClose(event));
                    console.log('Соединение закрыто')
                };

                socket.onmessage = (event) => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);

                    if (parsedData.message === 'Invalid or missing token') {
                        dispatch(WSActions.onClose(event));
                        console.log('да, эта ошибка');

                        refreshTokens()
                            .then(() =>
                                dispatch(WSActions.onOpen(event))
                            )
                    } else {
                        dispatch(WSActions.onMessage(event));
                        console.log('Идет обмен данными')
                    }
                }

                if (action.type === WSActions.wsStop) {
                    socket.close();
                    console.log('сокет стоп')
                }

            };
            next(action);
        }
    };
}