
import React from 'react';
import PropTypes from 'prop-types';
import buttonStyles from './ButtonStyles';

const Button = ({ onClick, isVisible }) => (
  <button style={buttonStyles.button} onClick={onClick} disabled={!isVisible}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default Button;
