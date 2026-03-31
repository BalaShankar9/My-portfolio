"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 2000;
const WAVE_SPEED = 0.3;
const WAVE_HEIGHT = 1.5;
const SPREAD = 20;

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const [positions, basePositions] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const base = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * SPREAD;
      const z = (Math.random() - 0.5) * SPREAD;
      const y = 0;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      base[i * 3] = x;
      base[i * 3 + 1] = y;
      base[i * 3 + 2] = z;
    }
    return [pos, base];
  }, []);

  const colors = useMemo(() => {
    const cols = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const isAccent = Math.random() < 0.15;
      if (isAccent) {
        cols[i * 3] = 0.39;
        cols[i * 3 + 1] = 0.4;
        cols[i * 3 + 2] = 0.95;
      } else {
        const brightness = 0.6 + Math.random() * 0.4;
        cols[i * 3] = brightness;
        cols[i * 3 + 1] = brightness;
        cols[i * 3 + 2] = brightness;
      }
    }
    return cols;
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime() * WAVE_SPEED;
    const geometry = meshRef.current.geometry;
    const posAttr = geometry.attributes.position;
    const arr = posAttr.array as Float32Array;

    mouseRef.current.x = pointer.x * viewport.width * 0.5;
    mouseRef.current.y = pointer.y * viewport.height * 0.5;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const bx = basePositions[i * 3];
      const bz = basePositions[i * 3 + 2];

      const wave =
        Math.sin(bx * 0.4 + time) * Math.cos(bz * 0.3 + time * 0.7) *
        WAVE_HEIGHT;

      const dx = bx - mouseRef.current.x;
      const dz = bz - mouseRef.current.y;
      const dist = Math.sqrt(dx * dx + dz * dz);
      const influence = Math.max(0, 1 - dist / 4);
      const push = influence * influence * 2;

      arr[i * 3 + 1] = wave + push;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={PARTICLE_COUNT}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={PARTICLE_COUNT}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export function ParticleField() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 5, 12], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
