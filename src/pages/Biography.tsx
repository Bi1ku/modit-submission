import { faker } from '@faker-js/faker';
import React from 'react';

type Props = {};

const Biography = (props: Props) => {
  return (
    <>
      <div className='bg-gray-900 h-screen text-white flex items-center flex-col justify-center mt-36'>
        <h1 className='text-3xl mb-6'>Frank Sinatra's Biography</h1>
        <img
          className='max-w-4xl'
          src='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2015_50/889371/frank-sinatra-today-tease-1-151207.jpg'
          alt=''
        />
        <div className='bg-gray-900 p-5 mt-4 p-10'>
          <span>{faker.lorem.paragraphs(5)}</span>
        </div>
      </div>
    </>
  );
};

export default Biography;
