import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

type Props = {};

const photos = [
  'https://d3nxoulyw7bc8u.cloudfront.net/images/artists/None/603aa8ce-63e2-440b-8c96-11f8fc505845.jpg',
  'https://www.history.com/.image/t_share/MTU3ODc4NjAyNDQwNTE2OTM3/gettyimages-74295793.jpg',
  'https://i.scdn.co/image/883de3e492364891543bc0313ffe516626778a16',
  'https://media.gq-magazine.co.uk/photos/5dee60bf271d0f00080ca916/master/pass/20191209-sinatra-04.jpg',
  'https://www.liveabout.com/thmb/kd-RYt0w0SDKjozOs6l8cIDwe0s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/frank-sinatra-recording-session-51246296-5c899ec94cedfd000190b29a.jpg',
  'https://hollywoodlife.com/wp-content/uploads/2021/11/Frank-sinatra-grandchildren-shutter-ftr.jpg',
];

const Photos = (props: Props) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  return (
    <div className='flex items-center justify-between h-screen text-white text-2xl'>
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
        className='justify-between sm:flex hidden max-w-3xl'
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
  );
};

export default Photos;
