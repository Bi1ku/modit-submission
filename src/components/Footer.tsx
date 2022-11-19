import React from 'react';
import Discord from '../assets/discord.png';
import GitHub from '../assets/github.png';
import Instagram from '../assets/instagram.png';
import Reddit from '../assets/reddit.png';
import { motion } from 'framer-motion';

type Props = {};

function Footer(props: Props) {
  return (
    <div className='mt-10 flex flex-col items-center pb-10'>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5, delay: 0.6 },
        }}
        className='text-white text-xl'
      >
        Contact Me
      </motion.span>
      <motion.div
        className='p-5 w-[20rem] flex justify-around'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.7 },
        }}
      >
        <img src={Discord} alt='Github' className='w-10 h-10' />
        <img src={GitHub} alt='Github' className='w-10 h-10' />
        <img src={Instagram} alt='Github' className='w-10 h-10' />
        <img src={Reddit} alt='Github' className='w-10 h-10' />
      </motion.div>
      <motion.a
        className='text-xl text-blue-600 cursor-pointer duration-300 hover:underline'
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5, delay: 0.9 },
        }}
        href='https://github.com/Bi1ku/modit-submission'
      >
        Source Code {'</>'}
      </motion.a>
    </div>
  );
}

export default Footer;
