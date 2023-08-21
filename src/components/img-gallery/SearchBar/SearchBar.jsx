
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import searchbarStyles from './ SearchbarStyles';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit(event);
    }
  };

  render() {
    return (
      <header style={searchbarStyles.searchbar}>
        <form style={searchbarStyles.form} onSubmit={this.handleSubmit}>
          <button type="submit" style={searchbarStyles.button}>
            <span style={searchbarStyles.buttonLabel}>Search</span>
          </button>
          <input
            style={searchbarStyles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
