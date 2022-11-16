import React from "react";
import { useFrame } from "@react-three/fiber";

export default function Earth() {

    const earthMesh = React.useRef(); // reference of the earth

    useFrame(({clock}) => {
        // time in seconds
        const t = clock.elapsedTime;

        earthMesh.current.rotation.x = t;
        earthMesh.current.rotation.z = t;
        earthMesh.current.rotation.y = t;

    });

    return (
        <mesh ref={earthMesh} position={[0, 25, 0]}>
            <boxGeometry args={[17, 17, 17]} />
            <meshStandardMaterial


            />
        </mesh>

    );

}