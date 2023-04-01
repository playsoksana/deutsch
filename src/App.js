import React, { useEffect, useState } from "react";

import Words from "./components/Pages/Words/index.js";
import Sentens from "./components/Pages/Sentens/index.js";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



import './App.css';




function App() {


  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/sentens">Sätze</Link>
      <Routes>
        <Route path="/" element={<Words />} />
        <Route path="/sentens" element={<Sentens />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
