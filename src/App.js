import logo from './logo.svg';
import { Canvas } from "@react-three/fiber"
import './App.css';
import React, { Suspense } from 'react';
import World from "./Components/World"
import FPSStats from "react-fps-stats";

function App() {
  return (

    <>
    {/* FPS counter on the top left */}
    <FPSStats></FPSStats>

    {/* Waits for the app to load */}
    <Suspense fallback={null}>
      <Canvas shadows>
        <World />
      </Canvas>
    </Suspense>
    </>
  );
}

export default App;
