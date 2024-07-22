// components/Header.js
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const HeaderAccueil = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          BELA ARTISANATS - Produits Biélorusses
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderAccueil;
