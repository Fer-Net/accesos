import React from "react";
import Button from "../components/Button";
import Message from "../components/Message";
import styles from "./HomePage.module.css";



const Epidata = () => {
  const handleClick = () => {
    alert("¡Hola, Epidata por hacer clic!");
  };

  return (

    
    <div className={styles.container}>
      {/* Aquí se inserta el AppBar antes del contenido */}

      <div className="d-flex justify-content-center align-items-center mb-3">
        <Button className="button" text="Capacitaciones" onClick={() => handleClick("https://naranjax.udemy.com/")} />
        <Button className="button" text="Correo gmail" onClick={() => handleClick("https://mail.google.com")} />
        <Button className="button" text="Oodo" onClick={() => handleClick("https://epidata.odoo.com/es_AR/web/login")} />
      </div>


    </div>

    
  );
};

export default Epidata;
