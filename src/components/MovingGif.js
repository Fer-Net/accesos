import React, { useEffect, useState } from "react";
import gifImage from "./cha.gif"; // Importa el archivo GIF

const MovingGif = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const moveRandomly = () => {
      const top = Math.random() * (window.innerHeight - 100); // Ajusta el tamaño para evitar salir del viewport
      const left = Math.random() * (window.innerWidth - 100);
      setPosition({ top, left });
    };

    const interval = setInterval(moveRandomly, 1000); // Cambia la posición cada segundo
    return () => clearInterval(interval);
  }, []);

  return (
    <img
    src={gifImage} // Usa la variable importada

      alt="Moving GIF"
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        transition: "top 2.1s, left 2.1s", // Suaviza el movimiento
        width: "200px", // Ajusta el tamaño del GIF
        height: "200px",
      }}
    />
  );
};

export default MovingGif;
