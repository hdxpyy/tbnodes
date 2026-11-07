"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

// CSS 3D tilt driven by CSS variables (no React re-render per mouse move). Disabled on touch / reduced motion.
export default function TiltCard({ children, className = "", max = 6 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const f = () => setEnabled(m.matches);
    f();
    m.addEventListener("change", f);
    return () => m.removeEventListener("change", f);
  }, []);
  const set = (rx: string, ry: string, mx: string, my: string) => {
    const el = ref.current; if (!el) return;
    el.style.setProperty("--rx", rx); el.style.setProperty("--ry", ry); el.style.setProperty("--mx", mx); el.style.setProperty("--my", my);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!enabled || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    set(`${(0.5 - y) * max * 2}deg`, `${(x - 0.5) * max * 2}deg`, `${x * 100}%`, `${y * 100}%`);
  };
  return (
    <div className="tilt-wrap">
      <div ref={ref} className={`tilt ${className}`} onPointerMove={onMove} onPointerLeave={() => set("0deg", "0deg", "50%", "50%")}>
        {children}
        <span className="tilt-sheen" aria-hidden />
      </div>
    </div>
  );
}
