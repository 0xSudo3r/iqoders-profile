import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function RackModel({ scale = 1.0, ...props }) {
  const { scene } = useGLTF("/models/data_center_rack.glb");

  useEffect(() => {
    if (scene) {
      scene.scale.set(scale, scale, scale);
    }
  }, [scene, scale]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        // Change rack color to the theme's secondary color
        child.material.color.set("#0a0701");
        child.material.metalness = 0.4; // a bit metallic
        child.material.roughness = 0.6; // softer reflection
      }
    });
  }, [scene]);

  // The scale prop is now handled by the useEffect hook above
  return (
    <primitive object={scene} position={[0, -1.5, 0]} {...props} />
  );
}
