import React from 'react';
import { motion, useAnimate } from "framer-motion";

const items = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
]

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
};

const lineWidth = 300;

const Courses = () => {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    const runAnimations = async () => {
      await animate('.line', { pathLength: 1, opacity: 1 }, { duration: 1, type: 'spring', bounce: 0 });
      await animate('.title', { opacity: 1, y: 0 }, { duration: 1 });
      for (let i = 0; i < items.length; i++) {
        await animate(`.item${i}`, { opacity: 1, x: 0, scale: 1 }, { duration: 0.25, type: 'spring', bounce: 0 });
      }
      await animate('.line', { pathLength: 0, opacity: 1 }, { duration: 1, type: 'spring', bounce: 0 });
    };
    runAnimations();
  }, [animate]);

  return (
    <div ref={scope} className='w-screen h-screen flex flex-col items-center py-32'>
      <div className="whitespace-nowrap overflow-hidden relative">
        <motion.div
          className="title my-2"
          initial={{ opacity: 0, y: '100%' }}
        >
          <h2 className='text-3xl font-medium'>
            Courses
          </h2>
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

      <div ref={scope} className='flex flex-col items-center justify-center relative'>
        {items.map((item, idx) =>
          <motion.div
            key={idx}
            className={`item${idx}`}
            initial={{ opacity: 0, x: -100, scale: 0.5 }}
          >
            <h3>
              {idx + 1}. {item}
            </h3>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Courses;
