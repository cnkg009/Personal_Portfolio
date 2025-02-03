import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const ScrollWrapper = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // The smoothness of the scroll (0.1 is fairly smooth)
      smoothWheel: true, // Enable smooth scrolling on wheel events
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up when component unmounts
    };
  }, []);

  return (
    <div ref={scrollRef}>
      {children}
    </div>
  );
};

export default ScrollWrapper;
