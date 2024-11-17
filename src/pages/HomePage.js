import React from "react";
import Button from "../components/Button";
import Message from "../components/Message";
import styles from "./HomePage.module.css";
import Calendar from "../components/Calendar"



const HomePage = () => {
  const handleClick = (url) => {
    window.open(url, "_blank"); // Abre la URL en una nueva pestaña
  };
  return (

<div className={styles.container}>
  {/* Fila de botones */}
  <div className="d-flex justify-content-center align-items-center mb-3">
  <Button className="button" text="Notas keep" onClick={() => handleClick("https://keep.google.com")} />
        <Button className="button" text="Correo gmail" onClick={() => handleClick("https://mail.google.com")} />
        <Button className="button" text="Calendar google" onClick={() => handleClick("https://calendar.google.com")} />
</div>



  {/* Fila del calendario */}
  <div className="row justify-content-center">
    <Calendar url="https://calendar.google.com/calendar/embed?height=800&wkst=1&ctz=America%2FArgentina%2FBuenos_Aires&showPrint=0&src=dG9ycmVzZmVybmFuZG9nYWJAZ21haWwuY29t&src=ZXMuYXIjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZmVybmFuZG90QGVwaWRhdGFjb25zdWx0aW5nLmNvbQ&color=%23039BE5&color=%234285F4&color=%23EF6C00" />
  </div>
</div>


    
  );
};

export default HomePage;
