import { Canvas } from "@react-three/fiber";
<<<<<<< HEAD
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
=======
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import RackModel from "./ReckModel";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-between px-10 bg-slate-900">
      {/* Left Content */}
      <div className="max-w-xl text-white space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          Technology moves <span className="text-violet-500">business</span>
        </h1>
        <p className="text-lg text-gray-300">
          iQoders helps you stay ahead with smart IT systems that are quick,
          safe, and easy to grow. Whether you move to the cloud, update old
          systems, or add more security, we give you the tools and support to
          keep moving forward with confidence.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg font-medium transition">
            Start Your Project
          </button>
          <button className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right 3D Rack */}
      <div className="w-[480px] h-[480px]">
        <Canvas camera={{ position: [0, 2, 5.5], fov: 42 }}>
          {/* Lighting setup */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <directionalLight position={[-5, 5, -5]} intensity={0.8} />
          <pointLight position={[0, 3, 2]} intensity={0.6} />
          <spotLight
            position={[0, 6, 6]}
            angle={0.3}
            intensity={1}
            penumbra={0.5}
            castShadow
          />

          <Suspense fallback={null}>
            <RackModel />
          </Suspense>

          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>
>>>>>>> a250759f40a93e3c075d168edf3e63a6ac26f0e5
    </section>
  );
}
