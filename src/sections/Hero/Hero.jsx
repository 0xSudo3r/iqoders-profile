import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import RackModel from "./ReckModel";

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Match Tailwind's lg breakpoint (min-width: 1024px)
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mediaQuery.matches);

    const handler = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-between lg:px-10 px-5 
bg-gradient-to-br from-[#1a0b2e] via-[#2a1454] to-[#120826]"
    >
      {/* Left Content */}
      <div className="max-w-xl text-white space-y-6 lg:pl-32">
        <h1 className="text-5xl font-bold leading-tight">
          Technology moves <span className="bg-gradient-to-r  from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            business
          </span>
        </h1>
        <p className="text-lg text-gray-300">
          iQoders helps you stay ahead with smart IT systems that are quick,
          safe, and easy to grow. Whether you move to the cloud, update old
          systems, or add more security, we give you the tools and support to
          keep moving forward with confidence.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 drop-shadow-[0_0_12px_rgba(139,92,246,0.7)] bg-white text-black hover:bg-gray-50 hover:border hover:drop-shadow-[0_0_12px_rgba(145,92,246,0.7)] border-gray-300 cursor-pointer rounded-2xl font-medium transition">
            Start Your Project
          </button>
          <button className="px-6 py-3 border border-gray-400  hover:bg-white rounded-xl hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right 3D Rack */}
      {isDesktop && (
        <div className="h-screen lg:w-1/2 w-full">
          <Canvas
            camera={{ position: [0, 2, 5.5], fov: 42 }}
            frameloop="demand"
          >
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
      )}
    </section>
  );
}
