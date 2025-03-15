// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; 
import HomePage from "./pages/HomePage"; 
import Utn from "./pages/utn";  
import Servicios from "./pages/servicios";  

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<HomePage />} />  
          <Route path="accesos" element={<HomePage />} />
          <Route path="utn" element={<Utn />} />
          <Route path="servicios" element={<Servicios />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
