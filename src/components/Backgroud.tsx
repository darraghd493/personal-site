import { motion } from "motion/react";

const Background = () => {
  return (
    <motion.div
      className="bg-grid"
      animate={{ backgroundPosition: ['0% 0%', '100% 25%'] }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
    />
  );
};

export default Background;
