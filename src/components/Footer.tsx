import React from 'react';
import Discord from '../assets/icons/discord.png';
import GitHub from '../assets/icons/github.png';
import Instagram from '../assets/icons/instagram.png';
import Reddit from '../assets/icons/reddit.png';
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
        viewport={{ once: true }}
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
        viewport={{ once: true }}
      >
        <img
          src={Discord}
          alt='Discord'
          className='w-10 h-10'
          onClick={() =>
            (window.location.href =
              'https://discordapp.com/users/896543300012609546/')
          }
        />
        <img
          src={GitHub}
          alt='Github'
          className='w-10 h-10'
          onClick={() => (window.location.href = 'https://github.com/Bi1ku')}
        />
        <img
          src={Instagram}
          alt='Instagram'
          className='w-10 h-10'
          onClick={() =>
            (window.location.href = 'https://www.instagram.com/bi_i_ku/')
          }
        />
        <img
          src={Reddit}
          alt='Reddit'
          className='w-10 h-10'
          onClick={() =>
            (window.location.href =
              'https://www.reddit.com/user/silver-tomatoes')
          }
        />
      </motion.div>
      <motion.a
        className='text-xl text-blue-600 cursor-pointer duration-300 hover:underline'
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5, delay: 0.9 },
        }}
        viewport={{ once: true }}
        href='https://github.com/Bi1ku/modit-submission'
      >
        Source Code {'</>'}
      </motion.a>
    </div>
  );
}

export default Footer;
