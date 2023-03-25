import AppHeaderItem from '../header-item/header-item'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './header.module.css'

function AppHeader() {

  return (
    <div className={styles.header} >
      <div className={styles.wrapper}>

        <AppHeaderItem
          path='/'
          text="Конструктор"
          icon={<BurgerIcon type="primary" />}
        />

        <AppHeaderItem
          path='/feed'
          text="Лента Заказов"
          icon={<ListIcon type="primary" />} />

        <div className={styles.logo}>
          <Logo />
        </div>

        <AppHeaderItem
          path='/profile'
          text="Личный кабинет"
          icon={<ProfileIcon type="primary" />} />
      </div>
    </div >
  );
}



export default AppHeader;