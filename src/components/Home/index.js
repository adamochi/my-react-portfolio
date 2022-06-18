import React from "react";
import "./index.scss";
import Loader from "react-loaders";
import Box from "../Box";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Canvas>
        <Box />
      </Canvas>

      <Loader type="pacman" />
    </div>
  );
};

export default Home;
