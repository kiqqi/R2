import { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const images = ['img1.jpg', 'img2.jpg', 'img3.jpg']; 
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-container">
      <img className="gallery-image" src={images[currentIndex]} alt={`Imagen ${currentIndex}`} />
      <div className="gallery-buttons">
        <button onClick={handlePrev}>Anterior</button>
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
};

export default ImageGallery;
