// Main App component file for rendering the child components followed
// by routing of components

import React from "react";
import HomePage from "./components/Home/HomePage";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={"*"} element={<Navigate replace to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
