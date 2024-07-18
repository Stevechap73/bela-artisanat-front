import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div
      style={{ width: "200px", backgroundColor: "#f4f4f4", height: "100vh" }}
    >
      <List>
        <ListItem button component={Link} href="/admin">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} href="/admin/roles">
          <ListItemText primary="Manage Roles" />
        </ListItem>
        <ListItem button component={Link} href="/admin/users">
          <ListItemText primary="Manage Users" />
        </ListItem>
        <ListItem button component={Link} href="/admin/categories">
          <ListItemText primary="Manage Categories" />
        </ListItem>
        <ListItem button component={Link} href="/admin/products">
          <ListItemText primary="Manage Products" />
        </ListItem>
        <ListItem button component={Link} href="/admin/settings">
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
