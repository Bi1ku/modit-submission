import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

type Props = {};

const photos = [
  require('../assets/artist/frank-sinatra-1.jpeg'),
  require('../assets/artist/frank-sinatra-2.jpeg'),
  require('../assets/artist/frank-sinatra-3.jpeg'),
  require('../assets/artist/frank-sinatra-4.webp'),
  require('../assets/artist/frank-sinatra-5.jpeg'),
  require('../assets/artist/frank-sinatra-6.webp'),
];

const Photos = (props: Props) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  return (
    <>
      <img src='.../assets/artist/frank-sinatra-1.jpeg' alt='' />
      <div className='items-center justify-between h-screen text-white text-2xl sm:flex hidden'>
        <motion.button
          className='ml-10'
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          onClick={() =>
            setCarouselIndex(
              carouselIndex - 1 >= 0 ? carouselIndex - 1 : photos.length - 1,
            )
          }
        >
          <ChevronLeftIcon className='w-7 h-7 text-white' />
        </motion.button>
        <motion.div
          className='justify-between max-w-3xl'
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          <img src={photos[carouselIndex]} alt='Frank Sinatra' />
        </motion.div>
        <motion.button
          className='mr-10'
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          onClick={() =>
            setCarouselIndex(
              carouselIndex + 1 <= photos.length - 1 ? carouselIndex + 1 : 0,
            )
          }
        >
          <ChevronRightIcon className='w-7 h-7 text-white' />
        </motion.button>
      </div>
      <div className='mt-24 flex items-center flex-col sm:hidden'>
        <h1 className='text-white text-2xl mb-4 text-center'>
          Frank Sinatra Photos
        </h1>
        <motion.div className='sm:hidden grid grid-cols-1 gap-6'>
          {photos.map((src, i) => (
            <img key={i} src={src} alt='Frank Sinatra'></img>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Photos;
