import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  show: boolean;
  description: string;
  title: string;
  rating: number;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  video: ReactNode;
};

const Modal = ({ show, description, title, rating, setShow, video }: Props) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className='modal-background-color fixed h-screen top-0 right-0 left-0 grid place-items-center p-10 z-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          id='#overlay'
          onClick={(e: any) => e.target.id === '#overlay' && setShow(false)}
          exit={{ opacity: 0, transition: { duration: 0.2, delay: 0.3 } }}
        >
          <motion.div
            className='bg-gray-700 rounded-lg max-w-2xl p-10'
            initial={{ opacity: 0, y: -300 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            exit={{ opacity: 0, y: 300, transition: { duration: 0.5 } }}
          >
            <div className='flex justify-between mb-4 items-center'>
              <motion.h1
                initial={{ opacity: 0, x: -300 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
                className='text-4xl text-white'
              >
                {title}
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, x: 300 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                className={`text-lg ${
                  rating >= 8
                    ? 'text-green-500'
                    : rating >= 5
                    ? 'text-yellow-500'
                    : 'text-red-500'
                }`}
              >
                Rating: {rating}
              </motion.span>
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, delay: 0.6 },
              }}
              className='text-gray-300'
            >
              {description}
            </motion.span>
            {video}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
