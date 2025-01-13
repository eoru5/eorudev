import React from 'react';
import { motion, useAnimate } from 'motion/react';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
};

const lineWidth = 300;

const AnimatedBody = ({ title, className, children }) => {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    const runAnimations = async () => {
      await animate('.line', { pathLength: 1, opacity: 1 }, { duration: 1, type: 'spring', bounce: 0 });
      animate('.title', { opacity: 1, y: 0 }, { duration: 1 });
      await animate('.body', { opacity: 1, y: 0 }, { duration: 1 });
      await animate('.line', { pathLength: 0, opacity: 1 }, { duration: 1, type: 'spring', bounce: 0 });
    };

    runAnimations();
  }, [animate]);

  return (
    <div ref={scope} className={className}>
      <div className="whitespace-nowrap overflow-hidden relative">
        <motion.div
          className="title my-2"
          initial={{ opacity: 0, y: '100%' }}
        >
          {title}
        </motion.div>
      </div>
      
      <div className='flex items-center justify-center'>
        <motion.svg
          width={lineWidth}
          height="10"
          viewBox={`0 0 ${lineWidth} 10`}
          initial="hidden"
          className='relative'
        >
          <motion.line
            className="line"
            x1={lineWidth / 2}
            y1={5}
            x2={lineWidth}
            y2={5}
            stroke="white"
            strokeWidth={1}
            variants={draw}
          />
          <motion.line
            className="line"
            x1={lineWidth / 2}
            y1={5}
            x2={0}
            y2={5}
            stroke="white"
            strokeWidth={1}
            variants={draw}
          />
        </motion.svg>
      </div>

      <div className='overflow-hidden relative'>
        <motion.div
          className="body"
          initial={{ opacity: 0, y: '-100%' }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedBody;
