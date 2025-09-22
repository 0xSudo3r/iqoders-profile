import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import RackModel from "./ReckModel";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-between lg:px-10 px-5 bg-slate-900">
      {/* Left Content */}
      <div className="max-w-xl text-white space-y-6 lg:pl-32">
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
      <div className="h-screen lg:w-1/2 w-full ">
        <Canvas camera={{ position: [0, 2, 5.5], fov: 42 }}>
          {/* Lighting setup */}
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={25} />
          <directionalLight position={[-5, 5, -5]} intensity={25} />
          <pointLight position={[0, 3, 2]} intensity={25} />
          <spotLight
            position={[0, 6, 6]}
            angle={0.3}
            intensity={25}
            penumbra={0.5}
            castShadow
          />

          <Suspense fallback={null}>
            <RackModel />
          </Suspense>

          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>
    </section>
  );
}
