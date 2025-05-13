import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Ex01 from "./Component/Ex01";
import Ex03 from "./Component/Ex03";
import Ex02 from "./Component/Ex02";
import Ex04 from "../Ex04";
import Contact from "./Component/Contact";
import ComponentHeader from "./Component/ComponentHeader";
import Detail from "./Component/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ex01" element={<Ex01 />} />
        <Route path="/login" element={<Ex02 />} />
        <Route path="/Ex04" element={<Ex04 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Ex05" element={<ComponentHeader />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Ex03 />} />
      </Routes>
    </>
  );
}

export default App;
