import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function NotFound() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <>
      {isAuthenticated && (
        <motion.section
          initial="initial"
          animate="animate"
          exit="exit"
          className="min-h-[80vh] flex justify-center items-center"
        >
          <div className="text-center font-poppins">
            <h1 className="text-9xl tracking-tight font-extrabold lg:text-[10rem] text-primary-darker">
              404
            </h1>

            <p className="mb-4 text-3xl tracking-tight md:text-3xl text-primary-darker mt-8">
              Something is missing!
            </p>
            <div className="text-center">
              <p className="mb-4 text-lg text-grey-base md:text-1xl w-1/2 inline-block">
                This page is missing or you entered the link incorrectly.
              </p>
            </div>

            <button
              className="bg-primary-darker hover:bg-primary-darker text-white py-2 px-4 rounded-lg mt-8"
              onClick={() => router.replace('/')}
            >
              <FaArrowLeft className="inline-block mr-2" />
              Back to Home
            </button>
          </div>
        </motion.section>
      )}
    </>
  );
}
