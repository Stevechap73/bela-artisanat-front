"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LoginForm } from "@/components/loginForm";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default page;
