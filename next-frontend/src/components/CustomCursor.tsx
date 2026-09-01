"use client";
import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isCoarse, setIsCoarse] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const hasMoved = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect touch / coarse pointer devices
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsCoarse(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!hasMoved.current) {
        hasMoved.current = true;
        // Snap ring directly to initial mouse location to avoid flying across screen
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
        setIsVisible(true);
      } else if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      ringPos.current.x = e.clientX;
      ringPos.current.y = e.clientY;
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = !!(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer') ||
        (typeof window.getComputedStyle === 'function' && window.getComputedStyle(target).cursor === 'pointer')
      );

      setIsHovered(interactive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    let animationFrameId: number;
    const renderLoop = () => {
      // Fluid lerp physics for outer ring
      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;
      
      ringPos.current.x += dx * 0.18;
      ringPos.current.y += dy * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isCoarse) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* Outer Smooth Glowing Follower Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none transition-[width,height,background-color,border-color,opacity,transform] duration-200 ease-out"
        style={{
          width: isHovered ? (isClicked ? '42px' : '48px') : (isClicked ? '22px' : '30px'),
          height: isHovered ? (isClicked ? '42px' : '48px') : (isClicked ? '22px' : '30px'),
          borderColor: isHovered ? '#2196E8' : 'rgba(33, 150, 232, 0.55)',
          borderWidth: isHovered ? '2px' : '1.5px',
          borderStyle: 'solid',
          backgroundColor: isHovered ? 'rgba(33, 150, 232, 0.12)' : 'transparent',
          boxShadow: isHovered ? '0 0 16px rgba(33, 150, 232, 0.35)' : 'none',
          opacity: isVisible ? 1 : 0,
          willChange: 'transform, width, height',
        }}
      />

      {/* Center Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none bg-[#2196E8] shadow-[0_0_8px_#2196E8] transition-[width,height,opacity,background-color] duration-150 ease-out"
        style={{
          width: isHovered ? '4px' : (isClicked ? '5px' : '7px'),
          height: isHovered ? '4px' : (isClicked ? '5px' : '7px'),
          opacity: isVisible ? (isHovered ? 0.7 : 1) : 0,
          willChange: 'transform',
        }}
      />
    </div>
  );
}
