"use client";
import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const mouseCoords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Disable custom cursor on mobile touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = !!(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer'
      );
      setHovered(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Initial position in center of window
    ringCoords.current.x = window.innerWidth / 2;
    ringCoords.current.y = window.innerHeight / 2;

    let animationFrameId: number;
    const updatePosition = () => {
      const { x: mx, y: my } = mouseCoords.current;
      
      // Smooth lerp physics
      ringCoords.current.x += (mx - ringCoords.current.x) * 0.22;
      ringCoords.current.y += (my - ringCoords.current.y) * 0.22;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringCoords.current.x}px, ${ringCoords.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer Ring with Lerp Follower */}
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-[width,height,background-color,border-color] duration-200 ease-out"
        style={{
          width: hovered ? '48px' : '26px',
          height: hovered ? '48px' : '26px',
          borderColor: '#4A72EB',
          borderWidth: '2px',
          borderStyle: 'solid',
          backgroundColor: hovered ? 'rgba(74, 114, 235, 0.15)' : 'transparent',
          boxShadow: '0 0 10px rgba(74, 114, 235, 0.25)',
          opacity: visible ? 1 : 0,
          transform: 'translate3d(-50%, -50%, 0)',
          willChange: 'transform'
        }}
      />
      {/* Inner Dot following cursor instantly */}
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#2196E8] rounded-full pointer-events-none z-[9999] transition-[opacity] duration-250 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: 'translate3d(-50%, -50%, 0)',
          willChange: 'transform'
        }}
      />
    </>
  );
}
