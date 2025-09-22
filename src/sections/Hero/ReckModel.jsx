import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function RackModel(props) {
  const { scene } = useGLTF("/models/data_center_rack.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // Change rack color to Tailwind gray-900 (#111827)
        child.material.color.set("#111827");
        child.material.metalness = 0.4; // a bit metallic
        child.material.roughness = 0.6; // softer reflection
      }
    });
  }, [scene]);

  return (
    <primitive object={scene} scale={1.5} position={[0, -1.5, 0]} {...props} />
  );
}
