import { useState, useEffect, useRef } from "react";

export default function AnimatedCounter({
  end = 20000,
  duration = 2000,
  label = "Guests Hosted",
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          hasAnimatedRef.current = false;
        } else {
          setIsVisible(false);
          setCount(0);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;
    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div ref={counterRef} style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            gap: "80px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Left side - Counter */}
          <div style={{ flex: "1 1 400px" }}>
            <h2
              style={{
                fontSize: "18px",
                marginBottom: "10px",
                color: "#fff",
              }}
            >
              Over
            </h2>
            <div
              style={{
                fontSize: "clamp(80px, 12vw, 40px)",
                fontWeight: 700,
                color: "#c8a24d",
                lineHeight: 1,
                marginBottom: "20px",
              }}
            >
              {formatNumber(count)}
              <span style={{ fontSize: "0.5em", marginLeft: "8px" }}>+</span>
            </div>
            <h3
              style={{
                fontSize: "24px",
                color: "#fff",
                marginBottom: "16px",
                fontWeight: 600,
              }}
            >
              {label}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
