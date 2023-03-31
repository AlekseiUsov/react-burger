import {
    getAllOrders,
    getAllOrdersDisconnect,
    getAllOrdersError,
    getAllOrdersSuccess
} from "../actions/ws-get-all-orders";

import {
    getUserOrders,
    getUserOrdersDisconnect,
    getUserOrdersError,
    getUserOrdersSuccess
} from "../actions/ws-get-user-orders";

import {
    WS_CONNECTION_ALL_ORDERS_START,
    WS_CONNECTION_ALL_ORDERS_STOP,
    WS_CONNECTION_USER_ORDERS_START,
    WS_CONNECTION_USER_ORDERS_STOP
} from "../constants";

export const allOrdersTypes = {
    wsStart: WS_CONNECTION_ALL_ORDERS_START,
    wsStop: WS_CONNECTION_ALL_ORDERS_STOP,

    onOpen: getAllOrdersSuccess,
    onMessage: getAllOrders,
    onError: getAllOrdersError,
    onClose: getAllOrdersDisconnect,

}

export const userOrdersTypes = {
    wsStart: WS_CONNECTION_USER_ORDERS_START,
    wsStop: WS_CONNECTION_USER_ORDERS_STOP,

    onOpen: getUserOrdersSuccess,
    onMessage: getUserOrders,
    onError: getUserOrdersError,
    onClose: getUserOrdersDisconnect,

}


