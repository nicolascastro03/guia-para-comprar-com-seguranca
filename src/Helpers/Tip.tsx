import React from 'react';
import { ListItem, ListItemText, Typography, Box, Grid } from '@mui/material';

interface TipProps {
  title: string;
  description: any;
  imageUrl?: string;
}

const Tip: React.FC<TipProps> = ({ title, description, imageUrl }) => {
  return (
    <ListItem alignItems="flex-start">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          {imageUrl && (
            <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
          )}
        </Grid>
        <Grid item xs={12} sm={8}>
          <ListItemText
            primary={
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
            }
            secondary={
              <Typography variant="body1" paragraph>
                {description}
              </Typography>
            }
          />
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default Tip;