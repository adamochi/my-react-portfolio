import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Layout from "./screens/Layout";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Portfolio from "./screens/Portfolio";
import Resume from "./screens/Resume";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Route>
    </Routes>
  );
}

export default App;
