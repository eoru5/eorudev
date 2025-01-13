import React from 'react';
import AnimatedBody from '../components/AnimatedBody';

const Todo = ({ title }) => {
  return (
    <AnimatedBody
      title={<h1 className="text-6xl font-medium">{title}</h1>}
      className='w-screen flex flex-col items-center justify-center'
    >
      <h5 className="text-2xl mt-2 bg-clip-text text-transparent bg-grad2 bg-[length:200%_auto]">
        Page Todo
      </h5>
    </AnimatedBody>
  );
};

export default Todo;
