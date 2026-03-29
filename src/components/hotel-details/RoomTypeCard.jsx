import { useState } from "react";
import BookingModal from "../bookingForm/BookingModal";

export default function RoomTypeCard({ data }) {
  const [open, setOpen] = useState(false);
  const [openBookingModal, setOpenBookingModal] = useState(false);

  return (
    <>
      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          background: "#fff",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "8px",
          }}
        >
          {data.title}
        </h3>

        <ul
          style={{
            fontSize: "14px",
            color: "#4b5563",
            marginBottom: "12px",
            paddingLeft: 0,
            listStyle: "none",
          }}
        >
          {data.amenities.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: "700",
            }}
          >
            ₹{data.price}
          </p>

          <span
            style={{
              fontSize: "13px",
              color: "#6b7280",
            }}
          >
            + ₹{data.taxPerNight}/night
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <button
            onClick={() => setOpen(true)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              fontSize: "14px",
              textDecoration: "underline",
              cursor: "pointer",
              color: "#000",
            }}
          >
            View Details
          </button>
          <button
            onClick={() => setOpenBookingModal(true)}
            style={{
              marginLeft: "auto",
              background: "#000",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Book Now
          </button>
        </div>
      </div>
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              width: "100%",
              maxWidth: "720px",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "16px",
              padding: "24px",
              position: "relative",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                right: "16px",
                top: "16px",
                fontSize: "18px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            {data.viewDetails.map((section, i) => (
              <div key={i} style={{ marginBottom: "20px" }}>
                <h4
                  style={{
                    fontWeight: "600",
                    marginBottom: "8px",
                  }}
                >
                  {section.title}
                </h4>

                {section.inclusionsData &&
                  section.inclusionsData.map((inc, j) => (
                    <p
                      key={j}
                      style={{
                        fontSize: "14px",
                        marginBottom: "6px",
                        color: "#374151",
                      }}
                    >
                      <strong>{inc.title}:</strong> {inc.description}
                    </p>
                  ))}

                {section.cancellationPolicy &&
                  section.cancellationPolicy.map((policy, j) => (
                    <p
                      key={j}
                      style={{
                        fontSize: "14px",
                        marginBottom: "6px",
                        color: "#374151",
                      }}
                    >
                      • {policy}
                    </p>
                  ))}
              </div>
            ))}
          </div>
        </div>
      )}
      {openBookingModal && <BookingModal openBookingModal={openBookingModal} />}
    </>
  );
}
