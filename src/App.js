// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";  // Importa el layout
import HomePage from "./pages/HomePage";  // Importa la página principal
import Epidata from "./pages/Epidata";  // Importa la página principal

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Definimos el Layout para que esté en todas las rutas anidadas */}
        <Route path="/" element={<Layout />}>
          {/* Aquí renderizamos HomePage en el Outlet cuando estamos en la ruta raíz */}
          <Route index element={<HomePage />} />  {/* Esta es la página de inicio */}
          {/* Y también podemos renderizar HomePage en otras rutas */}
          <Route path="accesos" element={<HomePage />} />
          <Route path="epidata" element={<Epidata />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
