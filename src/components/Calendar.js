import React from "react";

const Calendar = ({ url }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '2rem 0',
        backgroundColor: '#121212', // Fondo oscuro del contenedor
        padding: '1rem',
        borderRadius: '8px',
      }}
    >
      <iframe
        src={url}
        style={{ border: 0, borderRadius: '8px' }} // Bordes redondeados
        width="1200"
        height="800"
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

export default Calendar;
