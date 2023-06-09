import React from "react";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AudioMerge from "./components/AudioMerge";
import ImageConvert from "./components/ImageConvert";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/audio-merge" element={<AudioMerge />} />
          <Route path="/image-convert" element={<ImageConvert />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
