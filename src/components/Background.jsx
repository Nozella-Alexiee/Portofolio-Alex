import React, { useEffect, useRef } from "react";

const Background = () => {
  const blobRefs = useRef([]);
  const initialPositions = [
    { x: -4, y: 0 },
    { x: -4, y: 0 },
    { x: 20, y: -8 },
    { x: 20, y: -8 },
  ];

  useEffect(() => {
    let currentScroll = 0;
    let requestId;

    const handleScroll = () => {
      const newScroll = window.pageYOffset;
      currentScroll = newScroll;

      blobRefs.current.forEach((blob, index) => {
        if (!blob) return;
        const initialPos = initialPositions[index];
        const xOffset = Math.sin(newScroll / 120 + index * 0.6) * 180;
        const yOffset = Math.cos(newScroll / 120 + index * 0.6) * 35;

        const x = initialPos.x + xOffset;
        const y = initialPos.y + yOffset;

        blob.style.transform = `translate(${x}px, ${y}px)`;
        blob.style.transition = "transform 1.4s ease-out";
      });

      requestId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-[#030014]" />

      {/* Floating Ambient Glowing Blobs - Dominant Electric Blue & Cyan */}
      <div className="absolute inset-0">
        {/* Top Left - Electric Blue */}
        <div
          ref={(ref) => (blobRefs.current[0] = ref)}
          className="absolute top-0 -left-10 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-blue-600/25 rounded-full filter blur-[120px] mix-blend-screen"
        />

        {/* Top Right - Cyan Glow */}
        <div
          ref={(ref) => (blobRefs.current[1] = ref)}
          className="absolute top-10 -right-10 w-72 sm:w-[440px] h-72 sm:h-[440px] bg-cyan-500/20 rounded-full filter blur-[130px] mix-blend-screen hidden sm:block"
        />

        {/* Mid/Bottom Left - Deep Royal Indigo/Blue */}
        <div
          ref={(ref) => (blobRefs.current[2] = ref)}
          className="absolute top-[45%] -left-20 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-blue-700/20 rounded-full filter blur-[140px] mix-blend-screen"
        />

        {/* Bottom Right - Sky Blue */}
        <div
          ref={(ref) => (blobRefs.current[3] = ref)}
          className="absolute bottom-10 right-0 w-80 sm:w-[460px] h-80 sm:h-[460px] bg-sky-500/20 rounded-full filter blur-[130px] mix-blend-screen hidden sm:block"
        />
      </div>

      {/* Subtle Architectural Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  );
};

export default Background;
