import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalFacturacion() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            

Les damos la bienvenida al Curso de Programación KIDS Nivel 3!

A continuación les enviamos información relevante para comenzar con el curso.



1- Sobre la autorización de participación para poder comenzar:

En primer lugar, deberán descargarse el PDF "Autorización a completar", completarlo de forma manuscrita y volverlo a subir a la plataforma para continuar. Este documento deberá ser firmado en original, digitalizado o sacarle una foto, y subirlo en la tarea llamada “Entrega de autorización de participación”.



Se deberá subir además foto del DNI del adulto responsable y firmante del documento de autorización.



Este documento hace que el mayor responsable del niño, dé conformidad de participación del menor. Luego de hacerlo, las clases en vivo y las diferentes unidades comenzarán en las fechas que les serán comunicadas.



El plazo máximo para su presentación es de 48 hs. A las 72 hs,, se suspenderá la matrícula de quienes no lo presentaron sin derecho a reclamo alguno.



Si por algún inconveniente se encuentra con problemas para subir la documentación o no pudo hacerlo, o en el caso de ser suspendido nos deben comunicar por correo electrónico al mail sspengler@elearning-total.com.



2- Sobre el curso:

Clase en vivo de presentación - 03/02/2025 a las 18:00 hs

Clase en VIVO - Unidad I -  04/02/2025 a las 18:00 hs

Clase en VIVO - Unidad II -  10/02/2025 a las 18:00 hs

Clase en VIVO - Unidad III - 17/02/2025 a las 18:00 hs

Clase en VIVO - Unidad IV -  24/02/2025 a las 18:00 hs



Clase en vivo de presentación - 03/02/2025 a las 18:00 hs
Enlace de conexión en la sección VIVO del curso y aquí:

https://www.elearning-total.com/campus/mod/bigbluebuttonbn/view.php?id=438414



IMPORTANTE: La duración de las clases dependerá de la cantidad de consultas de los estudiantes. Recuerde que las clases en vivo son para responder dudas.



El curso finaliza el 3 de marzo.
 Y tendrá acceso al material hasta 10 días después de finalizar el mismo.

La totalidad de las clases serán grabadas por seguridad y para que los alumnos las vean las veces que lo deseen o en el caso de que no pueda asistir.

No se admite el uso de cámara web por parte de los alumnos, y que en caso de el alumno activarla será responsabilidad del adulto responsable, el desactivarla.

Recuerde que encontrará todos los accesos en la sección VIVO del curso.



3- Sobre la evaluación del curso:

 Los alumnos serán evaluados por los cuestionarios/trabajos prácticos/tareas asignadas a cada unidad. Para aprobar el curso y recibir el certificado tendrás que obtener un promedio igual o mayor a 70%.



Importante: el material didáctico del curso se encontrará visible luego de la clase de presentación, y solo para aquellos que hayan entregado la autorización.

Ante cualquier duda nos pueden escribir.



Les recomendamos ver el video de Bienvenida dónde se explica todo en detalle.

Saludos!!!
          </Typography>


        </Box>
      </Modal>
    </div>
  );
}
