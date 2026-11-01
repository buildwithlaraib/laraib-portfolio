import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable if device uses a fine mouse pointer
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const updateMedia = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
    mediaQuery.addEventListener('change', updateMedia);

    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('cursor-pointer');
        setIsPointer(!!isClickable);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', updateMedia);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isFinePointer) return null;

  return (
    <>
      {/* Central dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-sky-400 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 shadow-sm shadow-sky-400"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${isPointer ? 1.5 : 1})`,
        }}
      />
      {/* Surrounding ambient ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-sky-400/40 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px) scale(${isPointer ? 1.35 : 1})`,
          backgroundColor: isPointer ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
        }}
      />
    </>
  );
};
