import React, { useState, useEffect } from "react";

export default function ImageCarousel({ images }) {
  const imageArray = Array.isArray(images) ? images : [images];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch devices (mobile + iPad)
  useEffect(() => {
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touch);
  }, []);

  // Autoplay logic
  useEffect(() => {
    if (imageArray.length <= 1) return;

    // Touch devices → autoplay
    // Desktop → autoplay only on hover
    if (!isTouchDevice && !isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === imageArray.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [imageArray.length, isHovered, isTouchDevice]);

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? imageArray.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === imageArray.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index, e) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      {imageArray.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`carousel-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}

      {/* Controls */}
      {imageArray.length > 1 && (
        <>
          <button className="carousel-arrow prev" onClick={goToPrevious}>
            ‹
          </button>
          <button className="carousel-arrow next" onClick={goToNext}>
            ›
          </button>

          <div className="carousel-dots">
            {imageArray.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={(e) => goToSlide(index, e)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
