"use client";
import * as THREE from "three";
import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import { SceneCanvas, glowTexture, rng, type SceneProps } from "./shared";

// The real /logo.png is the texture. Stacked darker copies behind it create depth; the shape is never redrawn.
function Logo({ lite, onReady }: { lite: boolean; onReady: () => void }) {
  const tex = useTexture("/logo.png");
  if (tex.colorSpace !== THREE.SRGBColorSpace) { tex.colorSpace = THREE.SRGBColorSpace; tex.needsUpdate = true; }
  const group = useRef<THREE.Group>(null);
  const sheen = useRef<THREE.MeshBasicMaterial>(null);
  const layers = lite ? 3 : 7;
  useEffect(() => { onReady(); }, [onReady]);
  useFrame(({ clock, pointer }, dt) => {
    const g = group.current;
    if (!g) return;
    const t = clock.elapsedTime;
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, Math.sin(t * 0.45) * 0.5 + pointer.x * 0.35, 3, dt);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -pointer.y * 0.2, 3, dt);
    if (sheen.current) sheen.current.opacity = 0.05 + 0.14 * (Math.sin(t * 1.3) * 0.5 + 0.5);
  });
  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.7} floatingRange={[-0.1, 0.1]}>
      <group ref={group}>
        {Array.from({ length: layers }, (_, i) => (
          <mesh key={i} position={[0, 0, -(i + 1) * 0.035]}>
            <planeGeometry args={[3.1, 3.1]} />
            <meshBasicMaterial map={tex} color={new THREE.Color("#0a55d6").multiplyScalar(1 - (i + 1) / (layers + 2))} alphaTest={0.5} toneMapped={false} />
          </mesh>
        ))}
        <mesh>
          <planeGeometry args={[3.1, 3.1]} />
          <meshBasicMaterial map={tex} transparent toneMapped={false} />
        </mesh>
        <mesh position={[0, 0, 0.004]}>
          <planeGeometry args={[3.1, 3.1]} />
          <meshBasicMaterial ref={sheen} map={tex} color="#5fe6ff" transparent opacity={0.1} blending={THREE.AdditiveBlending} depthWrite={false} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
}

function Platform() {
  const glow = useMemo(() => glowTexture(), []);
  const ring = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => { if (ring.current) ring.current.rotation.z += dt * 0.3; });
  return (
    <group position={[0, -1.9, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <circleGeometry args={[2.8, 48]} />
        <meshBasicMaterial map={glow} transparent depthWrite={false} blending={THREE.AdditiveBlending} toneMapped={false} />
      </mesh>
      <mesh position={[0, -0.04, 0]}>
        <cylinderGeometry args={[1.7, 1.8, 0.08, 64]} />
        <meshStandardMaterial color="#07101f" metalness={0.9} roughness={0.25} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.012, 0]}>
        <torusGeometry args={[1.7, 0.012, 8, 96]} />
        <meshBasicMaterial color="#00D9FF" toneMapped={false} />
      </mesh>
      <mesh ref={ring} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.014, 0]}>
        <ringGeometry args={[1.25, 1.28, 64, 1, 0, Math.PI * 1.4]} />
        <meshBasicMaterial color="#8FEAFF" transparent opacity={0.7} toneMapped={false} />
      </mesh>
    </group>
  );
}

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);
  const glow = useMemo(() => glowTexture(), []);
  const geo = useMemo(() => {
    const r = rng(11);
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = r() * 2 - 1, t = r() * Math.PI * 2, rad = 2.3 + r() * 2.2, s = Math.sqrt(1 - u * u);
      a[i * 3] = rad * s * Math.cos(t) * 1.2; a[i * 3 + 1] = u * rad * 0.8; a[i * 3 + 2] = rad * s * Math.sin(t) * 0.6 - 0.5;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(a, 3));
    return g;
  }, [count]);
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.04; });
  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.2} map={glow} color="#8FEAFF" transparent opacity={0.8} depthWrite={false} blending={THREE.AdditiveBlending} sizeAttenuation toneMapped={false} />
    </points>
  );
}

export default function HeroScene(p: SceneProps) {
  return (
    <SceneCanvas {...p} readyOnCreate={false} camera={{ position: [0, -0.1, 7.2], fov: 38 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, -1.2, 2]} color="#087BFF" intensity={18} distance={7} />
      <pointLight position={[3, 2.5, -1]} color="#00D9FF" intensity={14} distance={9} />
      <group position={[0, 0.35, 0]}><Logo lite={p.lite} onReady={p.onReady} /></group>
      <Platform />
      <Particles count={p.lite ? 60 : 150} />
    </SceneCanvas>
  );
}
