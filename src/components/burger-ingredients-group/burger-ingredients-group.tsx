import styles from './burger-ingredients-group.module.css';
import { FC } from "react";
import { ICardTypes } from '../../utils/propsType';

import BurgerIngredientCard from '../burger-ingredient-card/burger-ingredient-card';

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        name?: string
    }
}

interface IBurgerIngredientsGroup {
    title: string;
    ingridients: Array<ICardTypes>;
    name: string;
}

const BurgerIngredientsGroup: FC<IBurgerIngredientsGroup> = ({ title, ingridients, name }) => {

    return (
        <div className='mt-10' name={name}>
            <h1 className={styles.title} >{title}</h1>
            <div className={styles.cards}>
                {ingridients
                    .map((ingridient) => (
                        <BurgerIngredientCard
                            key={ingridient._id}
                            {...ingridient}
                        />
                    ))}
            </div>
        </div>
    );
}

export default BurgerIngredientsGroup;