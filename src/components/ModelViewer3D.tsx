"use client";

import React, { Suspense, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Center,
  useGLTF,
  Html,
  Float,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";
import { RotateCw, Maximize2, Loader2, Sparkles, Eye } from "lucide-react";

interface ModelViewer3DProps {
  modelUrl: string;
  autoRotate?: boolean;
  scale?: number;
  className?: string;
  interactive?: boolean;
}

function ModelMesh({
  url,
  scale = 1,
  autoRotate = true,
}: {
  url: string;
  scale?: number;
  autoRotate?: boolean;
}) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);

  // Clone scene so multiple cards can display the model without shared mutation
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    // Ensure all meshes cast/receive shadows and have two-sided materials
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        if (mesh.material) {
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((m) => (m.side = THREE.DoubleSide));
          } else {
            mesh.material.side = THREE.DoubleSide;
          }
        }
      }
    });
    return clone;
  }, [scene]);

  useFrame((_, delta) => {
    if (autoRotate && modelRef.current) {
      modelRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={modelRef}>
      <Center top>
        <primitive object={clonedScene} scale={scale} />
      </Center>
    </group>
  );
}

function FallbackLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs font-mono">
        <Loader2 className="w-5 h-5 animate-spin text-portfolio-accent" />
        <span>Loading 3D Asset...</span>
      </div>
    </Html>
  );
}

export function ModelViewer3D({
  modelUrl,
  autoRotate = true,
  scale = 1,
  className = "w-full h-full",
  interactive = true,
}: ModelViewer3DProps) {
  const [rotating, setRotating] = useState(autoRotate);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#121417] select-none ${className}`}>
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 2.5, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        shadows
        className="w-full h-full"
      >
        <ambientLight intensity={0.9} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-5, 4, -5]} intensity={0.6} />
        <pointLight position={[0, -2, 2]} intensity={0.4} color="#526B83" />

        <Suspense fallback={<FallbackLoader />}>
          <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
            <ModelMesh url={modelUrl} scale={scale} autoRotate={rotating} />
          </Float>
        </Suspense>

        {interactive && (
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={2}
            maxDistance={8}
            maxPolarAngle={Math.PI / 2 + 0.1}
            dampingFactor={0.05}
          />
        )}
      </Canvas>

      {/* Control Overlay Buttons */}
      <div className="absolute bottom-2.5 right-2.5 z-20 flex items-center gap-1.5 pointer-events-auto">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setRotating((prev) => !prev);
          }}
          title={rotating ? "Pause Rotation" : "Auto Rotate"}
          className={`p-1.5 rounded-md text-xs font-mono transition-colors border ${
            rotating
              ? "bg-portfolio-accent text-white border-portfolio-accent"
              : "bg-black/60 text-white/80 border-white/20 hover:text-white"
          }`}
        >
          <RotateCw className={`w-3.5 h-3.5 ${rotating ? "animate-spin" : ""}`} style={{ animationDuration: "6s" }} />
        </button>
      </div>

      {/* 3D Interactive Badge */}
      <div className="absolute bottom-2.5 left-2.5 z-20 pointer-events-none">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-black/60 backdrop-blur-md text-white/90 border border-white/10">
          <Sparkles className="w-3 h-3 text-portfolio-accent" />
          R3F • Drag to Orbit
        </span>
      </div>
    </div>
  );
}
