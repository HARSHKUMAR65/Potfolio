import React from 'react';
import { ReactTyped } from 'react-typed';

function Banner() {
  return (
    <div className='w-full py-[150px]'>
      <div className='max-w-[1240px] mx-auto text-center'>

        <div className='text-2xl text-white md:text-4xl font-bold md:p-[24px] p-[5px]'>
            Hey, Coders!
        </div>

        <h2 className='text-white font-bold md:text-[80px] text-3xl md:p-[24px] p-[15px]'>I'm Harsh</h2>

        <div className='text-[15px] md:text-[50px] bg-gradient-to-r from-black to-white bg-clip-text text-transparent font-bold md:p-[24px] p-[15px]'>
            
            <ReactTyped
            className='pl-3'
            strings={[' I am Web Developer', 'with React/Node.js']}
            typeSpeed={100}
            loop
            />
            
        </div>
        <button className='bg-white text-black rounded p-3 m-2'><a href='https://drive.google.com/file/d/1eDbzLIx90m2Oo55DHiWCKLBw2v1GSznF/view?usp=sharing'> Download My Resume</a></button>
      </div>
    </div>
  )
}

export default Banner;
