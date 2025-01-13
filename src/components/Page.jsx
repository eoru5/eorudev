import React from 'react';
import Navbar from './Navbar';
import Constellation from './Constellation';
import { AnimatePresence, motion } from 'motion/react';

const Page = ({component, name}) => {
  return (
    <div>
      <Constellation/>
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