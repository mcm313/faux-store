"use client";

import React from "react";

const HeroShop = React.forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref} id="hero-shop" className="pt-12">
    <div className="px-6 py-4 min-h bg-[url('/photos/clothes-dump.jpg')] bg-cover bg-center md:bg-left">
      <div className="flex flex-col text-3xl md:text-5xl pt-16 md:pt-20 font-extrabold text-gray-800">
        <h2 className="text-shadow-whiteShadow">Shop</h2>
      </div>
    </div>
  </section>
));

HeroShop.displayName = "Hero Shop";

export default HeroShop;
