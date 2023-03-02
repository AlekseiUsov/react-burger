import styles from './home-page.module.css';
import { useEffect } from 'react';

import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'
import BurgerConstructor from '../../components/burger-constructor/burger-constructor'

import { getIngredients } from '../../services/actions/ingridients'
import { useSelector, useDispatch } from 'react-redux';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const HomePage = () => {
    const dispatch = useDispatch();
    const { ingridients, succes, isLoading } = useSelector(store => store.ingridients);

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch]);


    return (
        <div>
            {isLoading ? (
                <h1>Пожайлуста, подождите ...</h1>
            ) : ingridients && ingridients.length ? (
                <div className={styles.wrapper}>
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients title={'Соберите бургер'} ingridients={ingridients} />
                        <BurgerConstructor />
                    </DndProvider>
                </div >
            ) : !succes && (
                <h1>Извините, произошла ошибка...</h1>
            )}
        </div>
    );
}


