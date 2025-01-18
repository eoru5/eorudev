import React from 'react';
import Navbar from './Navbar';
import { AnimatePresence, motion } from "framer-motion";
import AnimatedGradient from './AnimatedGradient';

const Page = ({component, name}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
    >
      <AnimatedGradient />

      <Navbar name={name}/>
      
      <AnimatePresence mode='wait'>
        <motion.div
          key={name}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {component}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Page;