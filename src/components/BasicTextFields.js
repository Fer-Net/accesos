import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({ onInputChange }) {
  return (
<Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>
  <TextField
    id="outlined-basic"
    label="ID del curso"
    variant="filled" // Cambiar la variante a "filled"
    sx={{
      backgroundColor: "#f5f5f5", // Color claro para el fondo
      borderRadius: "4px", // Suavizar bordes
    }}
    onChange={(event) => onInputChange(event.target.value)} // Llama a la función al cambiar el valor
  />
</Box>

  );
}
