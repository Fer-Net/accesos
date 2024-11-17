import React from "react";
import Button from "@mui/material/Button";
import styles from "./HomePage.module.css";
import RowAndColumnSpacing from "../components/RowAndColumnSpacing";



const Epidata = () => {
  const handleClick = (url) => {
    if (url.startsWith('/')) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  };

  const buttonData = [
    { text: "Capacitaciones", variant: "contained", color: "primary", url: "https://naranjax.udemy.com/" },
    { text: "Correo Gmail", variant: "contained", color: "secondary", url: "https://mail.google.com" },
    { text: "Oodo", variant: "contained", color: "secondary", url: "https://epidata.odoo.com/es_AR/web/login" },
  ];


  const buttonList = buttonData.map(({ text, variant, color, url }) => (
    <Button key={text} variant={variant} color={color} onClick={() => handleClick(url)}>
      {text}
    </Button>
  ));


  return (

    
    <div className={styles.container}>
      {/* Aquí se inserta el AppBar antes del contenido */}

 
      <RowAndColumnSpacing buttons={buttonList} />


    </div>

    
  );
};

export default Epidata;
