import styles from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import cardTypes from "../../utils/propsType";

import Tabs from "../tabs-nav/tabs-nav";
import BurgerIngredientsGroup from '../burger-ingredients-group/burger-ingredients-group'

const filterIngridients = (ingridients, type) => {
  return ingridients
    .filter((ingridient) => ingridient.type === type)
}


function BurgerIngredients({ title, ingridients }) {
  const bun = filterIngridients(ingridients, 'bun');
  const main = filterIngridients(ingridients, 'main');
  const sauces = filterIngridients(ingridients, 'sauce');

  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.title} pt-10`}>{title}</h1>
      <Tabs />
      <div className={`${styles.cardsContainer} custom-scroll`}>
        <BurgerIngredientsGroup title={'Булки'} ingridients={bun} />
        <BurgerIngredientsGroup title={'Соусы'} ingridients={sauces} />
        <BurgerIngredientsGroup title={'Начинки'} ingridients={main} />
      </div>
    </div >
  );
}

BurgerIngredients.propTypes = {
  title: PropTypes.string.isRequired,
  ingridients: PropTypes.arrayOf(cardTypes.isRequired).isRequired
};

export default BurgerIngredients;

