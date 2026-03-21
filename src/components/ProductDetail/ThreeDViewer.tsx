'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

function GemModel() {
  return (
    <mesh rotation={[0.6, 0.8, 0]}>
      <icosahedronGeometry args={[1.35, 0]} />
      <meshPhysicalMaterial color="#d4af37" metalness={0.95} roughness={0.12} clearcoat={1} transmission={0.18} />
    </mesh>
  );
}

export function ThreeDViewer() {
  return (
    <div className="glass-card h-[500px] overflow-hidden p-4">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={2.8} />
        <directionalLight position={[-5, 2, 3]} intensity={1.3} color="#f5f1e8" />
        <directionalLight position={[0, 3, -4]} intensity={1.9} color="#d4af37" />
        <Suspense fallback={null}>
          <GemModel />
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={1.2} enableDamping />
      </Canvas>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <button key={index} className={`rounded-2xl border p-3 text-xs ${index === 0 ? 'border-metallicGold shadow-luxe' : 'border-white/10'}`}>
            Angle {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
