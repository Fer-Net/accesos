import React from "react";
import Button from "@mui/material/Button";
import RowAndColumnSpacing from "../components/RowAndColumnSpacing";
import styles from "./HomePage.module.css";
import Calendar from "../components/Calendar"
import {GoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from "react";
import Utn from "./utn"



const HomePage = () => {

  const [isAuthenticated , setIsAuthenticated] = useState(false);   
  const [userData , setUserData] = useState(null);

  function comprobarAuth(){
    const token = localStorage.getItem("google_token");

    if(token){
      setIsAuthenticated(true);
      const decoded = decodeJwt(token );
      setUserData(decoded);
    }

  }

  useEffect( comprobarAuth , []);


  const handleLogout = () => {
    console.log("bye")
    localStorage.removeItem("google_token"); // Elimina el token
    setIsAuthenticated(false);
    setUserData(null);
  };

  const handleClick = (url) => {
    if (url.startsWith('/')) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  };

  const buttonData = [
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


   

      {/* Fila de botones
      
       <div>
      

    <h1>Bienvenido {isAuthenticated ? userData.name : "a la app"}</h1>

      { !isAuthenticated ? (

            <GoogleLogin
                  
            onSuccess={(response) => {
              console.log("Inicio de sesión exitoso", response);
              const token = response.credential;
              console.log(token);
              // (Opcional) Decodificar el token (para obtener más información)
              const decodedToken = decodeJwt(token);
              console.log("Información del usuario decodificada:", decodedToken);

              // Guardar el token en localStorage para persistir la sesión
              localStorage.setItem("google_token", token);

                            // Actualizar el estado de autenticación y los datos del usuario
              setIsAuthenticated(true);
              setUserData(decodedToken); 
            }}

            onError={() => { 
              console.log("Error al iniciar sesión");

            }}

            />
      )  :    (
        <div>
        <p>Bienvenido, {userData.name}</p>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>


       ) }
     

    </div>*/}

    <Utn/>

    {/* Fila de botones   <RowAndColumnSpacing buttons={buttonList} />*/}
  
    {/* <MovingGif /> <MovingGifStatic src={gifImage} />*/ }
    
    

    {/* Fila del calendario     {isAuthenticated ? (
    
    <div className="row justify-content-center" style={{ width: '100%' }}>
      <Calendar url="https://calendar.google.com/calendar/embed?height=800&wkst=1&ctz=America%2FArgentina%2FBuenos_Aires&showPrint=0&src=dG9ycmVzZmVybmFuZG9nYWJAZ21haWwuY29t&src=ZXMuYXIjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZmVybmFuZG90QGVwaWRhdGFjb25zdWx0aW5nLmNvbQ&color=%23039BE5&color=%234285F4&color=%23EF6C00" />
    </div>
     ) : null
    }*/}

   
    


  </div>

    
  );
};

// Función para decodificar el JWT (si lo necesitas)
const decodeJwt = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};


export default HomePage;
