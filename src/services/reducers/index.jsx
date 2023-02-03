import { combineReducers } from 'redux';
import { ingridientsReducer } from './ingridients';
import { burgerConstructorReducer } from './burger-constructor';
import { currentIngridientReducer } from './current-ingridient';
import { orderReducer } from './order';



export const rootReducer = combineReducers({
    currentIngridient: currentIngridientReducer,
    ingridients: ingridientsReducer,
    burgerConstrucor: burgerConstructorReducer,
    orderDetails: orderReducer,
});