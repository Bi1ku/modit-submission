import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

type Props = {};

const Navbar = (props: Props) => {
  const [show, setShow] = useState(false);
  return (
    <div className='fixed z-20 text-white ml-10 pt-6 py-5 flex font-mono'>
      <motion.button
        onClick={() => setShow(!show)}
        className={`mr-8 ${
          show
            ? 'transform rotate-180 duration-300'
            : 'transform rotate-0 duration-300 mt-1'
        }`}
      >
        <ChevronRightIcon className='w-5 h-5' />
      </motion.button>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0, transition: { duration: 1 } }}
            exit={{ x: -500, transition: { duration: 1 } }}
            className='z-20 flex items-center font-bold font-mono'
          >
            <a href='/' className='mr-8'>
              Home
            </a>
            <div className='rounded-full bg-white w-1 h-1 mr-6' />
            <a href='/bio' className='mr-8'>
              Biography
            </a>
            <div className='rounded-full bg-white w-1 h-1 mr-6' />
            <a href='/photos'>Photos</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
