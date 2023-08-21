import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => (
  <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <li key={id} style={{ margin: '10px' }}>
        <ImageGalleryItem webformatURL={webformatURL} onImageClick={() => onImageClick(largeImageURL)} />
      </li>
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
