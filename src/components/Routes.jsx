import {Routes, Route} from "react-router-dom"
import React from 'react';
import Home from "../pages/Home/Home";
import Page404 from "../pages/Page404/Page404";
import FicheLogement from "../pages/FicheLogement/FicheLogement";
import About from "../pages/About/About";

function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FicheLogement/:id" element={<FicheLogement />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    );
  }

  export default AppRoutes;