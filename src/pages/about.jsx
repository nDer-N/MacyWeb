import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import Paper from '@mui/material/Paper';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";


export default function About() {
    return (
        <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        p: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: 800,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight={600}>
          About This App
        </Typography>

        <Divider sx={{ mb: 4, bgcolor: "primary.main", opacity: 0.3 }} />

        <Grid container spacing={3}>
          {/* Tarjeta 1 */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <InfoOutlinedIcon
                color="primary"
                sx={{ fontSize: 48, mb: 1 }}
              />
              <Typography variant="h6" gutterBottom>
                ¿Qué hace esta aplicación?
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Esta aplicación muestra una lista de criptomonedas con sus
                precios actuales, permitiendo ordenarlas de forma ascendente o
                descendente, además de limitar la cantidad de elementos visibles
                para un mejor control visual.
              </Typography>
            </Paper>
          </Grid>

          {/* Tarjeta 2 */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <AssessmentOutlinedIcon
                color="secondary"
                sx={{ fontSize: 48, mb: 1 }}
              />
              <Typography variant="h6" gutterBottom>
                Propósito del proyecto
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Su objetivo es ofrecer una vista simple, moderna e interactiva
                para explorar valores de mercado en tiempo real utilizando React
                y Material UI, demostrando buenas prácticas de diseño y
                desarrollo front-end.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
