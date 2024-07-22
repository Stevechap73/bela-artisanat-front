"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { RegisterForm } from "@/components/registerForm";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default page;
