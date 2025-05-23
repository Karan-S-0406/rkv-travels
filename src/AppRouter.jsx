import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vehicles from "./components/VehicleCard";
import IPL from "./components/IPLSection";
import Contact from "./components/ContactSection";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ipl" element={<IPL />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRouter;