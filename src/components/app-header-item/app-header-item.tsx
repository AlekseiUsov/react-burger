import styles from './app-header-item.module.css';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';


interface IAppHeaderItem {
  text: string;
  icon: React.ReactElement;
  path: string;
}
const AppHeaderItem: FC<IAppHeaderItem> = ({ text, icon, path }) => {

  return (
    <NavLink to={path}
      className={({ isActive }) =>
        `${styles.block} p-4 ${isActive ? styles.active : ''}`
      }>
      {icon}
      <p className='pl-2'>{text}</p>
    </NavLink>
  )
}


export default AppHeaderItem;