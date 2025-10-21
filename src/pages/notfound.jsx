import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';

export default function NotFound() {
    const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f5f5f5',
        p: 3,
      }}
    >
      <Typography variant="h1" component="h1" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Página no encontrada
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
        Lo sentimos, la página que buscas no existe.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        Volver al inicio
      </Button>
    </Box>
  )
}
