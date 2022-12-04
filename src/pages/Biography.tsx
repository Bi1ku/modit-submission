import { motion } from 'framer-motion';
type Props = {};

const Biography = (props: Props) => {
  return (
    <>
      <div className='text-white flex items-center flex-col justify-center mt-36'>
        <motion.h1
          initial={{ opacity: 0, y: -300 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
          className='text-3xl mb-6 text-center'
        >
          Frank Sinatra's Biography
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 0.3 },
          }}
          className='p-5'
        >
          <img
            className='lg:max-w-4xl md:max-w-xl'
            src='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2015_50/889371/frank-sinatra-today-tease-1-151207.jpg'
            alt=''
          />
        </motion.div>
        <motion.div
          className='bg-gray-900 mt-4 sm:p-10'
          initial={{ opacity: 0, x: 500 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.2 },
          }}
        >
          <span>
            &nbsp; &nbsp; &nbsp; American singer and actor, Frank Sinatra, was
            born on December 12th, 1915 in Hoboken, New Jersey. During his early
            life, he was greatly influenced by Bing Crosby to pursue a career in
            music and media. Consequently, on March 1939, Sinatra did a solo
            performance resulting in his first record, “Our Love.” He would
            continue to sing for months until his first big hit — though debated
            — “Polka Dots and Moonbeams” that catalyzed his popularity and
            notoriety in the music industry. Between 1943 and 1946, his
            popularity grew further with the publication of many other hit
            songs, becoming well-known for his combination of jazz and vocals
            incorporated within many of his records. During the 1950s, he also
            started his acting career which led to his role in many films and
            musicals. Some of his most synonymous songs include “The Way You
            Look Tonight” (1936), “Fly Me To The Moon” (1954), “Come Fly With
            Me” (1958), and “That's Life” (1966). Unfortunately, at 82 years of
            age, Frank Sinatra died of a heart attack on May 14, 1998. Today,
            his legacy is not forgotten and is still one of the largest artists
            in modern society even after his death.
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default Biography;
