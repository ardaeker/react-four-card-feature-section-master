import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <motion.h1 initial={{ y: "-50vh", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        Reliable, efficient delivery
      </motion.h1>
      <motion.h2
        initial={{ y: "-50vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Powered by Technology
      </motion.h2>
      <motion.p
        initial={{ y: "-50vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is
        successful
      </motion.p>
    </header>
  );
};

export default Header;
