import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className=' shadow-md'>
        <div className='max-w-screen-xl mx-auto py-4 px-6 flex items-center justify-between'>
          {/* <div className='text-xl font-bold'>Logo</div> */}

          <div className='md:hidden'>
            {toggle ? (
              <AiOutlineClose
                onClick={() => setToggle(!toggle)}
                className='text-gray-800 text-2xl cursor-pointer'
              />
            ) : (
              <AiOutlineMenu
                onClick={() => setToggle(!toggle)}
                className='text-gray-800 text-2xl cursor-pointer'
              />
            )}
          </div>

          <ul className='hidden md:flex gap-6 text-lg text-white '>
            <li className=' text-2xl hover:text-gray-400'>Home</li>
            <li className='text-2xl hover:text-gray-400'>About</li>
            <li className='text-2xl hover:text-gray-400'>Experience</li>
            <li className='text-2xl hover:text-gray-400'>Skills</li>
            <li className='text-2xl hover:text-gray-400'>Projects</li>
          </ul>
        </div>
      </div>

      {/* Responsive menu */}
      <ul
        className={`md:hidden fixed bg-white shadow-md top-16 left-0 w-full h-screen transition-transform transform ${
          toggle ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <li className='p-4 hover:bg-gray-100'>Home</li>
        <li className='p-4 hover:bg-gray-100'>About</li>
        <li className='p-4 hover:bg-gray-100'>Contact Us</li>
      </ul>
    </>
  );
}

export default Header;
