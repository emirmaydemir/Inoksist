import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ProductDetails from "../pages/ProductDetails";
import PriceList from "../pages/PriceList";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import FastenerListing from "../pages/FastenerListing";
import HardwareListing from "../pages/HardwareListing";
import WaterTankListing from "../pages/WaterTankListing";
import ChemicalsListing from "../pages/ChemicalsListing";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<FastenerListing />} />
      <Route path="/products2" element={<HardwareListing />} />
      <Route path="/products3" element={<ChemicalsListing />} />
      <Route path="/products4" element={<WaterTankListing />} />
      <Route path="/products/:category/:slug" element={<ProductDetails />} />
      <Route path="/products2/:category/:slug" element={<ProductDetails />} />
      <Route path="/products3/:category/:slug" element={<ProductDetails />} />
      <Route path="/products4/:category/:slug" element={<ProductDetails />} />
      <Route path="/price" element={<PriceList />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
