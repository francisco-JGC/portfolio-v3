import { useState, useEffect, useRef } from "react";

export const useMouseBlurEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const blur = blurRef.current;

    if (!container || !blur) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      blur.style.transform = `translate(${x - 100}px, ${y - 100}px)`;
    };

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", show);
    container.addEventListener("mouseleave", hide);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", show);
      container.removeEventListener("mouseleave", hide);
    };
  }, []);

  return { containerRef, blurRef, visible };
};
