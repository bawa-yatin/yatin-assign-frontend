// Main App component file for rendering the child components followed
// by routing of components

import React from "react";
import ContactNavbar from "./components/Contact Navbar/ContactNavbar";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactNavbar />} />
          <Route path={"*"} element={<Navigate replace to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
