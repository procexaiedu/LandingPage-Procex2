"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * speed * 0.3;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.2;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * speed) * 0.3;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={speed}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    const colors = new Float32Array(200 * 3);
    const colorPalette = [
      new THREE.Color("#FFB800"),
      new THREE.Color("#00E5FF"),
      new THREE.Color("#FF6B6B"),
    ];

    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export function ThreeDBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FFB800" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00E5FF" />

        <AnimatedSphere position={[-2, 0, -2]} color="#FFB800" speed={0.5} />
        <AnimatedSphere position={[2, -1, -3]} color="#00E5FF" speed={0.3} />
        <AnimatedSphere position={[0, 2, -4]} color="#FF6B6B" speed={0.4} />

        <ParticleField />
      </Canvas>
    </div>
  );
}
