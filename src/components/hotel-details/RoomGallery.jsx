import { useState } from "react";

export default function RoomGallery({ images }) {
  const [open, setOpen] = useState(false);

  const visibleImages = images.slice(0, 5);
  const remaining = images.length - 5;

  return (
    <>
      {/* Thumbnail Grid */}
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
            onClick={() => setOpen(true)}
          >
            <img
              src={img}
              alt=""
              style={{
                width: "100%",
                height: "192px",
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
                  fontSize: "20px",
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

      {/* Full Gallery Modal */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 50,
            overflowY: "auto",
          }}
        >
          <button
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: "16px",
              right: "24px",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px",
              padding: "24px",
            }}
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                style={{
                  width: "100%",
                  height: "256px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
