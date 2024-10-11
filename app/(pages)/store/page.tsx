"use client";

import { useRef } from "react";
import HeroShop from "@/components/sections/HeroShop";
import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";
import ProductList from "@/components/sections/ProductList";

const Shop = () => {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavBar heroRef={heroRef} />
      <HeroShop ref={heroRef} />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Shop;
