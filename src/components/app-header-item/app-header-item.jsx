import styles from './app-header-item.module.css';
import PropTypes from 'prop-types';

const AppHeaderItem = (props) => {

  return (
    <div className={`${props.isActive ? styles.active : styles.notActive} ${styles.block} p-4`}
      onClick={props.onClick}
    >
      <span className={`${styles.image} pl-2`}>{props.icon}</span>
      <a className={`${styles.link} pl-2`}>{props.text}</a>
    </div >
  )
}

AppHeaderItem.propTypes = PropTypes.shape({
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
});

export default AppHeaderItem;