import React from 'react';
import PropTypes from 'prop-types';
import modalStyles from './ModalStyles'; // Імпортуємо стилі для модального вікна

const Modal = ({ src, alt, onClose }) => (
  <div style={modalStyles.overlay} onClick={onClose}>
    <div style={modalStyles.modal}>
      <img src={src} alt={alt} style={modalStyles.image} />
    </div>
  </div>
);

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
