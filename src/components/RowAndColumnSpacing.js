import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing({ buttons }) {
  return (
    <Box sx={{ width: '100%' }}> {/* Ajuste para que ocupe todo el ancho */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 0, sm: 2, md: 3 }}>
        {buttons.map((button, index) => (
          <Grid item xs={12} sm={4} key={index}>
            {/* xs=12 para ocupar toda la fila en pantallas pequeñas */}
            <Item>{button}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
