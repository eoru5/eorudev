import React from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";

const AnimatedGradient = () => {
  const posDelta = useMotionValue(0);
  const posSlowDelta = useMotionValue(0);
  const brightnessDelta = useMotionValue(0);
  const hueRotate = useMotionValue('0deg');

  animate(posDelta, [-3, 3], {
    ease: "easeInOut",
    duration: 6,
    repeat: Infinity,
    repeatType: "mirror",
  });

  animate(posSlowDelta, [-2, 2], {
    ease: "easeInOut",
    duration: 8,
    repeat: Infinity,
    repeatType: "mirror",
  });

  animate(brightnessDelta, [2, 2], {
    ease: "easeInOut",
    duration: 10,
    repeat: Infinity,
    repeatType: "mirror",
  });

  animate(hueRotate, ['-10deg', '10deg'], {
    ease: "easeInOut",
    duration: 8,
    repeat: Infinity,
    repeatType: "mirror",
  });

  const backgroundImage = useMotionTemplate`
    radial-gradient(at calc(40% + ${posDelta}%) calc(55% - ${posDelta}%), hsla(27,85%,13%,0.1) 0px, transparent 50%),
    radial-gradient(at calc(60% + ${posDelta}%) calc(50% - ${posDelta}%), hsla(120,95%,15%,0.1) 0px, transparent 50%),
    radial-gradient(at calc(15% - ${posSlowDelta}% / 2) calc(15% + ${posSlowDelta}% / 2), hsla(240,91%,calc(11% + ${brightnessDelta}%),1) 0px, transparent 50%),
    radial-gradient(at calc(90% - ${posSlowDelta}%) calc(25% + ${posSlowDelta}%), hsla(225,94%,9%,1) 0px, transparent 50%),
    radial-gradient(at calc(65% - ${posSlowDelta}% * 2) calc(10% + ${posSlowDelta}% * 2), hsla(211,92%,9%,1) 0px, transparent 50%),
    radial-gradient(at calc(15% - ${posSlowDelta}% * 2) calc(90% + ${posSlowDelta}% * 2), hsla(266,90%,10%,1) 0px, transparent 50%),
    radial-gradient(at calc(90% - ${posSlowDelta}%) calc(80% + ${posSlowDelta}%), hsla(287,90%,calc(7% + ${brightnessDelta}%),1) 0px, transparent 50%),
    radial-gradient(at calc(65% - ${posSlowDelta}% / 2) calc(90% + ${posSlowDelta}% / 2), hsla(256,89%,9%,1) 0px, transparent 50%)
  `;

  const filter = useMotionTemplate`hue-rotate(${hueRotate})`

  return (
    <motion.div className='-z-10 absolute top-0 left-0 h-screen w-screen bg-[hsla(230,1%,12%,1)]' style={{ backgroundImage, filter }} />
  );
};

export default AnimatedGradient;