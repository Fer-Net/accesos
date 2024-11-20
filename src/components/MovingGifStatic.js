import React from "react";
import gifImage from "./che.gif"; // Importa el archivo GIF

const MovingGifStatic = ({ src }) => {
  return (
    <img
      src={src} // Usa la variable importada
      alt="Moving GIF"
      style={{
        position: "absolute",
        bottom: "2%", // Espaciado desde la parte inferior (ajusta según prefieras)
        right: "2%",  // Espaciado desde la parte derecha (ajusta según prefieras)
        maxWidth: "20vw", // Máximo 20% del ancho del viewport
        maxHeight: "60vh", // Máximo 20% de la altura del viewport
        width: "auto", // Mantiene las proporciones
        height: "auto",
      }}
    />
  );
};

export default MovingGifStatic;
