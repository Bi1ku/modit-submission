import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type Props = {};

const Navbar = (props: Props) => {
  const [show, setShow] = useState(false);
  return (
    <div className='fixed z-10 text-white ml-10 pt-5 py-5'>
      <AnimatePresence>
        {show ? (
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0, transition: { duration: 1 } }}
            exit={{ x: -500, transition: { duration: 1 } }}
            className='z-20'
          >
            <div className='flex items-center'>
              <button onClick={() => setShow(false)} className='mr-10'>
                <ChevronLeftIcon className='w-5 h-5' />
              </button>

              <a href='#' className='mr-6'>
                Biography
              </a>
              <div className='rounded-full bg-white w-1.5 h-1.5 mr-6' />
              <a href='#'>Photos</a>
            </div>
          </motion.div>
        ) : (
          <motion.button onClick={() => setShow(true)}>
            <ChevronRightIcon className='w-5 h-5' />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
