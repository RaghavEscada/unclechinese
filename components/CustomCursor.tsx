import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const coordsRef = useRef({ x: 0, y: 0 });
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const colors = [
      "#000000", "#111111", "#222222", "#333333", "#444444", "#555555",
      "#666666", "#777777", "#888888", "#999999", "#aaaaaa", "#bbbbbb",
      "#cccccc", "#dddddd", "#eeeeee", "#ffffff", "#ffffff", "#ffffff",
      "#ffffff", "#ffffff", "#ffffff", "#ffffff"
    ];

    // Initialize circle positions
    circlesRef.current.forEach((circle, index) => {
      if (circle) {
        circle.style.backgroundColor = colors[index % colors.length];
        (circle as any).x = 0;
        (circle as any).y = 0;
      }
    });

    const handleMouseMove = (e: MouseEvent) => {
      coordsRef.current.x = e.clientX;
      coordsRef.current.y = e.clientY;
    };

    const animateCircles = () => {
      let x = coordsRef.current.x;
      let y = coordsRef.current.y;

      circlesRef.current.forEach((circle, index) => {
        if (circle) {
          circle.style.left = x - 12 + "px";
          circle.style.top = y - 12 + "px";
          circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

          (circle as any).x = x;
          (circle as any).y = y;

          const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
          if (nextCircle) {
            x += ((nextCircle as any).x - x) * 0.3;
            y += ((nextCircle as any).y - y) * 0.3;
          }
        }
      });

      animationRef.current = requestAnimationFrame(animateCircles);
    };

    // Hide default cursor
    document.body.style.cursor = 'none';
    
    window.addEventListener("mousemove", handleMouseMove);
    animateCircles();

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Cursor circles */}
      {Array.from({ length: 20 }, (_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) circlesRef.current[index] = el;
          }}
          style={{
            height: '24px',
            width: '24px',
            borderRadius: '24px',
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 99999999,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;