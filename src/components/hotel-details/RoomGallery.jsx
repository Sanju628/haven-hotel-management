import { useState } from "react";

export default function RoomGallery({ images }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleImages = images.slice(0, 5);
  const remaining = images.length - 5;

  const openModal = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "8px",
          width: "100%",
        }}
      >
        {visibleImages.map((img, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => openModal(index)}
          >
            <img
              src={img}
              alt=""
              style={{
                width: "100%",
                height: "190px",
                objectFit: "cover",
                borderRadius: "8px",
                display: "block",
              }}
            />

            {index === 4 && remaining > 0 && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  borderRadius: "8px",
                }}
              >
                +{remaining} more
              </div>
            )}
          </div>
        ))}
      </div>
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              fontSize: "28px",
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
          <button
            onClick={goPrev}
            style={{
              position: "absolute",
              left: "30px",
              fontSize: "40px",
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ‹
          </button>
          <img
            src={images[currentIndex]}
            alt=""
            style={{
              maxWidth: "90%",
              maxHeight: "80vh",
              borderRadius: "12px",
              objectFit: "contain",
            }}
          />
          <button
            onClick={goNext}
            style={{
              position: "absolute",
              right: "30px",
              fontSize: "40px",
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ›
          </button>
          <div
            style={{
              position: "absolute",
              bottom: "30px",
              color: "#fff",
              fontSize: "16px",
            }}
          >
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
