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
      viewport={{ amount: 0.8 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
      className="min-h-screen flex items-center justify-center"
    >
      <h2 className="text-3xl">Content after ShopPrev</h2>
    </motion.section>
  );
};

export default ShopPrev;
