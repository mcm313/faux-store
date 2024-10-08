"use client";

import React from "react";
import ArrowDown from "@/public/svg/arrowdown.svg";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = React.forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref} id="hero" className="pt-12 overflow-hidden h-screen">
    <div className="px-6 py-4 h-screen bg-[url('/photos/clothes-dump2.jpg')] bg-cover bg-center md:bg-left">
      <div className="flex flex-col text-3xl md:text-5xl pt-16 md:pt-20 font-extrabold text-gray-800">
        <h2 className="text-shadow-whiteShadow">faux store</h2>
        <Link href="/store">
          <Button className="w-20 h-9 md:h-11 md:text-lg m-2">SHOP</Button>
        </Link>

        <motion.div
          animate={{ y: [0, 40] }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 1.5,
            repeat: 2,
          }}
        >
          <ArrowDown className="h-6 w-6 md:h-8 md:w-8" />
        </motion.div>
      </div>
    </div>
  </section>
));

Hero.displayName = "Hero";

export default Hero;
