import React from 'react';
import Navbar from './Navbar';
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import AnimatedGradient from './AnimatedGradient';
import Constellation from './Constellation';

const Page = ({component, name}) => {

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <AnimatedGradient />
        <Constellation />
      </motion.div>
      
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
    </div>
  );
};

export default Page;