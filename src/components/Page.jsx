import React from 'react';
import Navbar from './Navbar';
import { AnimatePresence, motion } from "framer-motion";
import AnimatedGradient from './AnimatedGradient';
import Constellation from './Constellation';

const animate = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: 1.5,
    ease: "easeOut",
  },
}

const Page = ({component, name}) => {
  return (
    <div>
      <motion.div {...animate} className='-z-10 absolute top-0 left-0 h-screen w-screen'>
        <AnimatedGradient />
      </motion.div>
       
      <motion.div {...animate}>
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