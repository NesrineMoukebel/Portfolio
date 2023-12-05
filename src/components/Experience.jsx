import React, { useState, useEffect } from 'react';
import whitedeco from '../assets/whiteDeco.png';
import shape from '../assets/shape.png';

const Experience = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust the width threshold as needed
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollNext = () => {
    if (currentCard < 2) {
      setCurrentCard(currentCard + 1);
    }
  };

  const scrollPrev = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  return (
    <section id="experience" className="">
      <div className="md:pt-[10%] pt-[20%] flex flex-col gap-8 items-center">
        <h1 className="text-white text-[40px] text-center md:text-[60px] font-bold">
          MY EXPERIENCE
        </h1>
        <div
          className={`mx-auto flex flex-row gap-8 items-center w-[80%] ${
            isSmallScreen ? 'overflow-hidden' : ''
          }`}
        >
          <div
            className={`card1 flex flex-col gap-5 px-8 w-[33%] py-[5%] items-center bg-[#222222] rounded-[50px] transition-transform transform hover:scale-105 ${
              !isSmallScreen || currentCard === 0 ? 'block' : 'hidden'
            }`}
          >
            <img src={whitedeco} className="w-[60px] h-[55px]" alt="" />
            <h2 className="text-white text-[20px] font-semibold text-center">
              UI assistant at CSE club
            </h2>
            <h3 className="text-[12px] font-[500] text-[#BFBFBF] text-center">
              August 2022 - August 2023
            </h3>
            <p className="text-[#fafafa] text-[15px] font-light text-center">
              I had the chance to work with fellow UI designers and guide them into
              making intuitive and visually appealing user interfaces for different tech events within the club.
            </p>
          </div>
          <div
            className={`card2 flex flex-col gap-4 px-8 w-[33%] py-[5%] items-center bg-[#222222] rounded-[50px] transition-transform transform hover:scale-105 ${
              !isSmallScreen || currentCard === 1 ? 'block' : 'hidden'
            }`}
          >
            <img src={whitedeco} className="w-[60px] h-[55px]" alt="" />
            <h2 className="text-white text-[20px] font-semibold text-center">
              Designer at Sourire à l'Innocence
            </h2>
            <h3 className="text-[12px] font-[500] text-[#BFBFBF] text-center">
              August 2022 - Present
            </h3>
            <p className="text-[#fafafa] text-[15px] font-light text-center">
              I collaborated with our team to make social media posts in order to show the club's activities.
            </p>
            <a
              href="https://instagram.com/sourire_a_linnocence?igshid=MzRIODBiNWFIZA=="
              className="invisible"
            >
              <button className="text-white text-[10px] border-[1px] rounded-[50px] items-center py-2 px-[50px]">
                Check our Instagram page
              </button>
            </a>
          </div>
          <div
            className={`card3 flex flex-col gap-3 px-8 w-[33%] py-[5%] items-center bg-[#222222] rounded-[50px] transition-transform transform hover:scale-105 ${
              !isSmallScreen || currentCard === 2 ? 'block' : 'hidden'
            }`}
          >
            <img src={whitedeco} className="w-[60px] h-[55px]" alt="" />
            <h2 className="text-white text-[20px] font-semibold text-center">
              Mentor at CSE club
            </h2>
            <h3 className="text-[12px] font-[500] text-[#BFBFBF] text-center">
              2021
            </h3>
            <p className="text-[#fafafa] text-[15px] font-light text-center">
              I had the pleasure to be a mentor in an integration program within the club, where I lead a group of newbies
              into making a digital solution to a problem. The team ended up winning the competition.
            </p>
          </div>
        </div>
        {isSmallScreen && (
          <div className="flex justify-between mt-2">
            <button
              onClick={scrollPrev}
              className={`text-white text-[20px] rounded-full bg-[#222222] px-2 py-1 focus:outline-none ${
                currentCard === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={currentCard === 0}
            >
              {'<'}
            </button>
            <button
              onClick={scrollNext}
              className={`text-white text-[20px] rounded-full bg-[#222222] px-2 py-1 focus:outline-none ${
                currentCard === 2 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={currentCard === 2}
            >
              {'>'}
            </button>
          </div>
        )}
      </div>
      <div className="absolute top-[1600px] left-0 z-10">
        <img src={shape} alt="Shape 1" className="w-[50%]" />
      </div>
    </section>
  );
};

export default Experience;
