import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "App.scss";

import Home from "screens/Home";
import Layout from "screens/Layout";

const About = lazy(() => import("screens/About"));
const Contact = lazy(() => import("screens/Contact"));
const Portfolio = lazy(() => import("screens/Portfolio"));
const Resume = lazy(() => import("screens/Resume"));
const ToDotest = lazy(() => import("screens/todotest"));
const Curriculum = lazy(() => import("screens/Curriculum"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/todo" element={<ToDotest />} />
        <Route path="/curriculum" element={<Curriculum />} />
      </Route>
    </Routes>
  );
}

export default App;
