import styles from './app-header-item.module.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const AppHeaderItem = ({ text, icon, path }) => {

  return (
    <NavLink to={path} style={{ textDecoration: 'none' }}
      className={({ isActive }) =>
        `${styles.block} p-4 ${isActive ? styles.active : ''}`
      }>
      {icon}
      <p className='pl-2'>{text}</p>
    </NavLink>
  )
}

AppHeaderItem.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default AppHeaderItem;