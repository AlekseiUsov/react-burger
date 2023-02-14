import styles from './app-header-item.module.css';
import PropTypes from 'prop-types';

const AppHeaderItem = ({ isActive, onClick, text, icon }) => {

  return (
    <div className={`
      ${styles.block} 
      p-4 
      ${isActive ? styles['active'] : styles['notActive']}  
      `}
      onClick={onClick}>
      <span className={`${styles.image} pl-2`}>{icon}</span>
      <p className='pl-2'>{text}</p>
    </div>
  )
}

AppHeaderItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default AppHeaderItem;