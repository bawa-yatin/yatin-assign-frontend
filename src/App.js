import React from "react";
import ContactNavbar from "./components/Contact Navbar/ContactNavbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactNavbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
