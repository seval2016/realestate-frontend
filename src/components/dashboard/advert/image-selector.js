"use client"
import React, { useState } from 'react';
import { FaPlus, FaTrash, FaStar } from 'react-icons/fa';
import "./image-selector.scss";


const ImageSelector = ({ images }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [featuredImage, setFeaturedImage] = useState(null);

  // Resim seçme/deselect etme işlemi
  const toggleSelectImage = (imageUrl) => {
    if (selectedImages.includes(imageUrl)) {
      setSelectedImages(selectedImages.filter(img => img !== imageUrl)); // Seçiliyse çıkar
    } else {
      setSelectedImages([...selectedImages, imageUrl]); // Seçili değilse ekle
    }
  };

  // Seçilen resimleri sil
  const deleteSelectedImages = () => {
    const remainingImages = images.filter(img => !selectedImages.includes(img));
    setSelectedImages([]); // Seçili resimleri temizle
    console.log('Deleted images:', selectedImages);
    // Burada images state'ini güncelleyin (örneğin, parent component'ten gelen bir updateImages fonksiyonunu çağırabilirsiniz)
  };

  // Resmi öne çıkar
  const setAsFeatured = (imageUrl) => {
    setFeaturedImage(imageUrl);
    console.log('Featured image:', imageUrl);
  };

  return (
    <div className="image-selector-container">
      <div className="image-grid">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`image-container ${selectedImages.includes(imageUrl) ? 'selected' : ''}`}
            onClick={() => toggleSelectImage(imageUrl)}
          >
            <img src={imageUrl} alt={`Image ${index + 1}`} className="image" />
            {imageUrl === featuredImage && <FaStar className="featured-icon" />} {/* Öne çıkan resme yıldız ekle */}
          </div>
        ))}
      </div>
      
      <div className="action-buttons">
        <button className="delete-btn" onClick={deleteSelectedImages}>
          <FaTrash /> Delete
        </button>
        {selectedImages.length === 1 && (
          <button className="set-featured-btn" onClick={() => setAsFeatured(selectedImages[0])}>
            <FaStar /> Set as Featured
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageSelector;
