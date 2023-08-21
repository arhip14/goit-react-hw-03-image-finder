import React, { useState, useEffect } from 'react';
import Searchbar from './img-gallery/SearchBar/SearchBar';
import ImageGallery from './img-gallery/ImageGallery/ImagGallery';
import Button from './img-gallery/Button/Button';
import Loader from './img-gallery/Loader/Loader';
import Modal from './img-gallery/Modal/Modal';

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery === '') return;

    const fetchImages = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=38252879-889a9619e4dc8706c4a00f455&image_type=photo&orientation=horizontal&per_page=12`
        );
        const data = await response.json();
        setImages(prevImages => [...prevImages, ...data.hits]);
      } catch (error) {
        console.error('Error fetching images:', error);
      }

      setIsLoading(false);
    };

    fetchImages();
  }, [searchQuery, page]);

  const handleImageClick = (webformatURL) => {
    setSelectedImage(webformatURL);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleSearchSubmit = (query) => {
    setImages([]);
    setSearchQuery(query);
    setPage(1);
  };

  const handleLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearchSubmit(event.target.value);
    }
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} onKeyDown={handleSearchKeyDown} />
      <ImageGallery images={images} onItemClick={handleImageClick} />
      <Button onClick={handleLoadMoreClick} isVisible={images.length > 0 && !isLoading} />
      {isLoading && <Loader />}
      {selectedImage && (
        <Modal
          src={selectedImage}
          alt="SelectedImg"
          onClose={closeModal}
          onKeyDown={handleKeyDown}
          onBackdropClick={handleBackdropClick}
        />
      )}
    </div>
  );
};

export default App;
