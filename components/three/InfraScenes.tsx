"use client";
import * as THREE from "three";
import { useMemo, useRef, useState, type ReactNode } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges, Float } from "@react-three/drei";
import { SceneCanvas, glowTexture, rng, type SceneProps } from "./shared";

function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 2, 3]} color="#00D9FF" intensity={25} distance={12} />
      <pointLight position={[-3, -1, 3]} color="#087BFF" intensity={25} distance={12} />
      <directionalLight position={[0, 3, 4]} intensity={0.8} color="#8FEAFF" />
    </>
  );
}

// Pointer-driven rotation (hover to rotate).
function Hover({ children, base = 0.35, amt = 0.7 }: { children: ReactNode; base?: number; amt?: number }) {
  const g = useRef<THREE.Group>(null);
  useFrame(({ pointer, clock }, dt) => {
    if (!g.current) return;
    g.current.rotation.y = THREE.MathUtils.damp(g.current.rotation.y, base + pointer.x * amt + Math.sin(clock.elapsedTime * 0.4) * 0.12, 3, dt);
    g.current.rotation.x = THREE.MathUtils.damp(g.current.rotation.x, -pointer.y * 0.25, 3, dt);
  });
  return <group ref={g}>{children}</group>;
}

function Floor({ y }: { y: number }) {
  const glow = useMemo(() => glowTexture(), []);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, y, 0]}>
      <circleGeometry args={[3, 48]} />
      <meshBasicMaterial map={glow} transparent depthWrite={false} blending={THREE.AdditiveBlending} toneMapped={false} />
    </mesh>
  );
}

/* ---------- Server racks ---------- */
function Rack({ x, seed }: { x: number; seed: number }) {
  const leds = useRef<(THREE.MeshBasicMaterial | null)[]>([]);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    leds.current.forEach((m, i) => { if (m) m.color.setHex(Math.sin(t * (1.5 + ((i + seed) % 5) * 0.8) + i * 1.9) > 0.1 ? 0x00d9ff : 0x053a6b); });
  });
  return (
    <group position={[x, 0, 0]}>
      <mesh>
        <boxGeometry args={[1.3, 3.5, 1.1]} />
        <meshStandardMaterial color="#0a111d" metalness={0.9} roughness={0.35} />
        <Edges color="#087BFF" />
      </mesh>
      {Array.from({ length: 8 }, (_, i) => (
        <group key={i} position={[0, -1.45 + i * 0.41, 0.56]}>
          <mesh>
            <boxGeometry args={[1.1, 0.3, 0.03]} />
            <meshStandardMaterial color="#121e33" metalness={0.8} roughness={0.3} />
          </mesh>
          <mesh position={[0.1, 0, 0.02]}>
            <boxGeometry args={[0.7, 0.02, 0.01]} />
            <meshBasicMaterial color="#087BFF" toneMapped={false} />
          </mesh>
          {[0, 1].map((j) => (
            <mesh key={j} position={[-0.45 + j * 0.1, 0, 0.025]}>
              <boxGeometry args={[0.05, 0.05, 0.02]} />
              <meshBasicMaterial ref={(m) => { leds.current[i * 2 + j] = m; }} color="#00D9FF" toneMapped={false} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

export function RackScene(p: SceneProps) {
  return (
    <SceneCanvas {...p} camera={{ position: [0, 0.2, 7.4], fov: 34 }}>
      <Lights />
      <Hover base={0.45}>
        <Float speed={1.4} floatIntensity={0.5} rotationIntensity={0}>
          <Rack x={-0.85} seed={1} />
          <Rack x={0.85} seed={3} />
        </Float>
      </Hover>
      <Floor y={-2.1} />
    </SceneCanvas>
  );
}

/* ---------- Minecraft-inspired server block ---------- */
function Block() {
  const wire = useRef<THREE.Mesh>(null);
  const tex = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 16;
    const g = c.getContext("2d")!;
    const r = rng(7);
    for (let x = 0; x < 16; x++) for (let y = 0; y < 16; y++) {
      const v = r();
      g.fillStyle = v > 0.86 ? "#1572d6" : v > 0.55 ? "#0c3b78" : "#08234a";
      g.fillRect(x, y, 1, 1);
    }
    const t = new THREE.CanvasTexture(c);
    t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);
  useFrame((_, dt) => { if (wire.current) { wire.current.rotation.y -= dt * 0.25; wire.current.rotation.x += dt * 0.1; } });
  return (
    <Hover base={0.6} amt={0.9}>
      <Float speed={1.6} floatIntensity={0.6} rotationIntensity={0.15}>
        <mesh rotation={[0.5, 0.6, 0]}>
          <boxGeometry args={[1.8, 1.8, 1.8]} />
          <meshStandardMaterial map={tex} emissive="#0a4fa8" emissiveMap={tex} emissiveIntensity={0.6} metalness={0.6} roughness={0.35} />
          <Edges color="#00D9FF" />
        </mesh>
        <mesh ref={wire}>
          <boxGeometry args={[2.5, 2.5, 2.5]} />
          <meshBasicMaterial wireframe color="#087BFF" transparent opacity={0.25} />
        </mesh>
      </Float>
    </Hover>
  );
}

export function BlockScene(p: SceneProps) {
  return (
    <SceneCanvas {...p} camera={{ position: [0, 0.2, 7], fov: 34 }}>
      <Lights />
      <Block />
      <Floor y={-2.3} />
    </SceneCanvas>
  );
}

/* ---------- Network nodes ---------- */
function Node({ p }: { p: THREE.Vector3 }) {
  const [h, setH] = useState(false);
  return (
    <mesh position={p} scale={h ? 2 : 1} onPointerOver={(e) => { e.stopPropagation(); setH(true); }} onPointerOut={() => setH(false)}>
      <sphereGeometry args={[0.07, 16, 16]} />
      <meshBasicMaterial color={h ? "#8FEAFF" : "#00D9FF"} toneMapped={false} />
    </mesh>
  );
}

function Network({ lite }: { lite: boolean }) {
  const spin = useRef<THREE.Group>(null);
  const glow = useMemo(() => glowTexture(), []);
  const { pts, edges, lines } = useMemo(() => {
    const r = rng(42);
    const pts = Array.from({ length: lite ? 14 : 24 }, () => {
      const u = r() * 2 - 1, th = r() * Math.PI * 2, rad = 1.3 + r() * 1.1, s = Math.sqrt(1 - u * u);
      return new THREE.Vector3(rad * s * Math.cos(th), rad * u * 0.8, rad * s * Math.sin(th));
    });
    const edges: [number, number][] = [];
    pts.forEach((a, i) => pts.forEach((b, j) => { if (j > i && a.distanceTo(b) < 1.7) edges.push([i, j]); }));
    const lines = new THREE.BufferGeometry().setFromPoints(edges.flatMap(([i, j]) => [pts[i], pts[j]]));
    return { pts, edges, lines };
  }, [lite]);
  const packets = useMemo(() => {
    const r = rng(5);
    return Array.from({ length: lite ? 10 : 18 }, () => ({ e: Math.floor(r() * edges.length), o: r(), s: 0.2 + r() * 0.4 }));
  }, [edges, lite]);
  const pg = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(packets.length * 3), 3));
    return g;
  }, [packets]);
  useFrame(({ clock }, dt) => {
    const t = clock.elapsedTime;
    const a = pg.attributes.position as THREE.BufferAttribute;
    packets.forEach((k, i) => {
      const [ai, bi] = edges[k.e];
      const u = (t * k.s + k.o) % 1;
      a.setXYZ(i, THREE.MathUtils.lerp(pts[ai].x, pts[bi].x, u), THREE.MathUtils.lerp(pts[ai].y, pts[bi].y, u), THREE.MathUtils.lerp(pts[ai].z, pts[bi].z, u));
    });
    a.needsUpdate = true;
    if (spin.current) spin.current.rotation.y += dt * 0.1;
  });
  return (
    <group ref={spin}>
      <lineSegments geometry={lines}><lineBasicMaterial color="#087BFF" transparent opacity={0.5} /></lineSegments>
      {pts.map((p, i) => <Node key={i} p={p} />)}
      <points geometry={pg}>
        <pointsMaterial size={0.26} map={glow} color="#8FEAFF" transparent depthWrite={false} blending={THREE.AdditiveBlending} toneMapped={false} />
      </points>
    </group>
  );
}

export function NodesScene(p: SceneProps) {
  return (
    <SceneCanvas {...p} camera={{ position: [0, 0, 7.4], fov: 36 }}>
      <Hover base={0} amt={0.5}><Network lite={p.lite} /></Hover>
    </SceneCanvas>
  );
}
