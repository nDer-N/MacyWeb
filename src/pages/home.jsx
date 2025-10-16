import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router';

const Home = forwardRef((props, ref) => {

  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en el servidor');
        }
        return response.json();
      })
      .then((data) => {
        setCoins(data);
        
        setVisibleCoins(data.slice(0, 10));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [visibleCoins, setVisibleCoins] = useState(coins.slice(0, 10));

 
  const sortCoins = (order) => {
    const sorted = [...visibleCoins].sort((a, b) => {
      if (order === "asc") return a.current_price - b.current_price;
      else return b.current_price - a.current_price;
    });
    setVisibleCoins(sorted);
  };

  
  const limitCoins = (limit) => {
    if (!limit || limit < 1) setVisibleCoins(coins);
    else setVisibleCoins(coins.slice(0, limit));
  };

  
  useImperativeHandle(ref, () => ({
    sortCoins,
    limitCoins,
  }));




  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {visibleCoins.map((coin) => (
          <Grid size={2} key={coin.id}>
            <Card >
              <CardActionArea sx={{ display: 'flex', justifyContent: 'space-between' }} component={Link} to={'/detail/' + coin.id}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {coin.name}
                    </Typography>
                    <Typography variant="subtitle1" component="div" sx={{ color: 'text.secondary' }}>
                      {coin.symbol}
                    </Typography>
                    <Typography variant="subtitle1" component="div" sx={{ color: 'blue' }}>
                      {coin.current_price} usd
                    </Typography>
                    <Typography variant="subtitle1" component="div" sx={{ color: coin.price_change_percentage_24h < 0 ? 'red' : 'green' }}>
                      {coin.price_change_percentage_24h}
                    </Typography>

                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 151, padding: 2 }}
                  image={coin.image}
                  alt={coin.id}

                />
              </CardActionArea>
            </Card>
          </Grid>

        ))}

      </Grid>
    </Box>
  )
});

export default Home;
