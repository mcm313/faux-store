import { motion, Variants } from "framer-motion";

const bgVariants: Variants = {
  hidden: { backgroundColor: "rgba(243,244,246,1)" },
  visible: { backgroundColor: "rgba(156, 163, 175,1)" },
};

const ShopPrev: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={bgVariants}
      viewport={{ amount: 0.3 }}
      transition={{ ease: "easeIn", duration: 0.25 }}
      className="py-12 h-full"
      id="shop-prev"
    >
      <div className="flex flex-col pt-16 md:pt-20 mx-6 font-extrabold gap-12 text-gray-800">
        <h2 className="text-3xl md:text-5xl underline">SHOP</h2>
        <div className="flex flex-col w-full gap-12 px-6 md:px-36 lg:px-96">
          <div className="flex flex-col content-center self-center xl:self-auto gap-2">
            <div className="border border-white h-40 w-40 md:h-64 md:w-64 xl:w-full xl:h-96"></div>
            <h5 className="text-right hover:underline underline md:no-underline decoration-white">
              Shop Jewelry
            </h5>
          </div>
          <div className="flex flex-col content-center gap-2">
            <div className="border border-white md:h-96 md:w-64 w-40 h-64 xl:w-full"></div>
            <h5 className="hover:underline md:no-underline underline decoration-white">
              Shop Men&apos;s Clothing
            </h5>
          </div>
          <div className="flex flex-col content-center self-end xl:self-auto gap-2">
            <div className="h-40 w-64 md:h-64 md:w-96 border border-white xl:w-full"></div>
            <h5 className="text-center hover:underline underline md:no-underline decoration-white">
              Shop Women&apos;s Clothing
            </h5>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ShopPrev;
