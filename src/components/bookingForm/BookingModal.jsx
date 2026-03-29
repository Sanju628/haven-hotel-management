import React, { useEffect, useState } from "react";
import BookingForm from "./BookingForm";

export default function BookingModal({ openBookingModal = false }) {
  const [open, setOpen] = useState(false || openBookingModal);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {!openBookingModal && (
        <div className="button-text">
          <button onClick={() => setOpen(true)}>Book Now</button>
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{
            background: "rgba(0,0,0,0.80)",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <BookingForm onClose={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
