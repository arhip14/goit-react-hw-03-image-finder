import React from 'react';
import PropTypes from 'prop-types';
import imageGalleryStyles from './ ImageGalleryStyles';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => (
  <ul style={imageGalleryStyles.gallery}>
    {images.map((image) => (
      <ImageGalleryItem
        key={image.id}
        webformatURL={image.webformatURL}
        alt={image.tags}
        onClick={() => onImageClick(image.webformatURL)} // Додано обробник події
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired, // Додано PropTypes
};

export default ImageGallery;
