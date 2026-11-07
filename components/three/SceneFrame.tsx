"use client";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState, type ComponentType, type ReactNode } from "react";
import type { SceneProps } from "./shared";

export type SceneName = "hero" | "rack" | "block" | "nodes" | "globe";

// Each 3D scene is a separate lazy chunk. Nothing from three.js loads until its frame is near the viewport.
const SCENES: Record<SceneName, ComponentType<SceneProps>> = {
  hero: dynamic(() => import("./HeroScene"), { ssr: false }),
  rack: dynamic(() => import("./InfraScenes").then((m) => m.RackScene), { ssr: false }),
  block: dynamic(() => import("./InfraScenes").then((m) => m.BlockScene), { ssr: false }),
  nodes: dynamic(() => import("./InfraScenes").then((m) => m.NodesScene), { ssr: false }),
  globe: dynamic(() => import("./GlobeScene"), { ssr: false }),
};

let webglOk: boolean | undefined;
function hasWebGL() {
  if (webglOk !== undefined) return webglOk;
  try {
    const c = document.createElement("canvas");
    const gl = (c.getContext("webgl2") || c.getContext("webgl")) as WebGLRenderingContext | null;
    webglOk = !!gl;
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch { webglOk = false; }
  return webglOk;
}

export default function SceneFrame({ scene, fallback, label, className = "" }: { scene: SceneName; fallback: ReactNode; label: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [supported, setSupported] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [lite, setLite] = useState(false);
  const [reduced, setReduced] = useState(false);
  const onReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    setSupported(hasWebGL() ?? false);
    setLite(window.matchMedia("(max-width: 767px), (pointer: coarse)").matches);
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  useEffect(() => {
    const el = ref.current;
    if (!el || !supported) return;
    const io = new IntersectionObserver(([e]) => { setVisible(e.isIntersecting); if (e.isIntersecting) setMounted(true); }, { rootMargin: "120px" });
    io.observe(el);
    return () => io.disconnect();
  }, [supported]);

  const Scene = SCENES[scene];
  return (
    <div ref={ref} className={`relative ${className}`} role="img" aria-label={label}>
      <div className={`absolute inset-0 transition-opacity duration-700 ${ready ? "pointer-events-none opacity-0" : "opacity-100"}`}>{fallback}</div>
      {supported && mounted && (
        <div className={`absolute inset-0 transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}>
          <Scene visible={visible} lite={lite} reduced={reduced} onReady={onReady} />
        </div>
      )}
    </div>
  );
}
