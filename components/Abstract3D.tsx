"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float, Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function FloatingGeometry({ position, color, geometry, speed = 1 }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  useFrame((state) => {
    if (meshRef.current) {
      timeRef.current += 0.01 * speed;
      meshRef.current.rotation.x = Math.sin(timeRef.current) * 0.3;
      meshRef.current.rotation.y = Math.cos(timeRef.current) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(timeRef.current * 2) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        {geometry}
        <meshStandardMaterial
          color={color}
          metalness={0.6}
          roughness={0.3}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const particles = useMemo(() => {
    return Array.from({ length: 200 }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ] as [number, number, number],
      size: Math.random() * 0.05 + 0.02,
    }));
  }, []);

  return (
    <>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshStandardMaterial
            color="#60a5fa"
            emissive="#3b82f6"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </>
  );
}

function CentralOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.6}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshStandardMaterial
            color="#3b82f6"
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={2}
            emissive="#1e40af"
            emissiveIntensity={0.3}
          />
        </mesh>
        
        {/* Inner glow */}
        <mesh position={[0, 0, 0]} scale={0.7}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshStandardMaterial
            color="#60a5fa"
            transparent
            opacity={0.3}
            emissive="#3b82f6"
            emissiveIntensity={0.8}
          />
        </mesh>
      </Float>
    </group>
  );
}

function GeometricShapes() {
  const shapes = useMemo(() => {
    return [
      {
        position: [-3, 2, -2] as [number, number, number],
        color: "#8b5cf6",
        geometry: <octahedronGeometry args={[0.8, 0]} />,
        speed: 1.2,
      },
      {
        position: [3, -1.5, -1] as [number, number, number],
        color: "#ec4899",
        geometry: <tetrahedronGeometry args={[0.7, 0]} />,
        speed: 0.8,
      },
      {
        position: [-2, -2, 1] as [number, number, number],
        color: "#06b6d4",
        geometry: <dodecahedronGeometry args={[0.6, 0]} />,
        speed: 1.5,
      },
      {
        position: [2.5, 1.5, 0] as [number, number, number],
        color: "#f59e0b",
        geometry: <torusGeometry args={[0.5, 0.2, 16, 32]} />,
        speed: 1,
      },
      {
        position: [0, 2.5, -1.5] as [number, number, number],
        color: "#10b981",
        geometry: <boxGeometry args={[0.7, 0.7, 0.7]} />,
        speed: 1.3,
      },
    ];
  }, []);

  return (
    <>
      {shapes.map((shape, i) => (
        <FloatingGeometry
          key={i}
          position={shape.position}
          color={shape.color}
          geometry={shape.geometry}
          speed={shape.speed}
        />
      ))}
    </>
  );
}

function AnimatedScene() {
  return (
    <>
      {/* Central orb */}
      <CentralOrb />
      
      {/* Floating geometric shapes */}
      <GeometricShapes />
      
      {/* Particle field */}
      <ParticleField />
      
      {/* Sparkles for extra magic */}
      <Sparkles
        count={50}
        scale={10}
        size={2}
        speed={0.4}
        color="#3b82f6"
      />
    </>
  );
}

export default function Abstract3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Enhanced Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.5}
            color="#ffffff"
          />
          <directionalLight position={[-5, 3, -5]} intensity={0.6} color="#60a5fa" />
          <pointLight position={[0, 5, 0]} intensity={0.8} color="#3b82f6" />
          <pointLight position={[-5, -5, 5]} intensity={0.5} color="#8b5cf6" />
          
          <AnimatedScene />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
            enableDamping
            dampingFactor={0.05}
          />
          
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}

