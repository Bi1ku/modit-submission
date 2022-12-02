import { useState } from 'react';
import MeteorShower from '../components/MeteorShower';
import TypewriterComponent from 'typewriter-effect';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';
import { faker } from '@faker-js/faker';
import Footer from '../components/Footer';
import '../App.css';

const songs = [
  {
    title: faker.music.songName(),
    description: faker.lorem.paragraph(),
    rating: faker.datatype.number({ min: 1, max: 10 }),
  },
  {
    title: faker.music.songName(),
    description: faker.lorem.paragraph(),
    rating: faker.datatype.number({ min: 1, max: 10 }),
  },
  {
    title: faker.music.songName(),
    description: faker.lorem.paragraph(),
    rating: faker.datatype.number({ min: 1, max: 10 }),
  },
  {
    title: faker.music.songName(),
    description: faker.lorem.paragraph(),
    rating: faker.datatype.number({ min: 1, max: 10 }),
  },
  {
    title: faker.music.songName(),
    description: faker.lorem.paragraph(),
    rating: faker.datatype.number({ min: 1, max: 10 }),
  },
  {
    title: faker.music.songName(),
    description: faker.lorem.paragraph(),
    rating: faker.datatype.number({ min: 1, max: 10 }),
  },
  {
    title: faker.music.songName(),
    description: faker.lorem.paragraph(),
    rating: faker.datatype.number({ min: 1, max: 10 }),
  },
  {
    title: faker.music.songName(),
    description: faker.lorem.paragraph(),
    rating: faker.datatype.number({ min: 1, max: 10 }),
  },
  {
    title: faker.music.songName(),
    description: faker.lorem.paragraph(),
    rating: faker.datatype.number({ min: 1, max: 10 }),
  },
];

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [song, setSong] = useState<{
    title: string;
    description: string;
    rating: number;
  }>();

  return (
    <div className='font-mono bg-gray-900'>
      <div className='h-screen relative'>
        <div className='star' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <motion.h1
            className='text-7xl text-white mb-4'
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.7 } }}
          >
            Frank Sinatra
          </motion.h1>
          <motion.div
            className='border border-white'
            initial={{ x: 300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.7, delay: 0.3 },
            }}
          ></motion.div>
          {/* <p className='text-xl text-yellow-400'>Hello world</p> */}
          <motion.div
            className='text-yellow-300 flex text-3xl justify-center mt-4'
            initial={{ x: -300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.7, delay: 0.6 },
            }}
          >
            <span className='text-white mr-2'>Renowned</span>
            <TypewriterComponent
              options={{
                strings: ['Singer', 'Actor', 'Musician'],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>
        </div>
      </div>
      <MeteorShower />
      <div className='p-10 grid lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-3 md:grid-rows-6 sm:grid-rows-[12] gap-4'>
        {songs.map((v, i) => (
          <motion.div
            className='text-white bg-gray-800 p-7 rounded-2xl flex flex-col hover:cursor-pointer'
            id='#modal-button'
            initial={{ x: -300, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: i * 0.2 },
            }}
            onClick={() => {
              setShowModal(true);
              setSong(v);
            }}
          >
            <div className='flex items-center justify-between mb-4'>
              <span className='text-3xl truncate w-2/3'>{v.title}</span>
              <span
                className={`text-lg ${
                  v.rating >= 8
                    ? 'text-green-500'
                    : v.rating >= 5
                    ? 'text-yellow-500'
                    : 'text-red-500'
                }`}
              >
                {' '}
                Rating: {v.rating}
              </span>
            </div>
            <div className='fast-embed-div'>
              <iframe
                className='fast-embed-iframe'
                src='https://tube.rvere.com/embed?v=ZEcqHA7dbwM'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        ))}
      </div>
      <Modal
        setShow={setShowModal}
        show={showModal}
        description={song?.description as string}
        title={song?.title as string}
        rating={song?.rating as number}
        video={
          <iframe
            className='mt-4'
            width='100%'
            height='300'
            src='https://www.youtube.com/embed/ZEcqHA7dbwM'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        }
      />
      <Footer />
    </div>
  );
}

export default App;
