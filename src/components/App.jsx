import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './img-gallery/SearchBar/SearchBar';
import ImageGallery from './img-gallery/ImageGallery/ImagGallery';
import Button from './img-gallery/Button/Button';
import Loader from './img-gallery/Loader/Loader';
import Modal from './img-gallery/Modal/Modal';
import '../index.css';

class App extends Component {
  state = {
    images: [],
    selectedImage: null,
    searchQuery: '',
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ isLoading: true });

      try {
        const response = await fetch(
          `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=38252879-889a9619e4dc8706c4a00f455&image_type=photo&orientation=horizontal&per_page=12`
        );
        const data = await response.json();

        if (data.hits.length === 0) {
          toast.error('No images found', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          });
        } else {
          this.setState((prevState) => ({
            images: [...prevState.images, ...data.hits],
          }));
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }

      this.setState({ isLoading: false });
    }
  }

  handleImageClick = (webformatURL) => {
    this.setState({ selectedImage: webformatURL });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  handleSearchSubmit = (query) => {
    if (query.trim() === '') {
      toast.warn('Please enter a search keyword', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      return;
    }

    this.setState({ images: [], searchQuery: query, page: 1 });
  };

  handleLoadMoreClick = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  };

  handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  };

  handleSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleSearchSubmit(event.target.value);
    }
  };

 render() {
    const { images, isLoading, selectedImage } = this.state;

    return (
      <div className="container">
        <h1 className="heading">Image Finder App</h1>
        <div className="searchbar-container">
          <Searchbar onSubmit={this.handleSearchSubmit} onKeyDown={this.handleSearchKeyDown} />
        </div>
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMoreClick} isVisible={!isLoading} />
        )}
        {isLoading && <Loader />}
        {selectedImage && (
          <Modal
            src={selectedImage}
            alt="SelectedImg"
            onClose={this.closeModal}
            onKeyDown={this.handleKeyDown}
            onBackdropClick={this.handleBackdropClick}
          />
        )}
        <ToastContainer position="top-right" />
      </div>
    );
  }
}

export default App;