import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div class="FirstText">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div class="BrookesWorld">Brooke's World</div>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <i> "Commitment is an act, not a word." – Jean-Paul Sartre </i>
      </motion.h2>
      <motion.h5
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        I am a software engineer, teacher, and mentor.
      </motion.h5>
      {/* Add more content here */}
    </div>
  );
};

export default Home;
