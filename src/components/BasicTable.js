import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function BasicTable({ courses }) {
  console.log("Datos de cursos recibidos en BasicTable:", courses);

  const cellStyles = {
    color: '#ffffff', // Texto claro
    borderColor: '#333333', // Bordes oscuros
  };

  const headerStyles = {
    backgroundColor: '#333333', // Fondo oscuro del encabezado
    color: '#ffffff', // Texto claro del encabezado
  };

  return (
    <TableContainer 
      component={Paper} 
      style={{ maxHeight: '500px', backgroundColor: '#121212' }} // Fondo oscuro y altura máxima
    >
      <Table 
        sx={{ minWidth: 650 }} 
        stickyHeader // Encabezado fijo
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell style={headerStyles}>Curso</TableCell>
            <TableCell align="right" style={headerStyles}>ID</TableCell>
            <TableCell align="right" style={headerStyles}>Inicio</TableCell>
            <TableCell align="right" style={headerStyles}>Fin</TableCell>
            <TableCell align="right" style={headerStyles}>Estado</TableCell>
            <TableCell align="right" style={headerStyles}>Moodle</TableCell>
            <TableCell align="right" style={headerStyles}>Consultas</TableCell>
            <TableCell align="right" style={headerStyles}>Calificaciones</TableCell>
            <TableCell align="right" style={headerStyles}>Examenes</TableCell>
            <TableCell align="right" style={headerStyles}>Autorizaciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <TableRow
              key={course.id}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                backgroundColor: '#1e1e1e', // Fondo de las filas
              }}
            >
              <TableCell component="th" scope="row" style={cellStyles}>
                {course.name}
              </TableCell>
              <TableCell align="right" style={cellStyles}>{course.id}</TableCell>
              <TableCell align="right" style={cellStyles}>{course.start}</TableCell>
              <TableCell align="right" style={cellStyles}>{course.end}</TableCell>
              <TableCell align="right" style={cellStyles}>{course.status}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => window.open(course.moodle, "_blank")}
                >
                  Moodle
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => window.open(course.consultations, "_blank")}
                >
                  Consultas
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => window.open(course.grades, "_blank")}
                >
                  Calificaciones
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => window.open(course.exams, "_blank")}
                >
                  Examenes
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => window.open(course.authorizations, "_blank")}
                >
                  Autorizaciones
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
