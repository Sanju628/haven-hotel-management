import { useState, useEffect, useCallback, useRef } from "react";

export default function CursorFollower() {
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const animate = useCallback(() => {
    setDot((prev) => ({
      x: prev.x + (mouseRef.current.x - prev.x) * 0.08,
      y: prev.y + (mouseRef.current.y - prev.y) * 0.08,
    }));
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [animate]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: dot.x,
        top: dot.y,
        width: 12,
        height: 12,
        background: "#ffffff",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 99999,
        transform: `translate(-50%, -50%) scale(${isClicking ? 0.6 : 1})`,
        transition: "transform 0.15s ease",
        mixBlendMode: "difference",
      }}
    />
  );
}
