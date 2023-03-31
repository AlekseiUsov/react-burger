import { combineReducers } from 'redux';
import { ingridientsReducer } from './ingridients';
import { burgerConstructorReducer } from './burger-constructor';
import { currentIngridientReducer } from './current-ingridient';
import { currentOrderReducer } from './current-order';

import { orderReducer } from './order';
import { routerReducer } from './routers'
import { wsReducerGetAllOrders } from './get-all-orders'
import { wsReducerGetUserOrders } from './get-user-orders';

export const rootReducer = combineReducers({
    currentIngridient: currentIngridientReducer,
    ingridients: ingridientsReducer,
    burgerConstructor: burgerConstructorReducer,
    orderDetails: orderReducer,
    auth: routerReducer,
    allOrders: wsReducerGetAllOrders,
    userOrders: wsReducerGetUserOrders,
    currentOrder: currentOrderReducer,
});

