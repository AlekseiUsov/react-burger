import styles from './home-page.module.css';
import { useEffect } from 'react';

import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'
import BurgerConstructor from '../../components/burger-constructor/burger-constructor'

import { getIngredients } from '../../services/actions/ingridients'
import { useSelector } from '../../services/typesOfStoreAndThunk';
import { RootState } from '../../services/typesOfStoreAndThunk'

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const HomePage = () => {
    const { ingridients, success, isLoading } = useSelector((store: RootState) => store.ingridients);

    return (
        <div>
            {isLoading ? (
                <h1>Пожайлуста, подождите ...</h1>
            ) : ingridients && ingridients.length ? (
                <div className={styles.wrapper}>
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients title={'Соберите бургер'} ingredients={ingridients} />
                        <BurgerConstructor />
                    </DndProvider>
                </div >
            ) : !isLoading && !success && (
                <h1>Извините, произошла ошибка...</h1>
            )}
        </div>
    );
}


