const imageGalleryItemStyles = {
  galleryItem: {
    display: 'inline-block',
    margin: '5px',
  },
  galleryImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
  galleryImageActive: {
    transform: 'scale(1.1)',
  },
};

export default imageGalleryItemStyles;