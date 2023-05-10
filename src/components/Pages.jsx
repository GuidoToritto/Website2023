import React from "react";
import { Routes, Route } from "react-router-dom";
import { AboutMe } from "./Pages/AboutMe";
import { Home } from "./Pages/Home";
import { Clothes } from "./Pages/Clothes";
import { Work } from "./Pages/Work";

export const Pages = () => {
  return (
    <section>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/home" element={<Home />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </section>
  );
};