import React from 'react';
import Links from '../components/Links';
import AnimatedBody from '../components/AnimatedBody';

const Home = () => {
  return (
    <AnimatedBody
      title={<h1 className="text-6xl font-medium">George Zhu</h1>}
      className='w-screen flex flex-col items-center justify-center'
    >
      <div className="max-w-[700px] min-w-[350px] text-center flex flex-col justify-center items-center gap-3">
        <h5 className="text-2xl mt-2">
          Hi, I'm a
          {' '}
          <span className='bg-clip-text text-transparent bg-grad2 bg-[length:200%_auto]'>software engineer</span>
          {' '}
          passionate in frontend and backend engineering, and game development.
        </h5>
        <Links />
      </div>
    </AnimatedBody>
  );
};

export default Home;
