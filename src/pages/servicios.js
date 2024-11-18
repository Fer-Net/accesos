import React from "react";
import Button from "@mui/material/Button";
import RowAndColumnSpacing from "../components/RowAndColumnSpacing";
import styles from "./HomePage.module.css";



const servicios = () => {
  const handleClick = (url) => {
    if (url.startsWith('/')) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  };

  const buttonData = [
    { text: "Banco Nacion", variant: "contained", color: "secondary", url: "https://hb.redlink.com.ar/bna/login.htm" },
    { text: "Santander", variant: "contained", color: "secondary", url: "https://www2.personas.santander.com.ar/obp-webapp/angular/#!/login" },
    { text: "Galicia", variant: "contained", color: "secondary", url: "https://onlinebanking.bancogalicia.com.ar/login" },
    { text: "Provincia BIP", variant: "contained", color: "secondary", url: "https://www.bancoprovincia.bancainternet.com.ar/spa/" },
    { text: "Edenor", variant: "contained", color: "primary", url: "https://www.edenordigital.com/ingreso" },
    { text: "Telecentro", variant: "contained", color: "primary", url: "https://telecentro.com.ar/sucursal-virtual/login" },
    { text: "Naturgy", variant: "contained", color: "primary", url: "https://ov.naturgy.com.ar/ingreso" },
    { text: "Tel Viso", variant: "contained", color: "primary", url: "https://micuenta.telviso.com.ar/#/login" },
    { text: "Claro", variant: "contained", color: "primary", url: "https://ingreso.claro.com.ar/auth/realms/claro/protocol/openid-connect/auth?response_type=code&client_id=mi-claro-backend&scope=openid%20profile%20email%20linea_scope%20email_scope%20miclaro.claro.amx/api:rw%20ums.claro.amx/user:r&state=rnBQdjhdUXB4WXsvPkNlrXTa1HKp-jUYEfKMNZeJJoA%3D&redirect_uri=https://m-miclaro.claro.com.ar/login/oauth2/code/idp&nonce=tMDxEAiH9bgaGdDWITNQ_YlzA-zxH3F3u_sWCL0jA84" },
    { text: "Municipalidad", variant: "contained", color: "primary", url: "https://autogestion.pilar.gov.ar/" },
    { text: "ARCA", variant: "contained", color: "primary", url: "https://auth.afip.gob.ar/contribuyente_/login.xhtml" },
  ];
  
  const buttonList = buttonData.map(({ text, variant, color, url }) => (
    <Button key={text} variant={variant} color={color} onClick={() => handleClick(url)}>
      {text}
    </Button>
  ));
  

  return (

    
    <div className={styles.container}>

          <RowAndColumnSpacing buttons={buttonList} />

 

    </div>

    
  );
};

export default servicios;
