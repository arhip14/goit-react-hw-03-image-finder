import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, onImageClick }) => (
  <img
    src={webformatURL}
    alt=""
    style={{
      width: '250px',
      height: 'auto',
      cursor: 'pointer',
    }}
    onClick={onImageClick}
  />
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
