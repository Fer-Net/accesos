import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import RowAndColumnSpacing from "../components/RowAndColumnSpacing";
import styles from "./HomePage.module.css";
import BasicTable from "../components/BasicTable";
import cursos from '../components/cursos.json';


// Cambia el nombre de la función a Utn
const Utn = () => {
  const [courses, setCourses] = useState([]);

  // Función para manejar el clic en los botones
  const handleClick = (url) => {
    if (url.startsWith('/')) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  };

  
   useEffect(() => {
      setCourses(cursos);
   }, []);

   
  
   // useEffect(() => {
   //   setCourses(cursos);
  //  }, []);

  //  useEffect(() => {
  //    const mockCourses = [
   //     { id: 1, name: "Curso 1", description: "Descripción del curso 1" },
   //     { id: 2, name: "Curso 2", description: "Descripción del curso 2" },
   //   ];
    
    //  setCourses(mockCourses);
  //  }, []);
  

  // Datos de los botones
  const buttonData = [
    { text: "Totaldoc", variant: "contained", color: "secondary", url: "https://www.elearning-total.com/totaldoc/admin.php" },
    { text: "Web mail", variant: "contained", color: "secondary", url: "https://webmail.elearning-total.com/?_task=mail&_mbox=INBOX" },
    { text: "Moodle", variant: "contained", color: "secondary", url: "https://www.elearning-total.com/campus/login/index.php" }
  ];

  const buttonList = buttonData.map(({ text, variant, color, url }) => (
    <Button key={text} variant={variant} color={color} onClick={() => handleClick(url)}>
      {text}
    </Button>
  ));

  return (
    <div className={styles.container}>
      <RowAndColumnSpacing buttons={buttonList} />
      {/* Renderizando la tabla con los cursos */}
      <BasicTable courses={courses} />

     
      
    </div>
  );
};

export default Utn;  // Asegúrate de exportar el componente con la primera letra mayúscula
