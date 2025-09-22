import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "../../components/ModelComponent";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-hero-gradient flex items-center justify-center">
      {/* 3D Scene */}
      <div className="absolute inset-0 bg-hero-radial flex items-center">
        <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
          {/* Base Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <pointLight position={[0, 3, 3]} intensity={2} color="#4cc9f0" />

          {/* Model */}
          <Model scale={2} position={[0, -1.5, -2]} />

          {/* Environment light for reflections */}
          <Environment preset="city" />

          {/* Controls */}
          <OrbitControls enableZoom={false} target={[0, -1.5, -2]} />
        </Canvas>
      </div>

      {/* Hero Text Overlay */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold">Welcome to My Website</h1>
        <p className="mt-4 text-lg">Now with a 3D Data Center Rack 🚀</p>
      </div>
    </section>
  );
}
