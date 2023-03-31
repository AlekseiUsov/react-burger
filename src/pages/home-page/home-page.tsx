import styles from './home-page.module.css';
import { useEffect } from 'react';

import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'
import BurgerConstructor from '../../components/burger-constructor/burger-constructor'

import { useSelector } from '../../services/typesOfStoreAndThunk';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const HomePage = () => {
    const { ingridients, isLoading } = useSelector(store => store.ingridients);

    return (
        <div>
            {isLoading ? null
                : <div className={styles.wrapper}>
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients title={'Соберите бургер'} ingredients={ingridients} />
                        <BurgerConstructor />
                    </DndProvider>
                </div >
            }
        </div>
    );
}


