import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import backgroundImage from './../../../house2.png'

export default function ProductHero() {
  return (
    <ProductHeroLayout>
      <img
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center" sx={{ mb: 4, mt: 4 }}>
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 20, mt: 4 }}
      >
        This can be the number counter <br>
        </br>
        This can be the number counter
<br>
</br>
This can be the number counter
<br></br>
      </Typography>
    </ProductHeroLayout>
  );
}
