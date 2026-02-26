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
      className="min-h-screen relative overflow-hidden bg-[#1a2420]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0 brightness-[0.45] saturate-[0.7]"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            to right,
            rgba(30, 60, 50, 0.55) 0px,
            rgba(30, 60, 50, 0.55) 2px,
            transparent 2px,
            transparent 18px
          )`,
        }}
      />
      <div className="absolute inset-0 z-[2] opacity-[0.12] pointer-events-none" />
      <div className="relative z-[3]">
        <div className="flex flex-col xl:flex-row items-center justify-center px-7 pt-[60px] pb-10 gap-[60px]">
          <div className="flex-1 text-center">
            <h1
              className="text-white font-black leading-none m-0 uppercase tracking-[-2px]"
              style={{
                fontFamily: "'Koulen', sans-serif",
                fontSize: "clamp(60px, 10vw, 130px)",
                transform: `translateY(${scrollY * -0.05}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              ALWAYS
              <br />
              DESIGNED
            </h1>
          </div>
          <div className="flex flex-col items-center gap-0">
            <div className="w-[60px] h-[30px] border-t-2 border-l-2 border-r-2 border-[rgba(200,162,77,0.6)] mb-2" />
            <span
              className="text-[#c8a24d] text-[72px] leading-[1.2] tracking-[8px]"
              style={{
                fontFamily: "serif",
                textShadow: "0 0 30px rgba(200,162,77,0.3)",
              }}
            >
              हे
              <br />व<br />न
            </span>
            <div className="w-[60px] h-[30px] border-b-2 border-l-2 border-r-2 border-[rgba(200,162,77,0.6)] mt-2" />
          </div>
          <div className="flex-1 text-center">
            <h1
              className="text-white font-black leading-none m-0 uppercase tracking-[-2px]"
              style={{
                fontFamily: "'Koulen', sans-serif",
                fontSize: "clamp(60px, 10vw, 130px)",
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
        <p
          className="text-center text-[rgba(255,255,255,0.45)] font-mono text-base tracking-[1.5px] mt-[120px] mb-10"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        >
          [Redefining Stays with Timeless Hospitality]
        </p>
        <div
          className="flex flex-col items-center justify-center xl:flex-row gap-10 px-7 pb-20 flex-wrap"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
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
              className="w-full xl:flex-[1_1_250px] xl:max-w-[380px] text-center"
              style={{
                transform: `translateY(${scrollY * (0.05 + i * 0.02)}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <h3
                className="text-white text-[15px] font-bold tracking-[3px] uppercase mt-3 mb-2"
                style={{ fontFamily: "'Arial Black', sans-serif" }}
              >
                {card.title}
              </h3>
              <p className="text-[rgba(255,255,255,0.45)] font-mono text-xs leading-[1.8] tracking-[0.5px] m-0">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
