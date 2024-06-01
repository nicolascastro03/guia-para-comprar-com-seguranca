import React from 'react';
import { Box, Typography, Grid, Link as MuiLink } from '@mui/material';
import { ShoppingCart, Store, LocalMall, Public, LocalShipping, AttachMoney } from '@mui/icons-material';

const HelpLinks: React.FC = () => {
  const links = [
    { url: 'https://www.americanas.com', text: 'Americanas', icon: <ShoppingCart /> },
    { url: 'https://www.magazineluiza.com.br', text: 'Magalu', icon: <Store /> },
    { url: 'https://www.mercadolivre.com.br', text: 'Mercado Livre', icon: <LocalMall /> },
    { url: 'https://www.aliexpress.com', text: 'AliExpress', icon: <Public /> },
    { url: 'https://www.pontofrio.com.br', text: 'Ponto', icon: <LocalShipping /> },
    { url: 'https://www.shopee.com.br', text: 'Shopee', icon: <AttachMoney /> },
  ];

  return (
    <Box>     
      <Typography variant="h5" component="h2" gutterBottom mb={4}>
          Links de sites que podem te ajudar na hora da sua compra:
      </Typography>
      <Grid container spacing={2}>
        {links.map((link, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MuiLink href={link.url} target="_blank" rel="noopener noreferrer" underline="hover" display="flex" alignItems="center">
              {link.icon}
              <Box ml={1}>{link.text}</Box>
            </MuiLink>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HelpLinks;
