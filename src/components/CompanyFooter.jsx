import React from "react";

export default function HavelHotelFooter() {
  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=Haven+Hotel+Sector+31+Gurugram",
      "_blank"
    );
  };

  const landmarks = [
    { name: "Shri Mata Sheetla Devi Mandir", distance: "4.5 km" },
    { name: "Huda City Center Metro", distance: "4.8 km" },
    { name: "Leisure Valley Park", distance: "6 km" },
    { name: "Cyber Hub", distance: "9.3 km" },
  ];

  const attractions = [
    { name: "Oyster's Water Park", distance: "5 km" },
    { name: "Yashobhoomi Convention Center", distance: "18.2 km" },
  ];

  const transport = [
    { name: "Huda City Center Metro", distance: "4.8 km" },
    { name: "M.G. Road Metro Station", distance: "6.2 km" },
    { name: "IFFCO Chowk Metro Station", distance: "6.8 km" },
    { name: "Indira Gandhi International Airport", distance: "17.2 km" },
    { name: "T3 - Delhi Airport (IGI)", distance: "17.6 km" },
    { name: "T2 - Delhi Airport (IGI Airport)", distance: "18.2 km" },
    { name: "T1 - Delhi Airport (IGI Airport)", distance: "19.2 km" },
    { name: "Neverenuf Garden Railway", distance: "29.5 km" },
  ];

  return (
    <footer
      style={{
        color: "#fff",
        padding: "60px 20px 150px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div>
          <p
            style={{
              fontSize: "14px",
              marginBottom: "32px",
              color: "#2D3D26",
            }}
          >
            Haven Hotel is a premium boutique hotel in Gurgaon located in Sector
            31, offering stylish rooms, modern amenities and personalized
            hospitality for business and leisure travelers. The hotel enjoys a
            strategic location near major business hubs such as Cyber City,
            Udyog Vihar, Sector 44 corporate offices and Golf Course Road, with
            easy access to NH-48 and HUDA City Centre Metro Station. Prime
            attractions like Ambience Mall and popular commercial zones are just
            a short drive away. Haven Hotel is also conveniently close to
            leading hospitals including Medanta - The Medicity, Fortis Memorial
            Research Institute, and Artemis Hospital, making it a preferred
            choice for guests searching for the best hotel in Gurgaon with
            comfort, connectivity, and convenience in one place.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "20px",
                marginBottom: "20px",
                color: "#2D3D26",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ fontSize: "24px" }}>📞</span> Contact Us
            </h3>
            <div style={{ fontSize: "14px", lineHeight: "1.8" }}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginBottom: "15px",
                  color: "#2D3D26",
                }}
              >
                Haven Hotel
              </p>
              <p
                style={{
                  display: "flex",
                  gap: "10px",
                  marginBottom: "12px",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: "#ffd700", fontSize: "18px" }}>📍</span>
                <span style={{ color: "#000" }}>
                  Plot No. 145, Sector 31 - 32A, Sector 31, Gurugram, Haryana
                  122001, India
                </span>
              </p>
              <p
                style={{
                  display: "flex",
                  gap: "10px",
                  marginBottom: "12px",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#ffd700", fontSize: "18px" }}>☎️</span>
                <a
                  href="tel:+097175 16077"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  097175 16077
                </a>
              </p>
              <p
                style={{
                  display: "flex",
                  gap: "10px",
                  marginBottom: "12px",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#000", fontSize: "18px" }}>✉️</span>
                <a
                  href="mailto:info@havelhotel.com"
                  style={{ color: "#000", textDecoration: "none" }}
                >
                  havenhotel145@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3
              style={{
                fontSize: "20px",
                marginBottom: "20px",
                color: "#2D3D26",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ fontSize: "24px" }}>🏛️</span> Key Landmarks
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {landmarks.map((landmark, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: "12px",
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#000",
                    fontSize: "14px",
                  }}
                >
                  <span>• {landmark.name}</span>
                  <span style={{ color: "#999", fontSize: "13px" }}>
                    {landmark.distance}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3
              style={{
                fontSize: "20px",
                marginBottom: "20px",
                color: "#2D3D26",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ fontSize: "24px" }}>🎯</span> Key Attractions
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {attractions.map((attraction, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: "12px",
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#000",
                    fontSize: "14px",
                  }}
                >
                  <span>• {attraction.name}</span>
                  <span style={{ color: "#999", fontSize: "13px" }}>
                    {attraction.distance}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3
              style={{
                fontSize: "20px",
                marginBottom: "20px",
                color: "#2D3D26",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ fontSize: "24px" }}>🚇</span> Transport
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {transport.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: "12px",
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#000",
                    fontSize: "14px",
                  }}
                >
                  <span>• {item.name}</span>
                  <span style={{ color: "#999", fontSize: "13px" }}>
                    {item.distance}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              flexWrap: "wrap",
              // marginBottom: "16px",
            }}
          >
            <span style={{ color: "#999", fontWeight: "500" }}>
              Social Connects:
            </span>
            <div style={{ display: "flex" }}>
              <a
                href="https://facebook.com/havelhotel"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "60px",
                  height: "60px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <img src="/Social/facebook.png" alt="Facebook" />
              </a>
              <a
                href="https://instagram.com/havelhotel"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "60px",
                  height: "60px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <img src="/Social/instagram.png" alt="Instagram" />
              </a>
              <a
                href="https://linkedin.com/company/havelhotel"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "60px",
                  height: "60px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <img src="/Social/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              position: "relative",
              borderRadius: "10px",
              overflow: "hidden",
              height: "350px",
              background: "#333",
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=Haven+Hotel+Sector+31+Gurugram&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Haven Hotel Location Map"
            />
            <button
              onClick={openGoogleMaps}
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                background: "#c8a24d",
                color: "#ffffff",
                padding: "12px 24px",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "14px",
                boxShadow: "0 4px 15px rgba(255, 215, 0, 0.3)",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#d8b765";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "#c8a24d";
                e.target.style.transform = "scale(1)";
              }}
            >
              🧭 Get Directions
            </button>
          </div>
        </div>

        {/* Social Media & Copyright */}

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "30px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div
              style={{ color: "#999", fontSize: "14px", textAlign: "center" }}
            >
              <p>© 2026 Haven Hotel. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
