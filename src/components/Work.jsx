import React, { useState } from 'react';
import Nike from "../assets/Nike.png"
import Bicycle from "../assets/Bicycle.png"
import Food from "../assets/Food.png"
const Work = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: Nike, title: 'Nike Store' },
    { src: Bicycle, title: 'Bicycle website' },
    { src: Food, title: 'Food delivery' },
  ]; // Replace with your image URLs and titles

  return (
    <section id="work">
      <div className="pt-[20%] md:pt-[10%] mx-auto md:w-[60%]">
        <div className="flex flex-col gap-8">
          <h1 className="text-white font-bold text-[30px] text-center md:text-[60px] mx-auto">SOME PREVIOUS WORK</h1>
          <div className="carousel-container mx-auto bg-[#222222] rounded-[40px] w-[90%] md:w-[60%] items-center">
            <div className="">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`photo-slide ${currentImage === index ? 'active ' : ''}`}
                >
                  {currentImage === index && (
                      <img src={image.src} alt="" class="rounded-t-[40px] items-center h-[100%] w-[100%] " />
                   
                  )}
                </div>
              ))}
            </div>
            <h1 className="text-white font-bold text-center p-4">{images[currentImage].title}</h1>
          </div>
          <div className="carousel-buttons mx-auto">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={currentImage === index ? 'active w-7 h-1 rounded-lg bg-[#F1F1F1] mx-1' : 'w-7 h-1 mx-1 rounded-lg bg-[#767676]'}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
