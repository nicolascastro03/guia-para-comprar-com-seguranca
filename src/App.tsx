import React from 'react';
import { Container, Typography, Box, List, CssBaseline, AppBar, Toolbar, Grid, Link as MuiLink } from '@mui/material';
import ShoppingBag from '@mui/icons-material/ShoppingBag';
import HelpLinks from './Helpers/HelpLinks';
import Tip from './Helpers/Tip';
import Footer from './Helpers/Footer';

const App: React.FC = () => {
  const tips = [
    {
      title: "Compre apenas em sites confiáveis e verifique a reputação da loja",
      description: (
        <div>
          <p>
            Verifique se o site possui certificação de segurança, como HTTPS, essa informação você confere no início do link do site. Procure por avaliações e comentários de outros usuários em sites como o
            <MuiLink href='https://www.reclameaqui.com.br/' target="_blank" rel="noopener noreferrer"> Reclame Aqui</MuiLink>.
          </p>
        </div>
      ),
      imageUrl: "https://www.kaspersky.com.br/content/pt-br/images/repository/isc/2021/typosquatting_1.jpg"
    },
    {
      title: "Utilize cartões virtuais para aumentar a segurança das transações",
      description: "Cartões virtuais são uma maneira segura de fazer compras online, pois podem ser usados uma única vez ou por um período limitado, reduzindo o risco de fraudes. Você consegue gerá-lo no aplicativo do seu banco.",
      imageUrl: "https://img.freepik.com/vetores-premium/pague-com-cartao-de-credito-via-carteira-eletronica-no-telefone-aplicativo-de-mobile-banking-pagamento-sem-contato-mao-segura-smartphone-com-cartao-de-banco-virtual-compras-por-telefone-e-cartao-de-credito-conectado-dinheiro-digital_458444-450.jpg"
    },
    {
      title: "Mantenha seu antivírus atualizado e ativo",
      description: "Um bom antivírus pode ajudar a proteger seu computador contra malwares e outras ameaças que podem comprometer suas informações pessoais e financeiras.",
      imageUrl: "https://img.freepik.com/vetores-gratis/projeto-do-fundo-do-antivirus_1212-317.jpg"
    },
    {
      title: "Evite fazer compras em redes Wi-Fi públicas",
      description: "Redes Wi-Fi públicas são menos seguras e podem ser facilmente interceptadas por hackers. Prefira fazer compras em redes privadas e seguras.",
      imageUrl: "https://img.freepik.com/vetores-premium/conexao-sem-fio-publica-da-zona-do-ponto-quente-do-wifi-livre-ilustracao-do-negocio_114835-125.jpg"
    },
    {
      title: "Desconfie de ofertas muito abaixo do preço de mercado",
      description: "Ofertas extremamente baratas podem ser um indicativo de fraudes. Sempre verifique a autenticidade do site e desconfie de preços muito baixos. É sempre bom conferir os preços em 2 ou mais sites para verificar se está dentro do preço que realmente é vendido na internet.",
      imageUrl: "https://img.freepik.com/vetores-premium/alerta-de-fraude-ataque-de-hackers-e-conceito-de-vetor-de-seguranca-na-web-golpe-de-phishing-rede-e-seguranca-na-internet-ilustracao-em-vetor_545399-1175.jpg"
    }
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <ShoppingBag style={{ marginRight: '8px', fontSize: '30px' }} />
          <Typography variant="h6">Guia de Compras Seguras</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Box my={4} style={{ backgroundColor: '#1976d2', padding: '16px', borderRadius: '8px' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom style={{ color: 'white' }}>
                Guia para Comprar Online com Segurança
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src="https://intervel.com.br/wp-content/uploads/2021/03/compras-oline-1024x576.png" alt="Compras Seguras" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            </Grid>
          </Grid>
        </Box>
        <Box my={4}>
          <Typography variant="body1" paragraph>
            Comprar online é uma conveniência incrível, mas é importante seguir algumas dicas de segurança para garantir que suas compras sejam seguras. Nessa página vou te dar algumas dicas e te mostrar alguns sites que podem te ajudar na hora de comprar na internet!
          </Typography>
        </Box>
        <Box my={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            Aqui vai algumas dicas:
          </Typography>
          <List>
            {tips.map((tip, index) => (
              <Tip key={index} title={tip.title} description={tip.description} imageUrl={tip.imageUrl} />
            ))}
          </List>
        </Box>
        <Box mt={6}>
          <HelpLinks />
        </Box>
      </Container>
      <Box mt={8}>
        <Footer />
      </Box>
    </React.Fragment>
  );
};

export default App;
