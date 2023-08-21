// ImageGalleryItem.jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imageGalleryItemStyles from './ImageGalleryItemStyles';

class ImageGalleryItem extends Component {
  state = {
    isActive: false,
  };

  handleImageClick = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  render() {
    const { webformatURL, alt } = this.props;
    const { isActive } = this.state;

    return (
      <li
        style={{
          ...imageGalleryItemStyles.galleryItem,
          ...(isActive && imageGalleryItemStyles.galleryImageActive),
        }}
      >
        <img
          style={imageGalleryItemStyles.galleryImage}
          src={webformatURL}
          alt={alt}
          onClick={this.handleImageClick}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
