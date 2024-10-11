"use client";

import { useRef } from "react";
import Hero from "@/components/sections/Hero";
import NavBar from "@/components/sections/NavBar";
import ShopPrev from "@/components/sections/ShopPrev";
import Footer from "@/components/sections/Footer";

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavBar heroRef={heroRef} />
      <Hero ref={heroRef} />
      <ShopPrev />
      <Footer />
    </div>
  );
};

export default Home;
