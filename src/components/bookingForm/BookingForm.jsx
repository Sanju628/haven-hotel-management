import { useState } from "react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScw_7BpO1R83sMybdZBzU-3-1u7o42NFJ5zXbJ3T7dIAXd00A/formResponse";

const ENTRY_IDS = {
  startDate_year: "entry.106403316_year",
  startDate_month: "entry.106403316_month",
  startDate_day: "entry.106403316_day",
  endDate_year: "entry.2089898373_year",
  endDate_month: "entry.2089898373_month",
  endDate_day: "entry.2089898373_day",
  rooms: "entry.416078747",
  adults: "entry.1947568618",
  children: "entry.1458171955",
  name: "entry.1277403922",
  phone: "entry.895858713",
};

export default function BookingForm({ onClose }) {
  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
    rooms: 1,
    adults: 1,
    children: 0,
    name: "",
    phone: "",
  });
  const [status, setStatus] = useState("idle");
  const [touched, setTouched] = useState({ name: false, phone: false });

  const today = new Date().toISOString().split("T")[0];

  const handleBlur = (e) => {
    const { name } = e.target;
    if (name === "name" || name === "phone") {
      setTouched((prev) => ({ ...prev, [name]: true }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const [startYear, startMonth, startDay] = form.startDate.split("-");
    const [endYear, endMonth, endDay] = form.endDate.split("-");

    const params = new URLSearchParams({
      [ENTRY_IDS.startDate_year]: startYear,
      [ENTRY_IDS.startDate_month]: startMonth,
      [ENTRY_IDS.startDate_day]: startDay,
      [ENTRY_IDS.endDate_year]: endYear,
      [ENTRY_IDS.endDate_month]: endMonth,
      [ENTRY_IDS.endDate_day]: endDay,
      [ENTRY_IDS.rooms]: form.rooms,
      [ENTRY_IDS.adults]: form.adults,
      [ENTRY_IDS.children]: form.children,
      [ENTRY_IDS.name]: form.name,
      [ENTRY_IDS.phone]: form.phone,
    });

    try {
      await fetch(`${GOOGLE_FORM_URL}?${params.toString()}`, {
        method: "POST",
        mode: "no-cors",
      });
      setStatus("success");
      setForm({
        startDate: "",
        endDate: "",
        rooms: 1,
        adults: 1,
        children: 0,
        name: "",
        phone: "",
      });
      setTouched({ name: false, phone: false });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Koulen&family=Roboto+Mono:wght@300;400;500&display=swap');

        .booking-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 16px;
          font-family: 'Roboto Mono', monospace;
        }

        .booking-card {
          width: 100%;
          max-width: 580px;
          background: #111a15;
          border: 1px solid rgba(200,162,77,0.2);
          border-radius: 4px;
          padding: 48px 40px;
          position: relative;
        }

        .booking-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #c8a24d, #ecc378, #c8a24d);
        }

        .corner { position: absolute; width: 18px; height: 18px; }
        .corner-tl { top: 12px; left: 12px; border-top: 1px solid rgba(200,162,77,0.5); border-left: 1px solid rgba(200,162,77,0.5); }
        .corner-tr { top: 12px; right: 12px; border-top: 1px solid rgba(200,162,77,0.5); border-right: 1px solid rgba(200,162,77,0.5); }
        .corner-bl { bottom: 12px; left: 12px; border-bottom: 1px solid rgba(200,162,77,0.5); border-left: 1px solid rgba(200,162,77,0.5); }
        .corner-br { bottom: 12px; right: 12px; border-bottom: 1px solid rgba(200,162,77,0.5); border-right: 1px solid rgba(200,162,77,0.5); }

        .close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(200,162,77,0.1);
          border: 1px solid rgba(200,162,77,0.35);
          color: #c8a24d;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 10;
        }

        .close-btn:hover {
          background: rgba(200,162,77,0.25);
        }

        .booking-label {
          font-size: 9px; letter-spacing: 3px; text-transform: uppercase;
          color: rgba(200,162,77,0.7); margin-bottom: 28px; display: block;
        }

        .booking-title {
          font-family: 'Koulen', sans-serif; font-size: 52px; color: #fff;
          line-height: 1; margin: 0 0 8px; letter-spacing: -1px;
        }

        .booking-subtitle {
          font-size: 10px; letter-spacing: 2px;
          color: rgba(255,255,255,0.3); margin-bottom: 40px;
        }

        .field-group { margin-bottom: 24px; }

        .field-label {
          display: block; font-size: 9px; letter-spacing: 2.5px;
          text-transform: uppercase; color: rgba(200,162,77,0.6); margin-bottom: 8px;
        }

        .field-label .required-star {
          color: #e07a7a;
          margin-left: 3px;
        }

        .field-input {
          width: 100%; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1); border-radius: 2px;
          color: #fff; font-family: 'Roboto Mono', monospace; font-size: 13px;
          padding: 12px 14px; outline: none;
          transition: border-color 0.2s, background 0.2s;
          box-sizing: border-box; appearance: none; -webkit-appearance: none;
        }

        .field-input:focus {
          border-color: rgba(200,162,77,0.5);
          background: rgba(200,162,77,0.04);
        }

        .field-input::placeholder {
          color: rgba(255,255,255,0.18);
          font-size: 12px;
        }

        .field-input::-webkit-calendar-picker-indicator {
          filter: invert(0.6) sepia(1) saturate(2) hue-rotate(5deg); cursor: pointer;
        }

        .field-error {
          margin-top: 6px;
          font-size: 9px;
          letter-spacing: 1.5px;
          color: #e07a7a;
        }

        .field-input.input-error {
          border-color: rgba(224, 122, 122, 0.5);
          background: rgba(224, 122, 122, 0.04);
        }

        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .field-row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }

        .btn-book {
          width: 100%; margin-top: 36px; padding: 16px;
          background: linear-gradient(135deg, #c8a24d, #ecc378);
          border: none; border-radius: 2px; color: #111a15;
          font-family: 'Roboto Mono', monospace; font-size: 11px;
          font-weight: 700; letter-spacing: 4px; text-transform: uppercase;
          cursor: pointer; transition: opacity 0.2s, transform 0.15s;
        }

        .btn-book:hover { opacity: 0.9; transform: translateY(-1px); }
        .btn-book:active { transform: translateY(0); }
        .btn-book:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

        .status-msg {
          margin-top: 20px; padding: 12px 16px; border-radius: 2px;
          font-size: 11px; letter-spacing: 1px; text-align: center;
        }

        .status-success {
          background: rgba(100,200,100,0.08);
          border: 1px solid rgba(100,200,100,0.25); color: #7dca7d;
        }

        .status-error {
          background: rgba(200,80,80,0.08);
          border: 1px solid rgba(200,80,80,0.25); color: #e07a7a;
        }

        @media (max-width: 480px) {
          .booking-card { padding: 36px 20px; margin-top: 20px; }
          .booking-title { font-size: 40px; }
          .field-row-3 { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="booking-wrap">
        <div className="booking-card">
          <span className="corner corner-tl" />
          <span className="corner corner-tr" />
          <span className="corner corner-bl" />
          <span className="corner corner-br" />

          {onClose && (
            <button className="close-btn" onClick={onClose} aria-label="Close">
              ✕
            </button>
          )}

          <span className="booking-label">Haven Hotel & Suites</span>
          <h2 className="booking-title">
            RESERVE
            <br />
            YOUR STAY
          </h2>
          <p className="booking-subtitle">
            [ COMPLETE THE FORM BELOW TO SECURE YOUR ROOM ]
          </p>
          <form onSubmit={handleSubmit}>
            <div className="field-row">
              <div className="field-group">
                <label className="field-label">
                  Full Name <span className="required-star">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className={`field-input${
                    touched.name && !form.name ? " input-error" : ""
                  }`}
                  value={form.name}
                  placeholder="Enter your name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {touched.name && !form.name && (
                  <p className="field-error">⚠ Full name is required</p>
                )}
              </div>
              <div className="field-group">
                <label className="field-label">
                  Phone Number <span className="required-star">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className={`field-input${
                    touched.phone && !form.phone ? " input-error" : ""
                  }`}
                  value={form.phone}
                  placeholder="Enter your mobile number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={10}
                  required
                />
                {touched.phone && !form.phone && (
                  <p className="field-error">⚠ Phone number is required</p>
                )}
              </div>
            </div>
            <div className="field-row">
              <div className="field-group">
                <label className="field-label">Check-In Date</label>
                <input
                  type="date"
                  name="startDate"
                  className="field-input"
                  value={form.startDate}
                  min={today}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field-group">
                <label className="field-label">Check-Out Date</label>
                <input
                  type="date"
                  name="endDate"
                  className="field-input"
                  value={form.endDate}
                  min={form.startDate || today}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Rooms / Guests Row */}
            <div className="field-row-3">
              <div className="field-group">
                <label className="field-label">Rooms</label>
                <input
                  type="number"
                  name="rooms"
                  className="field-input"
                  value={form.rooms}
                  min={1}
                  max={10}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field-group">
                <label className="field-label">Adults</label>
                <input
                  type="number"
                  name="adults"
                  className="field-input"
                  value={form.adults}
                  min={1}
                  max={20}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field-group">
                <label className="field-label">Children</label>
                <input
                  type="number"
                  name="children"
                  className="field-input"
                  value={form.children}
                  min={0}
                  max={10}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-book"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Book Now →"}
            </button>
          </form>

          {status === "success" && (
            <div className="status-msg status-success">
              ✓ Booking request received. We'll confirm shortly.
            </div>
          )}
          {status === "error" && (
            <div className="status-msg status-error">
              ✗ Something went wrong. Please try again.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
