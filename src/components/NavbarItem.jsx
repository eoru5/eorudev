import React from 'react';
import { motion, useAnimate } from 'motion/react';
import { Link } from 'react-router';

const defaultClass = 'text-lg hover:bg-clip-text hover:text-transparent hover:bg-grad hover:bg-[length:200%_auto] hover:animate-gradient';
const selectedClass = 'text-lg bg-clip-text text-transparent bg-grad bg-[length:200%_auto] hover:animate-gradient';
const lineWidth = 50;
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
};

const NavbarItem = ({item, selected}) => {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <div
      className='relative flex justify-center items-center'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={item.link} className={selected ? selectedClass : defaultClass}>
        {item.label}
      </Link>

      <motion.svg
        width={lineWidth}
        height="10"
        viewBox={`0 0 ${lineWidth} 10`}
        className='absolute -bottom-2'
        initial="hidden"
        animate={hovered ? "visible" : "hidden"}
        transition={{ duration: 0.75, type: 'spring', bounce: 0 }}
      >
        <motion.line
          x1={lineWidth / 2}
          y1={5}
          x2={lineWidth}
          y2={5}
          stroke="white"
          variants={draw}
          strokeWidth={1}
        />
        <motion.line
          x1={lineWidth / 2}
          y1={5}
          x2={0}
          y2={5}
          stroke="white"
          variants={draw}
          strokeWidth={1}
        />
      </motion.svg>
    </div>
  )
}

export default NavbarItem;