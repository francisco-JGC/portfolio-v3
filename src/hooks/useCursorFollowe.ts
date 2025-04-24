import { useState, useRef, useCallback } from "react";

export const useCursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const parentRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const parent = parentRef.current;
    if (!parent) return;

    const rect = parent.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({
      x: Math.min(Math.max(x, 0), rect.width),
      y: Math.min(Math.max(y, 0), rect.height),
    });
  }, []);

  return { parentRef, position, onMouseMove };
};
