import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./container/home/home";
import Dashboard from "./admin/container/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
