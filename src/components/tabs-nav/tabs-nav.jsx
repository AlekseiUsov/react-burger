import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './tabs-nav.module.css';
import React from "react";
import PropTypes from 'prop-types';

function Tabs() {
    const [current, setCurrent] = React.useState('Булки')

    return (
        <div className={`${styles.tabs} pt-5`}>
            <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>Булки</Tab>
            <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>Соусы</Tab>
            <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>Начинки</Tab>
        </div>
    );
}

Tabs.propTypes = PropTypes.shape({
    className: PropTypes.string.isRequired,
});

export default Tabs;