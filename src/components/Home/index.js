import React from "react";
import "./index.scss";
import Loader from "react-loaders";
/* 3D stuff */
// import Boxtwo from "../Boxtwo";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

const Home = () => {
  return (
    <div className="homepage">
      <Loader type="ball-clip-rotate-multiple" />
    </div>
  );
};

export default Home;
