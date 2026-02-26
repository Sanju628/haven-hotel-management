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
    <div ref={counterRef} className="py-8 px-5 md:py-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-20 items-start flex-wrap">
          <div className="flex-[1_1_400px]">
            <h2 className="text-lg mb-2.5 text-white">Over</h2>
            <div className="text-[clamp(40px,12vw,40px)] md:text-[clamp(50px,12vw,40px)] lg:text-[clamp(70px,12vw,40px)] font-bold text-[#c8a24d] leading-none mb-5">
              {formatNumber(count)}
              <span className="text-[0.5em] ml-2">+</span>
            </div>
            <h3 className="text-2xl sm:text-xl md:text-xl text-white mb-4 font-semibold">
              {label}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
