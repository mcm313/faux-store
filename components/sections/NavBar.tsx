"use client";

import { useEffect, useState } from "react";
import Menu from "@/public/svg/threecircles.svg";
import { motion } from "framer-motion";

interface NavbarProps {
  heroRef: React.RefObject<HTMLElement>; // Reference to the Hero section
}

const NavBar: React.FC<NavbarProps> = ({ heroRef }) => {
  const [isHeroDone, setIsHeroDone] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom ?? 0;

      // If the Hero section has scrolled past the viewport
      if (heroBottom <= 0) {
        setIsHeroDone(true);
      } else {
        setIsHeroDone(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroRef]);

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <nav className="fixed w-full">
      <div className="px-6 py-4 bg-gray-400 flex justify-between items-center text-white">
        <div className="flex items-center gap-2 h-5 md:h-11">
          <Menu className="h-6 w-6" />
          <motion.h1
            className="text-xl md:text-3xl"
            initial="hidden"
            animate={isHeroDone ? "visible" : "exit"}
            variants={fadeVariants}
            transition={{ ease: "easeIn", duration: 0.5 }}
          >
            faux store
          </motion.h1>
        </div>
        <div className="flex text-sm md:text-lg">
          <h3>Cart</h3>
          <p>(0)</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
