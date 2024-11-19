import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import RowAndColumnSpacing from "../components/RowAndColumnSpacing";
import styles from "./HomePage.module.css";
import BasicTable from "../components/BasicTable";
import cursos from '../components/cursos.json';
import BasicTextFields from '../components/BasicTextFields';

const Utn = () => {
  const [courses, setCourses] = useState([]);
  const [urls, setUrls] = useState([]); 
  const [id, setId] = useState(''); 

  const handleInputChange = (value) => {
    setId(value); // Actualiza el estado del ID
  };

  const handleClickByID = (id) => {
    if (!id || isNaN(Number(id))) {
      alert('Por favor, ingresa un ID válido.');
      return;
    }

    const url = `https://www.elearning-total.com/campus/enrol/index.php?id=${id}`;
    console.log('Abriendo URL:', url);
    window.open(url, "_blank");
  };

  useEffect(() => {
    setCourses(cursos);

    const consultationsUrls = cursos
      .filter(course => course.status === "en curso")
      .map(course => course.consultations);

    setUrls(consultationsUrls);
  }, []);

  const handleClickMultipleURLs = (urls) => {
    urls.forEach((url, index) => {
      setTimeout(() => {
        window.open(url, "_blank");
      }, index * 300);
    });
  };

  const buttonData = [
    { text: "Totaldoc", variant: "contained", color: "secondary", url: "https://www.elearning-total.com/totaldoc/admin.php" },
    { text: "Web mail", variant: "contained", color: "secondary", url: "https://webmail.elearning-total.com/?_task=mail&_mbox=INBOX" },
    { text: "Moodle", variant: "contained", color: "secondary", url: "https://www.elearning-total.com/campus/login/index.php" }
  ];

  const buttonList = [
    ...buttonData.map(({ text, variant, color, url }) => (
      <Button key={text} variant={variant} color={color} onClick={() => window.open(url, "_blank")}>
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
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <BasicTextFields onInputChange={handleInputChange} />
      <Button
        key="acceder"
        variant="contained"
        color="secondary"
        onClick={() => handleClickByID(id)}
      >
        Acceder
      </Button>
    </div>
      <BasicTable courses={courses} />
    </div>
  );
};

export default Utn;
