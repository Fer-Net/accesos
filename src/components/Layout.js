import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";  // Barra de navegación
import { Outlet } from "react-router-dom";  // Para renderizar las páginas aquí
import styles from "./Layout.module.css";  // Importa los estilos
import MovingGifStatic from "./MovingGifStatic"; // Asegúrate de que la ruta sea correcta
import gifImage from "./che.gif"; // Importa el archivo GIF

const Layout = () => {
  return (
    <div className={styles.layout}>
      {/* Barra de menú (AppBar) visible en todas las páginas */}
      <ResponsiveAppBar />

      {/* El contenido de las páginas se renderiza aquí */}
      <main className={styles.mainContent}>
        <Outlet /> {/* Aquí se renderizarán las páginas de rutas hijas */}
        <MovingGifStatic src={gifImage} />

      </main>
    </div>
  );
};

export default Layout;

