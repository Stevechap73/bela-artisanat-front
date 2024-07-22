"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderEcommerce from "@/components/HeaderEcommerce";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HeaderEcommerce />
      {children}
      <Footer />
    </div>
  );
}
