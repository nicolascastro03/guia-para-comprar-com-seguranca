import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#1976d2', color: 'white' }}>
      <Container maxWidth="md">
        <Typography variant="body1">Feito por Nicolas Rodrigues de Castro</Typography>
        <Typography variant="body2" color="inherit">
          Site desenvolvido para Atividade de Extensão: Tecnologia para todos
        </Typography>
        <Box mt={2}>
          <Typography variant="body2" color="inherit">
            <WhatsAppIcon sx={{ verticalAlign: 'middle', marginRight: '8px' }} />
            <Link href="https://wa.me/5537998694884" color="inherit" underline="none">
              Entre em contato pelo WhatsApp
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
