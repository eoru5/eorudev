import React from 'react';
import { motion, useAnimate } from 'motion/react';
import Links from '../components/Links';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
};

const lineWidth = 300;

const Todo = ({ title }) => {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    const runAnimations = async () => {
      await animate('.line', { pathLength: 1, opacity: 1 }, { duration: 1, type: 'spring', bounce: 0 });
      animate('.text', { opacity: 1, y: 0 }, { duration: 1 });
      await animate('.info', { opacity: 1, y: 0 }, { duration: 1 });
      await animate('.line', { pathLength: 0, opacity: 1 }, { duration: 1, type: 'spring', bounce: 0 });
    };

    runAnimations();
  }, [animate]);

  return (
    <div
      ref={scope}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center"
    >
      <div className="whitespace-nowrap overflow-hidden">
        <motion.div
          className="text my-2"
          initial={{ opacity: 0, y: '100%' }}
        >
          <h1 className="text-6xl font-medium">{title}</h1>
        </motion.div>
      </div>

      <motion.svg
        width={lineWidth}
        height="10"
        viewBox={`0 0 ${lineWidth} 10`}
        initial="hidden"
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

      <div className="overflow-hidden w-3/4 text-center">
        <motion.div
          className="info flex flex-col justify-center items-center gap-3"
          initial={{ opacity: 0, y: '-100%' }}
        >
          <h5 className="text-2xl mt-2 bg-clip-text text-transparent bg-grad2 bg-[length:200%_auto]">
            Page Todo
          </h5>
        </motion.div>
      </div>

    </div>
  );
};

export default Todo;
