import React from 'react';
import NavbarItem from '../components/NavbarItem';
import { motion, useAnimate } from 'motion/react';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
};

const lineWidth = 300;

const Projects = () => {
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
    <div ref={scope} className="absolute h-screen w-1/2 pt-32 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <div className="whitespace-nowrap overflow-hidden relative">
        <motion.div
          className="title my-2"
          initial={{ opacity: 0, y: '100%' }}
        >
          <h1 className="text-3xl font-medium">Projects</h1>
        </motion.div>
      </div>

      <div className='flex items-center justify-center mx-2'>
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
          <NavbarItem
            item={{
              name: 'gradebook',
              label: 'Gradebook',
              link: 'https://gradebook.eoru.dev/',
            }}
            selected={false}
          />

          <NavbarItem
            item={{
              name: 'airytable',
              label: 'Airytable',
              link: 'https://airytable.vercel.app/',
            }}
            selected={false}
          />

          <NavbarItem
            item={{
              name: 'joe',
              label: "Joe's Bizzare Dream",
              link: 'https://www.youtube.com/watch?v=LU36svFzf64',
            }}
            selected={false}
          />
        </motion.div>
      </div>

    </div>
  );
};

export default Projects;