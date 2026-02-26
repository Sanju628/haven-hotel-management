import { useState } from "react";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        {!open && (
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 998,
          }}
        />
      )}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "280px",
          backgroundColor: "rgba(52, 70, 45, 0.95)",
          boxShadow: "-4px 0 10px rgba(0,0,0,0.2)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
          zIndex: 999,
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 16px",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "18px", letterSpacing: "1px" }}>
            Menu
          </h3>
          <button
            onClick={() => setOpen(false)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        />
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          <li style={linkStyle}>
            <a href="/">Home</a>
          </li>
          <li style={linkStyle}>
            <a href="/rooms">Rooms</a>
          </li>
          <li style={linkStyle}>
            <a href="#">Gallery</a>
          </li>
          <li style={linkStyle}>
            <a href="#contact">Contact Us</a>
          </li>
          <li style={linkStyle}>
            <a href="/about">About Us</a>
          </li>
        </ul>
      </div>
    </>
  );
}

const linkStyle = {
  padding: "14px",
  cursor: "pointer",
  fontSize: "16px",
  borderBottom: "1px solid rgba(255,255,255,0.15)",
};
