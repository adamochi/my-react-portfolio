import React, { Suspense } from "react";
import "./index.scss";
import Loader from "react-loaders";
import profile from "../../assets/images/nexen.png";
/* 3D stuff */
// import Box from "../Box";
import Boxtwo from "../Boxtwo";
// import Cheflaptop from "../Cheflaptop";
// import Oldpc from "../Oldpc";
// import AnimatedChef from "../Animatedchef";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
  return (
    <div className="homepage container">
      <Canvas className="canvas">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Boxtwo />
        </Suspense>
      </Canvas>
      {/* <Canvas>
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.9} />
        <directionalLight position={[1, 4, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box rotation={[90, 0, 20]} />
        </Suspense>
      </Canvas> */}

      <h4>Hello, I'm an aspiring Web Developer based in Australia!</h4>
      <h1>Adam Sullivan</h1>
      <img className="profile-pic" src={profile} alt="Adam Sullivan" />
      <Loader type="ball-clip-rotate-multiple" />
    </div>
  );
};

export default Home;
