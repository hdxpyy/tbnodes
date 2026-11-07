"use client";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { LOCATION } from "@/config/site";
import { SceneCanvas, type SceneProps } from "./shared";

const R = 1.6;

// Abstract tech globe. Only real location shown: Delhi, India. No invented data centers or live stats.
function Globe({ lite }: { lite: boolean }) {
  const outer = useRef<THREE.Group>(null);
  const shield = useRef<THREE.MeshBasicMaterial>(null);
  const shieldMesh = useRef<THREE.Mesh>(null);
  const orbits = useRef<(THREE.Group | null)[]>([]);
  const rings = useRef<(THREE.Mesh | null)[]>([]);
  const lat = THREE.MathUtils.degToRad(LOCATION.lat);
  const lon = THREE.MathUtils.degToRad(LOCATION.lon);

  const marker = useMemo(
    () => new THREE.Vector3(Math.cos(lat) * Math.sin(lon), Math.sin(lat), Math.cos(lat) * Math.cos(lon)).multiplyScalar(R),
    [lat, lon]
  );
  const markerQuat = useMemo(() => new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), marker.clone().normalize()), [marker]);
  const dots = useMemo(() => {
    const n = lite ? 350 : 800, a = new Float32Array(n * 3), ga = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2, r = Math.sqrt(1 - y * y), th = ga * i;
      a[i * 3] = Math.cos(th) * r * (R + 0.03); a[i * 3 + 1] = y * (R + 0.03); a[i * 3 + 2] = Math.sin(th) * r * (R + 0.03);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(a, 3));
    return g;
  }, [lite]);
  const atmo = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false,
        vertexShader: "varying vec3 vN; void main(){ vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
        fragmentShader: "varying vec3 vN; void main(){ float i = pow(max(0.0, 0.62 - dot(vN, vec3(0.0, 0.0, 1.0))), 3.0); gl_FragColor = vec4(0.0, 0.62, 1.0, 1.0) * i; }",
      }),
    []
  );

  useFrame(({ clock, pointer }) => {
    const t = clock.elapsedTime;
    if (outer.current) {
      outer.current.rotation.y = Math.sin(t * 0.35) * 0.3 + pointer.x * 0.25;
      outer.current.rotation.x = 0.1 - pointer.y * 0.15;
    }
    if (shield.current) shield.current.opacity = 0.1 + 0.14 * (Math.sin(t * 1.5) * 0.5 + 0.5);
    if (shieldMesh.current) shieldMesh.current.rotation.y = t * 0.06;
    orbits.current.forEach((o, i) => { if (o) o.rotation.y = t * (0.5 + i * 0.25) * (i % 2 ? -1 : 1); });
    rings.current.forEach((m, i) => {
      if (!m) return;
      const u = (t * 0.5 + i / 3) % 1;
      m.scale.setScalar(1 + u * 5);
      (m.material as THREE.MeshBasicMaterial).opacity = (1 - u) * 0.8;
    });
  });

  return (
    <group ref={outer}>
      <group rotation={[lat, -lon, 0]}>
        <mesh><sphereGeometry args={[R - 0.02, 48, 32]} /><meshStandardMaterial color="#050d1c" emissive="#031a3d" metalness={0.5} roughness={0.5} /></mesh>
        <mesh><sphereGeometry args={[R, 24, 16]} /><meshBasicMaterial wireframe color="#087BFF" transparent opacity={0.18} /></mesh>
        <points geometry={dots}><pointsMaterial size={0.025} color="#8FEAFF" transparent opacity={0.65} sizeAttenuation depthWrite={false} /></points>
        <mesh scale={1.2}><sphereGeometry args={[R, 48, 32]} /><primitive object={atmo} attach="material" /></mesh>
        <group position={marker}>
          <mesh><sphereGeometry args={[0.045, 16, 16]} /><meshBasicMaterial color="#8FEAFF" toneMapped={false} /></mesh>
          <group quaternion={markerQuat}>
            {[0, 1, 2].map((i) => (
              <mesh key={i} ref={(m) => { rings.current[i] = m; }}>
                <ringGeometry args={[0.05, 0.06, 32]} />
                <meshBasicMaterial color="#00D9FF" transparent opacity={0.8} side={THREE.DoubleSide} depthWrite={false} toneMapped={false} />
              </mesh>
            ))}
          </group>
          <Html position={[0.12, 0.1, 0]} style={{ pointerEvents: "none" }}>
            <span className="whitespace-nowrap rounded-md border border-neon/50 bg-ink/80 px-2 py-1 text-[11px] font-semibold tracking-wider text-ice">DELHI, INDIA</span>
          </Html>
        </group>
      </group>
      <mesh ref={shieldMesh}>
        <icosahedronGeometry args={[2.0, 1]} />
        <meshBasicMaterial ref={shield} wireframe color="#00D9FF" transparent opacity={0.15} />
      </mesh>
      {[0, 1].map((i) => (
        <group key={i} rotation={[i ? 0.9 : -0.5, 0, i ? -0.4 : 0.6]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[2.35, 0.006, 6, 96]} /><meshBasicMaterial color="#087BFF" transparent opacity={0.5} /></mesh>
          <group ref={(g) => { orbits.current[i] = g; }}>
            <mesh position={[2.35, 0, 0]}><sphereGeometry args={[0.05, 12, 12]} /><meshBasicMaterial color="#8FEAFF" toneMapped={false} /></mesh>
          </group>
        </group>
      ))}
    </group>
  );
}

export default function GlobeScene(p: SceneProps) {
  return (
    <SceneCanvas {...p} camera={{ position: [0, 0, 7], fov: 40 }}>
      <ambientLight intensity={0.8} />
      <pointLight position={[4, 3, 5]} color="#00D9FF" intensity={30} distance={14} />
      <Globe lite={p.lite} />
    </SceneCanvas>
  );
}
