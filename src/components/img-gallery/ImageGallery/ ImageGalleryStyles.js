const styles = {
  gallery: {
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '16px',
    padding: '0',
  },
  galleryItem: {
    borderRadius: '4px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    ':hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    },
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '4px',
  },
};

export default styles;
