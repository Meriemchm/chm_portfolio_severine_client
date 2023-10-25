// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Meeting from "./components/Meeting/Meeting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Rendez-vous" element={<Meeting />} />
      </Routes>
    </Router>
  );
}

export default App;
