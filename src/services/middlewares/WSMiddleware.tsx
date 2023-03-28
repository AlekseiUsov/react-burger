import { Middleware, MiddlewareAPI } from "redux";
import { getCookie } from "typescript-cookie";
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
                    dispatch(WSActions.onError(event));
                    console.log('Возникла ошибка')
                };

                socket.onmessage = (event) => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);

                    if (parsedData.message === 'Invalid or missing token') {
                        console.log(parsedData.message)
                        socket?.close()
                        refreshTokens()
                            .then(() => {
                                const newToken = getCookie('accessToken');
                                const soketUrl = wsUrl?.split('?')[0];
                                const newWsUrl = `${soketUrl}?token=${newToken}`;
                                dispatch({
                                    type: WSActions.wsStart,
                                    payload: newWsUrl,
                                } as TApplicationActions);
                            })
                    } else {
                        dispatch(WSActions.onMessage(event));
                        console.log('Идет обмен данными')
                    }
                }
                socket.onclose = event => {
                    console.log(event)
                    socket?.close();
                    dispatch(WSActions.onClose(event));
                    console.log('Соединение закрыто')
                }

                if (action.type === WSActions.wsStop) {
                    socket.close();
                    console.log('сокет стоп')
                }
            }
            next(action);
        }
    }
}

