"use client";
import React from "react";
import Sidebar from "../../components/Sidebar";
import { Container, Box } from "@mui/material";
import Header2 from "@/components/Header2";

const AdminDashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Box style={{ flexGrow: 1 }}>
        <Header2 />
        <Container>
          <h1>Welcome to Admin Dashboard</h1>
          {/* You can add more content here */}
        </Container>
      </Box>
    </div>
  );
};

export default AdminDashboard;
