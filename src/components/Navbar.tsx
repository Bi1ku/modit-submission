import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

type Props = {};

const Navbar = (props: Props) => {
  const [show, setShow] = useState(
    localStorage.getItem('show') === 'true' || false,
  );

  // Persist navbar show state in localstorage for displays on other pages/refreshes
  useEffect(() => {
    localStorage.setItem('show', show.toString());
  }, [show]);

  return (
    <div className='fixed z-20 text-white mt-6 flex font-mono'>
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
            className='z-20 flex items-center font-bold font-mono sm:text-base text-sm'
          >
            <a href='/' className='sm:mr-8 mr-4'>
              Home
            </a>
            <div className='rounded-full bg-white w-1 h-1 sm:mr-8 mr-4' />
            <a href='/bio' className='sm:mr-8 mr-4'>
              Biography
            </a>
            <div className='rounded-full bg-white w-1 h-1 sm:mr-8 mr-4' />
            <a href='/photos'>Photos</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
