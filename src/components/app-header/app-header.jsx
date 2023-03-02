import AppHeaderItem from '../app-header-item/app-header-item'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css'

function AppHeader() {

  return (
    <div className={styles.header} >
      <div className={styles.wrapper}>

        <AppHeaderItem
          path='/'
          text="Конструктор"
          icon={<BurgerIcon />}
        />

        <AppHeaderItem
          path='/orders'
          text="Лента Заказов"
          icon={<ListIcon />} />

        <div className={styles.logo}>
          <Logo />
        </div>

        <AppHeaderItem
          path='/profile'
          text="Личный кабинет"
          icon={<ProfileIcon />} />
      </div>
    </div >
  );
}



export default AppHeader;