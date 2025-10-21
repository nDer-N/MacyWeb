import React from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, CircularProgress } from '@mui/material';
import { green, red } from '@mui/material/colors';

export default function Detail() {

  const { id } = useParams();
  const [coin, setCoin] = useState({});

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/" + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en el servidor');
        }
        return response.json();
      })
      .then((data) => {
        setCoin(data);
        console.log(coin);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [])


  console.log(coin.market_data);

  const priceChangeColor = coin.price_change_percentage_24h > 0 ? green[500] : red[500];

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid xs={12} sm={6} md={4}>
        <Card>
          <Box
  component="img"
  src={coin.image?.large}
  alt={coin.name}
  sx={{
    width: '20%',
    height: 'auto',
    display: 'block',
    objectFit: 'contain',
  }}
/>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              {coin.name} ({coin.symbol})
            </Typography>
            {coin?.description?.en && (
              <Typography variant="body2" sx={{ mt: 2 }} component="div">
                {/* Como el texto es HTML, conviene usar dangerouslySetInnerHTML */}
                <div dangerouslySetInnerHTML={{ __html: coin.description.en }} />
              </Typography>
            )}
            <Typography variant="body1" color={priceChangeColor}>
              {coin.market_data?.price_change_percentage_24h}% en las últimas 24h
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Máximo 24h: ${coin.market_data?.high_24h?.usd}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Mínimo 24h: ${coin.market_data?.low_24h?.usd}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Capitalización de Mercado: ${coin.market_data?.market_cap?.usd}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Volumen 24h: ${coin.market_data?.total_volume?.usd}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )


}
