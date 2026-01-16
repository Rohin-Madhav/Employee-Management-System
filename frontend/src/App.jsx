import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ManageEmploye from "./pages/ManageEmploye";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="manage" element={<ManageEmploye />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
