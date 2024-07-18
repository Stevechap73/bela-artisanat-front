import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header2 = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <Button color="inherit">Profile</Button>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header2;
