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

      <Message text="Epidata a mi Epidata de Epidata!" />
      <Button text="Haz clic aquí" onClick={handleClick} />
    </div>

    
  );
};

export default Epidata;
