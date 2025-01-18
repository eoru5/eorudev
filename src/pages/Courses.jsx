import React from 'react';
import { motion } from "framer-motion";

const data = [
  {
    code: "COMP1511",
    title: "Programming Fundamentals",
    term: "21T1",
    mark: "90 HD"
  },
  {
    code: "MATH1081",
    title: "Discrete Mathematics",
    term: "21T1",
    mark: "75 DN"
  },
  {
    code: "MATH1141",
    title: "Higher Mathematics 1A",
    term: "21T1",
    mark: "78 DN"
  },
  {
    code: "COMP1521",
    title: "Computer Systems Fundamentals",
    term: "21T2",
    mark: "86 HD"
  },
  {
    code: "COMP2521",
    title: "Data Structures and Algorithms",
    term: "21T2",
    mark: "81 DN"
  },
  {
    code: "MATH1241",
    title: "Higher Mathematics 1B",
    term: "21T2",
    mark: "79 DN"
  },
  {
    code: "COMP1531",
    title: "Software Eng Fundamentals",
    term: "21T3",
    mark: "86 HD"
  },
  {
    code: "SCIF1131",
    title: "Skills for Science",
    term: "21T3",
    mark: "92 HD"
  },
  {
    code: "COMP3411",
    title: "Artificial Intelligence",
    term: "22T1",
    mark: "78 DN"
  },
  {
    code: "COMP3821",
    title: "Ext Algorithms&Prog Techniques",
    term: "22T1",
    mark: "78 DN"
  },
  {
    code: "MATH2111",
    title: "Higher Several Variable Calc",
    term: "22T1",
    mark: "82 DN"
  },
  {
    code: "COMP2511",
    title: "O-O Design & Programming",
    term: "22T2",
    mark: "89 HD"
  },
  {
    code: "MATH2221",
    title: "Higher Differential Equations",
    term: "22T2",
    mark: "92 HD"
  },
  {
    code: "MATH2601",
    title: "Higher Linear Algebra",
    term: "22T2",
    mark: "85 HD"
  },
  {
    code: "COMP3421",
    title: "Computer Graphics",
    term: "22T3",
    mark: "92 HD"
  },
  {
    code: "MATH2621",
    title: "Higher Complex Analysis",
    term: "22T3",
    mark: "87 HD"
  },
  {
    code: "COMP4920",
    title: "Professional Issues and Ethics",
    term: "23T1",
    mark: "80 DN"
  },
  {
    code: "COMP6080",
    title: "Web Front-End Programming",
    term: "23T1",
    mark: "100 HD"
  },
  {
    code: "COMP6771",
    title: "Advanced C++ Programming",
    term: "23T1",
    mark: "88 HD"
  },
  {
    code: "COMP3511",
    title: "Human Computer Interaction",
    term: "23T2",
    mark: "84 DN"
  },
  {
    code: "COMP3900",
    title: "Computer Science Project",
    term: "23T2",
    mark: "81 DN"
  },
  {
    code: "DDES1110",
    title: "3D Visualisation 1",
    term: "23T2",
    mark: "82 DN"
  },
  {
    code: "COMP4431",
    title: "Game Design Workshop",
    term: "23T3",
    mark: "94 HD"
  },
  {
    code: "MATH3411",
    title: "Information, Codes and Ciphers",
    term: "23T3",
    mark: "90 HD"
  },
  {
    code: "COMP3311",
    title: "Database Systems",
    term: "24T1",
    mark: "92 HD"
  },
  {
    code: "COMP4961",
    title: "Computer Science Thesis A",
    term: "24T1",
    mark: "EC"
  },
  {
    code: "COMP6991",
    title: "Modern Prog Problems with Rust",
    term: "24T1",
    mark: "98 HD"
  },
  {
    code: "COMP3141",
    title: "Software Sys Des&Implementat'n",
    term: "24T2",
    mark: "94 HD"
  },
  {
    code: "COMP3331",
    title: "Computer Networks&Applications",
    term: "24T2",
    mark: "89 HD"
  },
  {
    code: "COMP4962",
    title: "Computer Science Thesis B",
    term: "24T2",
    mark: "EC"
  },
  {
    code: "COMP4128",
    title: "Programming Challenges",
    term: "24T3",
    mark: "87 HD"
  },
  {
    code: "COMP4963",
    title: "Computer Science Thesis C",
    term: "24T3",
    mark: "89 HD"
  }
];

const variants = {
  hidden: { opacity: 0, y: -20 },
  visible: (idx) => ({
    opacity: 1,
    y: 0,
    transition: {
      default: {
        delay: idx * 0.15,
        type: "spring",
        duration: 0.5,
        stiffness: 150,
        damping: 15,
      },
      opacity: {
        delay: idx * 0.15,
        ease: "linear"
      }
    },
  }),
};

const Courses = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
      className='w-screen h-screen flex flex-col items-center py-32'
    >
      <table className='z-2 block h-[600px] overflow-auto bg-indigo-950 border border-white border-opacity-25'>
        <thead className='sticky top-0 bg-indigo-950 border-b-2 border-white border-opacity-25'>
          <tr>
            <th className="p-3 bg-clip-text text-transparent bg-grad2 bg-[length:200%_auto]">Code</th>
            <th className="p-3 bg-clip-text text-transparent bg-grad2 bg-[length:200%_auto]">Title</th>
            <th className="p-3 bg-clip-text text-transparent bg-grad2 bg-[length:200%_auto]">Term</th>
            <th className="p-3 bg-clip-text text-transparent bg-grad2 bg-[length:200%_auto]">Mark</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <motion.tr
              key={idx}
              variants={variants}
              initial="hidden"
              custom={idx}
              animate="visible"
            >
              <td className="p-3 border-b border-white border-opacity-25">{item.code}</td>
              <td className="p-3 border-b border-white border-opacity-25">{item.title}</td>
              <td className="p-3 border-b border-white border-opacity-25">{item.term}</td>
              <td className="p-3 border-b border-white border-opacity-25">{item.mark}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default Courses;
