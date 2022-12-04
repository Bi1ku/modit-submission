import { ReactNode, useState } from 'react';
import MeteorShower from '../components/MeteorShower';
import TypewriterComponent from 'typewriter-effect';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';
import '../App.css';

const songs = [
  {
    title: 'Fly Me To The Moon',
    description:
      '"Fly Me To The Moon" is a classic song introduced by Frank Sinatra in 1954. To this day, it\'s still one of the most popular songs from the artist. An absolute must listen for newcomers to his music with a catchy beat, amazing vocals, and his signature jazzy-style.',
    rating: 10,
    video: (
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
    ),
  },
  {
    title: 'Come Fly With Me',
    description:
      '"Come Fly With Me" was first sang by Frank Sinatra in 1958, describing his adventures around the world. This is yet another one of his most popular songs, so newcomers so give it a listen!',
    rating: 10,
    video: (
      <div className='fast-embed-div'>
        <iframe
          className='fast-embed-iframe'
          src='https://tube.rvere.com/embed?v=yOzEeJZ92X8'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    ),
  },
  {
    title: "That's Life",
    description:
      "\"That's Life\" is a song by Frank Sinatra, released in 1966. The song undergoes Sinatra's life's of ups and downs. It's a very upbeat song, and is a great song to listen to when you're feeling down.",
    rating: 10,
    video: (
      <div className='fast-embed-div'>
        <iframe
          className='fast-embed-iframe'
          src='https://tube.rvere.com/embed?v=TnlPtaPxXfc'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    ),
  },
  {
    title: 'Strangers In The Night',
    description:
      'Like many of Sinatra\'s other songs, "Strangers In The Night"\'s general theme is about love. It depicts two strangers meeting each other then suddenly falling in love at a glance. Though the lyrics are thoughtful, the song is very slow.',
    rating: 7,
    video: (
      <div className='fast-embed-div'>
        <iframe
          className='fast-embed-iframe'
          src='https://tube.rvere.com/embed?v=Fd_3EkGr0-4'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    ),
  },
  {
    title: 'The Way You Look Tonight',
    description:
      "\"The Way You Look Tonight\" was of his earlier songs, being released in 1936. It's a very romantic song, depicting his love and beauty of an unnamed woman. It's a great song to listen to when you're in love, or just want to feel the love.",
    rating: 10,
    video: (
      <div className='fast-embed-div'>
        <iframe
          className='fast-embed-iframe'
          src='https://tube.rvere.com/embed?v=YFham2Xu6nA'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    ),
  },
  {
    title: 'The Girl From Ipanema',
    description:
      'Recorded in 1967, "The Girl From Ipanema" was publicized. The rating may be a hot take, but I dislike the song\'s synchronization of voices. However, that said, some fans love it so give it a try!',
    rating: 5,
    video: (
      <div className='fast-embed-div'>
        <iframe
          className='fast-embed-iframe'
          src='https://tube.rvere.com/embed?v=mD6pbCSeWLs'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    ),
  },
  {
    title: 'Luck Be A Lady',
    description:
      'Though one of his least popular songs (compared to his other records), "Luck Be A Lady" is still one of the best songs from Frank Sinatra. The song is about Sinatra\'s hardship in love, and how he\'s been unlucky in love.',
    rating: 9,
    video: (
      <div className='fast-embed-div'>
        <iframe
          className='fast-embed-iframe'
          src='https://tube.rvere.com/embed?v=MfiKk4wxiVM'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    ),
  },
  {
    title: 'My Way',
    description:
      '"My Way" is a song by Frank Sinatra, released in 1969. The song reflects the life of Sinatra, his failures, regrets, and success. The lyrics are meaningful, but I can\'t get past the slow pace, hence the rating -- a great listen though.',
    rating: 6,
    video: (
      <div className='fast-embed-div'>
        <iframe
          className='fast-embed-iframe'
          src='https://tube.rvere.com/embed?v=qQzdAsjWGPg'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    ),
  },
  {
    title: 'Theme From New York, New York',
    description:
      "This song released in 1977, is about Sinatra's love for and desire to move to New York City. The beat and jazz music is one of the best I've heard throughout all his songs. Plus, it's about New York! Give it a listen!",
    rating: 9,
    video: (
      <div className='fast-embed-div'>
        <iframe
          className='fast-embed-iframe'
          src='https://tube.rvere.com/embed?v=le1QF3uoQNg'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    ),
  },
];

function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [song, setSong] = useState<{
    title: string;
    description: string;
    rating: number;
    video: ReactNode;
  }>();

  return (
    <>
      <div className='flex items-center justify-center h-screen flex-col'>
        <motion.h1
          className='text-7xl text-white mb-4 text-center'
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
      <MeteorShower />
      <div className='sm:p-10 grid lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-3 md:grid-rows-6 grid-cols-1 grid-rows-[9] gap-4'>
        {songs.map((v, i) => (
          <motion.div
            key={i}
            className='text-white bg-gray-800 p-7 rounded-2xl flex flex-col hover:cursor-pointer'
            id='#modal-button'
            initial={{ x: -300, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: i * 0.1 },
            }}
            viewport={{ once: true }}
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
                    : v.rating > 5
                    ? 'text-yellow-500'
                    : 'text-red-500'
                }`}
              >
                {' '}
                Rating: {v.rating}
              </span>
            </div>
            {v.video}
          </motion.div>
        ))}
      </div>
      <Modal
        setShow={setShowModal}
        show={showModal}
        description={song?.description as string}
        title={song?.title as string}
        rating={song?.rating as number}
        video={song?.video}
      />
    </>
  );
}

export default Home;
