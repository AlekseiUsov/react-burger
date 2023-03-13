import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
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

//ваываваы
type TApplicationActions =
    | TConstructorActions
    | TCurrentIngridient
    | TOrderActions
    | TIngredientsActions
    | TRouteType

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
    ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;

export const useDispatch = () => dispatchHook<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook