const styles = {
  searchbar: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: '10px 0',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '500px',
    width: '100%',
  },
  button: {
    padding: '10px 20px',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.3s, opacity 0.3s',
    ':hover': {
      background: '#0056b3',
    },
  },
  buttonLabel: {
    fontSize: '16px',
  },
  input: {
    flex: '1',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginRight: '10px',
    outline: 'none',
  },
};

export default styles;
