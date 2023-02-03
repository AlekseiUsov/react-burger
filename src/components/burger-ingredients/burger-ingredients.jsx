import styles from './burger-ingredients.module.css';
import React from "react";
import PropTypes from 'prop-types';
import cardTypes from "../../utils/propsType";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsGroup from '../burger-ingredients-group/burger-ingredients-group'
import { Link } from 'react-scroll'

const BurgerIngredients = ({ title, ingridients }) => {
  const [current, setCurrent] = React.useState('Булки');

  const bun = React.useMemo(
    () => ingridients.filter((ingridient) => ingridient.type === 'bun')
    , [ingridients]);
  const main = React.useMemo(
    () => ingridients.filter((ingridient) => ingridient.type === 'main')
    , [ingridients]);
  const sauces = React.useMemo(
    () => ingridients.filter((ingridient) => ingridient.type === 'sauce')
    , [ingridients]);


  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.title} pt-10`}>{title}</h1>
      <div className={`${styles.tabs} pt-5`}>
        <Link to="bun" spy={true} smooth={true} offset={0} duration={800} containerId="containerElement"
          onSetActive={() => setCurrent('Булки')}>
          <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>Булки</Tab>
        </Link>
        <Link to="main" spy={true} smooth={true} offset={30} duration={800} containerId="containerElement"
          onSetActive={() => setCurrent('Начинки')}>
          <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>Начинки</Tab>
        </Link>
        <Link to="sauces" spy={true} smooth={true} offset={28} duration={800} containerId="containerElement"
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

BurgerIngredients.propTypes = {
  title: PropTypes.string.isRequired,
  ingridients: PropTypes.arrayOf(cardTypes.isRequired).isRequired
};

export default BurgerIngredients;

