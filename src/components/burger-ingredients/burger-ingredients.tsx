import styles from './burger-ingredients.module.css';
import React, { FC } from "react";

import { ICardTypes } from '../../utils/propsType';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsGroup from '../burger-ingredients-group/burger-ingredients-group'
import { Link } from 'react-scroll'

interface IBurgerIngredients {
  title: string;
  ingredients: Array<ICardTypes>
}

const BurgerIngredients: FC<IBurgerIngredients> = ({ title, ingredients }) => {
  const [current, setCurrent] = React.useState<string>('Булки');

  const bun = React.useMemo(
    () => ingredients.filter((ingridient) => ingridient.type === 'bun')
    , [ingredients]);
  const main = React.useMemo(
    () => ingredients.filter((ingridient) => ingridient.type === 'main')
    , [ingredients]);
  const sauces = React.useMemo(
    () => ingredients.filter((ingridient) => ingridient.type === 'sauce')
    , [ingredients]);


  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.title} pt-10`}>{title}</h1>
      <div className={`${styles.tabs} pt-5`}>
        <Link to="bun" spy={true} smooth={true} offset={0} duration={800} containerId="containerElement"
          onSetActive={() => setCurrent('Булки')}>
          <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>Булки</Tab>
        </Link>
        <Link to="main" spy={true} smooth={true} offset={-20} duration={800} containerId="containerElement"
          onSetActive={() => setCurrent('Начинки')}>
          <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>Начинки</Tab>
        </Link>
        <Link to="sauces" spy={true} smooth={true} offset={-100} duration={800} containerId="containerElement"
          onSetActive={() => setCurrent('Соусы')}>
          <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>Соусы</Tab>
        </Link>
      </div>
      <div className={`${styles.cardsContainer} custom-scroll`} id="containerElement">
        <BurgerIngredientsGroup name="bun" title='Булки' ingridients={bun} />
        <BurgerIngredientsGroup name="main" title='Начинки' ingridients={main} />
        <BurgerIngredientsGroup name="sauces" title='Соусы' ingridients={sauces} />
      </div>
    </div>
  );
}



export default BurgerIngredients;

