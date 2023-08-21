const styles = {
  galleryItem: {
    display: 'inline-block',
    margin: '5px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    ':hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    },
  },
  galleryImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '8px',
  },
};

export default styles;
