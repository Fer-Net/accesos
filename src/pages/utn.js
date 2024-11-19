import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import RowAndColumnSpacing from "../components/RowAndColumnSpacing";
import styles from "./HomePage.module.css";
import BasicTable from "../components/BasicTable";
import cursos from '../components/cursos.json';

const Utn = () => {
  const [courses, setCourses] = useState([]);
  const [urls, setUrls] = useState([]); // Estado para guardar las URLs

  // Función para manejar el clic en los botones
  const handleClick = (url) => {
    if (url.startsWith('/')) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  };

  const handleClickMultipleURLs = (urls) => {
    console.log(urls);
  
    // Abrir cada URL en una nueva pestaña con un retraso para evitar bloqueos
    urls.forEach((url, index) => {
      setTimeout(() => {
        window.open(url, "_blank");
      }, index * 300); // Retraso de 300ms entre cada apertura
    });
  };
  
  

  // Actualizar cursos y URLs al montar el componente
  useEffect(() => {
    setCourses(cursos);

    // Filtrar cursos en curso y extraer las URLs de consultations
    const consultationsUrls = cursos
      .filter(course => course.status === "en curso") // Filtrar por status
      .map(course => course.consultations); // Extraer consultations

    setUrls(consultationsUrls); // Guardar las URLs en el estado
  }, []); // Se ejecuta solo al montar el componente

  // Datos de los botones
  const buttonData = [
    { text: "Totaldoc", variant: "contained", color: "secondary", url: "https://www.elearning-total.com/totaldoc/admin.php" },
    { text: "Web mail", variant: "contained", color: "secondary", url: "https://webmail.elearning-total.com/?_task=mail&_mbox=INBOX" },
    { text: "Moodle", variant: "contained", color: "secondary", url: "https://www.elearning-total.com/campus/login/index.php" }
  ];

  const buttonList = [
    ...buttonData.map(({ text, variant, color, url, onClick }) => (
      <Button key={text} variant={variant} color={color} onClick={onClick || (() => handleClick(url))}>
        {text}
      </Button>
    )),
    <Button
      key="Consultas"
      variant="contained"
      color="secondary"
      onClick={() => handleClickMultipleURLs(urls)}
    >
      Consultas
    </Button>
  ];

  return (
    <div className={styles.container}>
      <RowAndColumnSpacing buttons={buttonList} />
      {/* Renderizando la tabla con los cursos */}
      <BasicTable courses={courses} />
    </div>
  );
};

export default Utn;
