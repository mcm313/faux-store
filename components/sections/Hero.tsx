"use client";

import React from "react";
import Menu from "@/public/svg/threecircles.svg";

const Hero = React.forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref} id="hero" className="pt-12 overflow-hidden h-screen">
    <div className="px-6 py-4 h-screen bg-[url('/photos/clothes-dump2.jpg')] bg-cover bg-center md:bg-left">
      <div className="flex flex-col text-3xl md:text-5xl pt-16 md:pt-20 font-extrabold text-gray-800">
        <Menu className=" h-6 w-6" />
        <h2>faux store</h2>
        <Menu className=" h-6 w-6" />
      </div>
    </div>
  </section>
));

Hero.displayName = "Hero";

export default Hero;
