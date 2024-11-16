import React from "react";
import Button from "../components/Button";
import Message from "../components/Message";
import styles from "./HomePage.module.css";



const HomePage = () => {
  const handleClick = () => {
    alert("¡Hola, gracias por hacer clic!");
  };

  return (

    
    <div className={styles.container}>
      {/* Aquí se inserta el AppBar antes del contenido */}

      <Message text="¡Bienvenido a mi página de inicio!" />
      <Button text="Haz clic aquí" onClick={handleClick} />
    </div>

    
  );
};

export default HomePage;
