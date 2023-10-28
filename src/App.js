import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./Game";
import Results from "./Result";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/game" element={<Game />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
