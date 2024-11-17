import React from "react";

const Calendar = ({ url }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // Alinea el contenido al principio del contenedor
        margin: "2rem 0",
        backgroundColor: "#121212", // Fondo oscuro del contenedor
        padding: "1rem",
        borderRadius: "8px",
        width: "100%", // El contenedor ocupa todo el ancho disponible
        flexGrow: 1, // Asegura que el contenedor se expanda para llenar el espacio restante
      }}
    >
      <iframe
        src={url}
        style={{
          width: "100%", // Ancho completo del contenedor
          height: "80vh", // Altura relativa a la ventana
          border: 0,
          borderRadius: "8px", // Bordes redondeados
        }}
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

export default Calendar;
