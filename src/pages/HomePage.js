import React from "react";
import Button from "@mui/material/Button";
import RowAndColumnSpacing from "../components/RowAndColumnSpacing";
import styles from "./HomePage.module.css";
import Calendar from "../components/Calendar"



const HomePage = () => {
  const handleClick = (url) => {
    if (url.startsWith('/')) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  };

  const buttonData = [
    { text: "Epidata", variant: "contained", color: "primary", url: "/epidata" },
    { text: "UTN", variant: "contained", color: "primary", url: "/utn" },
    { text: "Servicios", variant: "contained", color: "primary", url: "/servicios" },
    { text: "Notas Keep", variant: "contained", color: "secondary", url: "https://keep.google.com" },
    { text: "Correo Gmail", variant: "contained", color: "secondary", url: "https://mail.google.com" },
    { text: "Calendar Google", variant: "contained", color: "secondary", url: "https://calendar.google.com" },
  ];
  
  const buttonList = buttonData.map(({ text, variant, color, url }) => (
    <Button key={text} variant={variant} color={color} onClick={() => handleClick(url)}>
      {text}
    </Button>
  ));

  return (

    <div className={styles.container}>
    {/* Fila de botones */}
    <RowAndColumnSpacing buttons={buttonList} />

    {/* Fila del calendario */}
    <div className="row justify-content-center" style={{ width: '100%' }}>
      <Calendar url="https://calendar.google.com/calendar/embed?height=800&wkst=1&ctz=America%2FArgentina%2FBuenos_Aires&showPrint=0&src=dG9ycmVzZmVybmFuZG9nYWJAZ21haWwuY29t&src=ZXMuYXIjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZmVybmFuZG90QGVwaWRhdGFjb25zdWx0aW5nLmNvbQ&color=%23039BE5&color=%234285F4&color=%23EF6C00" />
    </div>
  </div>

    
  );
};

export default HomePage;
