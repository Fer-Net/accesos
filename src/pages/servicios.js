import React from "react";
import Button from "../components/Button";
import Message from "../components/Message";
import styles from "./HomePage.module.css";



const servicios = () => {
  const handleClick = () => {
    alert("¡Hola, Epidata por hacer clic!");
  };

  return (

    
    <div className={styles.container}>

      <div className="d-flex justify-content-center align-items-center mb-3">
        <Button className="button" text="Banco Nacion" onClick={() => handleClick("https://hb.redlink.com.ar/bna/login.htm")} />
        <Button className="button" text="Santander" onClick={() => handleClick("https://www2.personas.santander.com.ar/obp-webapp/angular/#!/login")} />
        <Button className="button" text="Galicia" onClick={() => handleClick("https://onlinebanking.bancogalicia.com.ar/login")} />
        <Button className="button" text="Provincia BIP" onClick={() => handleClick("https://www.bancoprovincia.bancainternet.com.ar/spa/")} />
      </div>

      <div className="d-flex justify-content-center align-items-center mb-3">
        <Button className="button" text="Edenor" onClick={() => handleClick("https://naranjax.udemy.com/")} />
        <Button className="button" text="Telecentro" onClick={() => handleClick("https://mail.google.com")} />
        <Button className="button" text="Naturgy" onClick={() => handleClick("https://epidata.odoo.com/es_AR/web/login")} />
        <Button className="button" text="Tel Viso" onClick={() => handleClick("https://epidata.odoo.com/es_AR/web/login")} />
      </div>

      <div className="d-flex justify-content-center align-items-center mb-3">
        <Button className="button" text="Claro" onClick={() => handleClick("https://naranjax.udemy.com/")} />
        <Button className="button" text="Municipalidad" onClick={() => handleClick("https://mail.google.com")} />
        <Button className="button" text="AFIP" onClick={() => handleClick("https://epidata.odoo.com/es_AR/web/login")} />
      </div>

 

    </div>

    
  );
};

export default servicios;
