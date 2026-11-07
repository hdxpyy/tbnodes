"use client";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import type { ReactNode } from "react";

export type SceneProps = { visible: boolean; lite: boolean; reduced: boolean; onReady: () => void };

export function rng(seed: number) {
  let s = seed;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}

export function glowTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, "rgba(0,217,255,0.9)");
  grad.addColorStop(0.35, "rgba(8,123,255,0.35)");
  grad.addColorStop(1, "rgba(8,123,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

type CanvasProps = SceneProps & { children: ReactNode; camera: { position: [number, number, number]; fov: number }; readyOnCreate?: boolean };

// frameloop: paused when off-screen, single frame for reduced motion, capped DPR on mobile / low-end.
export function SceneCanvas({ children, visible, lite, reduced, onReady, camera, readyOnCreate = true }: CanvasProps) {
  return (
    <Canvas
      frameloop={!visible ? "never" : reduced ? "demand" : "always"}
      dpr={lite ? [1, 1.25] : [1, 1.75]}
      camera={camera}
      gl={{ antialias: !lite, alpha: true, powerPreference: "high-performance" }}
      onCreated={() => { if (readyOnCreate) onReady(); }}
    >
      {children}
    </Canvas>
  );
}
