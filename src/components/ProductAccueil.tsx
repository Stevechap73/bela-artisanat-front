import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Miel Biélorusse",
    description: "Découvrez le goût authentique du miel biélorusse.",
    image: "/image/miel.jpg",
  },
  {
    id: 2,
    name: "Confitures Artisanales",
    description: "Savourez nos confitures faites maison de biélorusse.",
    image: "/image/confiture.jpg",
  },
  {
    id: 3,
    name: "Poteries Uniques",
    description: "Ajoutez une touche de tradition à votre maison biélorusse.",
    image: "/image/poterie.jpg",
  },
];

const ProductSection = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Nos Produits
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Link href="/login" passHref>
              <Card style={{ cursor: "pointer" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductSection;
