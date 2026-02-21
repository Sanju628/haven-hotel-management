import { useState, useEffect, useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";

export default function IntentionPage() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#1a2420",
      }}
    >
      {/* Background Image with parallax */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          // backgroundImage: "url('/bg-crowd.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.3}px)`,
          zIndex: 0,
          filter: "brightness(0.45) saturate(0.7)",
        }}
      />

      {/* Green vertical lines overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          backgroundImage: `repeating-linear-gradient(
            to right,
            rgba(30, 60, 50, 0.55) 0px,
            rgba(30, 60, 50, 0.55) 2px,
            transparent 2px,
            transparent 18px
          )`,
        }}
      />

      {/* Noise overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          opacity: 0.12,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 3 }}>
        {/* Nav */}

        {/* Hero Text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 28px 40px",
            gap: "60px",
          }}
        >
          {/* Left - ALWAYS DESIGNED */}
          <div style={{ flex: 1, textAlign: "center" }}>
            <h1
              style={{
                color: "#fff",
                fontFamily: "'Koulen', sans-serif",
                fontSize: "clamp(60px, 10vw, 130px)",
                fontWeight: 900,
                lineHeight: 1,
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "-2px",
                transform: `translateY(${scrollY * -0.05}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              ALWAYS
              <br />
              DESIGNED
            </h1>
          </div>

          {/* Center - Chinese Characters */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0px",
            }}
          >
            {/* Top bracket */}
            <div
              style={{
                width: 60,
                height: 30,
                borderTop: "2px solid rgba(200,162,77,0.6)",
                borderLeft: "2px solid rgba(200,162,77,0.6)",
                borderRight: "2px solid rgba(200,162,77,0.6)",
                marginBottom: "8px",
              }}
            />
            <span
              style={{
                color: "#c8a24d",
                fontSize: "72px",
                lineHeight: 1.2,
                fontFamily: "serif",
                letterSpacing: "8px",
                textShadow: "0 0 30px rgba(200,162,77,0.3)",
              }}
            >
              हे
              <br />व<br />न
            </span>
            <div
              style={{
                width: 60,
                height: 30,
                borderBottom: "2px solid rgba(200,162,77,0.6)",
                borderLeft: "2px solid rgba(200,162,77,0.6)",
                borderRight: "2px solid rgba(200,162,77,0.6)",
                marginTop: "8px",
              }}
            />
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <h1
              style={{
                color: "#fff",
                fontFamily: "'Koulen', sans-serif",
                fontSize: "clamp(60px, 10vw, 130px)",
                fontWeight: 900,
                lineHeight: 1,
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "-2px",
                transform: `translateY(${scrollY * -0.05}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              FOR
              <br />
              MEMORIES
            </h1>
          </div>
        </div>
        {/* Subtitle */}
        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.45)",
            fontFamily: "monospace",
            fontSize: "16px",
            letterSpacing: "1.5px",
            marginTop: "120px",
            marginBottom: "40px",
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        >
          [Redefining Stays with Timeless Hospitality]
        </p>
        {/* Three Cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            padding: "0 28px 80px",
            flexWrap: "wrap",
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          {[
            {
              title: "Business Guests",
              desc: "Business travelers enjoy free high-speed Wi-Fi, a comfortable work desk and a quiet workspace to stay focused, plus convenient access to major office hubs for an effortless daily commute.",
            },
            {
              title: "Production Teams",
              desc: "When your production team is on location, we've got your back. Secure storage for equipment and props, plus a quiet lounge to relax and recharge after long, demanding days on set.",
            },
            {
              title: "Families & Leisure",
              desc: "Families enjoy spacious rooms to relax, unwind and spend quality time together. With family-friendly amenities and nearby attractions, everything you need for a memorable stay is right here.",
            },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 250px",
                maxWidth: 380,
                textAlign: "center",
                transform: `translateY(${scrollY * (0.05 + i * 0.02)}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontFamily: "'Arial Black', sans-serif",
                  fontSize: "15px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  margin: "12px 0 8px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.45)",
                  fontFamily: "monospace",
                  fontSize: "12px",
                  lineHeight: 1.8,
                  letterSpacing: "0.5px",
                  margin: 0,
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
