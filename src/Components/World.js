import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Ground from "./Ground";
import Earth from "./Earth";


export default function World() {



    return (
        <>
            {/* Orbital controls for camera movement */}
            <OrbitControls target={[0, 25, 0]} maxPolarAngle={Math.PI / 1.5} />

            {/* Perspective Camera Initialization */}
            <PerspectiveCamera makeDefault fov={50} position={[20, 60, 0]} />

            {/* Black background on the Canvas */}
            <color args={[0, 0, 0]} attach={"background"} />

            {/* Light initialization from some point above */}
            <spotLight
                color={[0.2, 0.5, 0.8]}
                intensity={1.2}
                angle={0.6}
                penumbra={0.5}
                position={[43, 60, 25]}
                castShadow
                shadow-bias={-0.0001}
            />
            <spotLight
                color={[0.24, 0.4, 1]}
                intensity={1.2}
                angle={0.6}
                penumbra={0.5}
                position={[-43, 60, 25]}
                castShadow
                shadow-bias={-0.0001}
            />

            <spotLight
                color={[0.5, 0.4, 0.7]}
                intensity={1.2}
                angle={0.6}
                penumbra={0.5}
                position={[0, 60, -50]}
                castShadow
                shadow-bias={-0.0001}
            />
            

            <Ground />
            <Earth />
        </>
    );
}