import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
} from 'react-redux'
import { store } from './store';

import { TConstructorActions } from './actions/burger-constructor';
import { TCurrentIngridient } from './actions/current-ingridient';
import { TOrderActions } from './actions/order';
import { TIngredientsActions } from './actions/ingridients'
import { TRouteType } from './actions/routers/router-type';
import { TGetAllOrdersActions } from './actions/ws-get-all-orders';
import { TCurrentOrderActions } from './actions/current-order';
import { TGetUserOrdersActions } from './actions/ws-get-user-orders';


export type TApplicationActions =
    | TConstructorActions
    | TCurrentIngridient
    | TOrderActions
    | TIngredientsActions
    | TRouteType
    | TGetAllOrdersActions
    | TGetUserOrdersActions
    | TCurrentOrderActions

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, never, TApplicationActions>
export const useDispatch = () => dispatchHook<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook