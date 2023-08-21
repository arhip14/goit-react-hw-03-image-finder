const styles = {
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    backgroundColor: '#f8f9fa',
    borderRadius: '4px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  spinner: {
    borderTop: '2px solid #007bff',
    borderLeft: '2px solid transparent',
    animation: 'spin 1s linear infinite',
    width: '20px',
    height: '20px',
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
};

export default styles;
