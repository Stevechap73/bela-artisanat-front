"use client";
import React from "react";
import { Container } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductSection from "@/components/ProductAccueil";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <ProductSection />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
