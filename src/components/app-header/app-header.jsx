import React from 'react';
import AppHeaderItem from '../app-header-item/app-header-item'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css'
import { NavLink } from 'react-router-dom';



function AppHeader() {
  const [active, setActive] = React.useState('Конструктор');


  return (
    <div className={styles.header} >
      <div className={styles.wrapper}>
        <NavLink to={'/'} style={{ textDecoration: 'none' }}>
          <AppHeaderItem
            onClick={() => setActive("Конструктор")}
            isActive={active === "Конструктор"}
            text="Конструктор"
            icon={<BurgerIcon />} />
        </NavLink>
        <NavLink to={'/orders'} style={{ textDecoration: 'none' }}>
          <AppHeaderItem
            onClick={() => setActive("Лента Заказов")}
            isActive={active === "Лента Заказов"}
            text="Лента Заказов"
            icon={<ListIcon />} />
        </NavLink>
        <div className={styles.logo}>
          <Logo />
        </div>
        <NavLink to={'/profile'} style={{ textDecoration: 'none' }}>
          <AppHeaderItem
            onClick={() => setActive("Личный кабинет")}
            isActive={active === "Личный кабинет"}
            text="Личный кабинет"
            icon={<ProfileIcon />} />
        </NavLink>
      </div>
    </div >
  );
}



export default AppHeader;