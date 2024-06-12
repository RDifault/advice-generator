"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Function to fetch advice from the API
async function fetchAdvice() {
  try {
    const res = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`, {
      cache: 'no-store'
    });
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonData = await res.json();
    const { id, advice } = jsonData.slip;
    console.log('Fetched new advice:', id, advice);
    return { id, advice };
  } catch (error) {
    console.error('Error fetching the advice:', error);
    return { id: '000', advice: 'Error fetching advice. Please try again later.' };
  }
}

export default function Home() {
  const [adviceData, setAdviceData] = useState({ id: '000', advice: 'Loading...' });
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // Fetch initial advice on component mount
    async function getInitialAdvice() {
      const data = await fetchAdvice();
      setAdviceData(data);
    }
    getInitialAdvice();
  }, []);

  const handleFetchNewAdvice = async () => {
    if (isFetching) return;
    setIsFetching(true);
    const newAdvice = await fetchAdvice();
    setAdviceData(newAdvice);
    setIsFetching(false);
  };

  return (
    <main className="dark-blue flex flex-wrap items-center justify-center h-screen w-screen">
      <div className="sm:w-[90vw] lg:w-[700px] h-auto grayish-blue-dark rounded-xl flex flex-wrap flex-col justify-baseline items-center">
        <p className="text-center neon-green m-10 font-bold tracking-[0.35rem] pt-4">ADVICE #{adviceData.id}</p>
        <p className="light-cyan text-center text-2xl md:text-4xl px-14 pb-12 font-bold">
          {adviceData.advice}
        </p>
        <Image src="/pattern-divider-desktop.svg" width={550} height={10} className="sm:hidden md:block" alt="Pattern Divider Desktop" />
        <Image src="/pattern-divider-mobile.svg" width={250} height={10} className="sm:block md:hidden" alt="Pattern Divider Mobile" />
        <button
          onClick={handleFetchNewAdvice}
          className="w-[65px] h-[65px] neon-green-bg flex items-center justify-center rounded-full relative top-[35px] hover:scale-110"
          aria-label="Fetch new advice"
        >
          <Image
            src="/icon-dice.svg"
            width={25}
            height={25}
            alt="Dice Icon"
          />
        </button>
      </div>
    </main>
  );
}