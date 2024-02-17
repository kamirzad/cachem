// components/ImageGallery.js
"use client"
import { useState } from 'react';

const ImageGallery = () => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="image-wrapper">
          {!loaded && <div className="loader"></div>}
          <img
            src={`https://via.placeholder.com/300x200.png?text=Image${index + 1}`}
            alt={`Image ${index + 1}`}
            onLoad={handleImageLoad}
            className={loaded ? 'loaded' : ''}
          />
        </div>
      ))}
      <style jsx>{`
        .image-wrapper {
          position: relative;
          margin-bottom: 20px;
        }
        .loader {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img {
          display: block;
          width: 100%;
          height: auto;
          transition: filter 0.5s ease;
        }
        img.loaded {
          filter: blur(0);
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
