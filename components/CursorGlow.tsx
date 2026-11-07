"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const m = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const el = ref.current;
    if (!m.matches || !el) return;
    let x = 0, y = 0, raf = 0;
    const draw = () => { raf = 0; el.style.transform = `translate3d(${x - 210}px, ${y - 210}px, 0)`; };
    const move = (e: PointerEvent) => { x = e.clientX; y = e.clientY; el.style.opacity = "1"; if (!raf) raf = requestAnimationFrame(draw); };
    window.addEventListener("pointermove", move, { passive: true });
    return () => { window.removeEventListener("pointermove", move); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[420px] w-[420px] rounded-full opacity-0 mix-blend-screen transition-opacity duration-500 md:block"
      style={{ background: "radial-gradient(circle, rgba(0,217,255,.14), rgba(8,123,255,.07) 40%, transparent 70%)" }}
    />
  );
}
