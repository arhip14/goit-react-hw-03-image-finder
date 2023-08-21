const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Темний бекдроп
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  image: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
};

export default modalStyles;
