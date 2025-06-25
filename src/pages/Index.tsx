import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sport from "@/components/Sport";
import Training from "@/components/Training";
import Results from "@/components/Results";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Sport />
      <Training />
      <Results />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
