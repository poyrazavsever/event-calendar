// components/CustomCursor.js
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
    />
  );
};

export default CustomCursor;
