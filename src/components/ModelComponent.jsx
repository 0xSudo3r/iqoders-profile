import { useGLTF } from "@react-three/drei";

export default function Model(props) {
    const { scene } = useGLTF("/models/data_center_rack.glb");
    return <primitive object={scene} {...props} />;
}
