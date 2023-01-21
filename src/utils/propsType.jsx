import PropTypes from 'prop-types';

const cardTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
});


export default cardTypes;