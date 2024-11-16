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
  <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
    5 razones por las cuales Belén debe usar kimono
  </h1>
  <ol style={{ fontSize: '1.5rem', lineHeight: '2.5rem', listStyleType: 'decimal', paddingLeft: '2rem' }}>
    <li>
      ✨ <strong>Te convertirás automáticamente en una prota de isekai.</strong><br />
      (¡Falta que te atropelle el 203!)
    </li>
    <br />
    <li>
      🍣 <strong>El sushi sabrá mejor cuando lo comas vestida para la ocasión.</strong><br />
      (Es ciencia, no opinión).
    </li>
    <br />
    <li>
      🎎 <strong>Estarás lista para ir a Japon.</strong><br />
      (Solo te faltan 10 millones de pesos para hospedarte 1 semana de pedo).
    </li>
    <br />
    <li>
      🌀 <strong>Es más cómodo que un pantalón negro de bengalina.</strong><br />
      (No sé qué es la bengalina).
    </li>
    <br />
    <li>
      🦸‍♀️ <strong>Si lo usas te van a invitar a los fuegos artificiales de fin de año.</strong><br />
      (Y después se te va a romper una sandalia).
    </li>
  </ol>
</div>

    
  );
};

export default HomePage;
