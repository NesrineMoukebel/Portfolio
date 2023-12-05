import React from 'react'
import shape from "../assets/shape.png"
const About = () => {
  const emailAddress = 'kn_moukebel@esi.dz';
  const handleEmailCheck = () => {
    window.location.href= `mailto:${emailAddress}`;
  };
  return (
    <section id="about">
      <div class="mx-auto w-[80%] flex flex-col md:flex-row items-center pt-[10%] md:pt-9 gap-8 md:gap-[9%] ">
        <h1 class="text-[50px] text-white font-semibold w-full text-center">
          ABOUT ME   
        </h1>
        {/* the vertical line */}
        <div class="w-[200px] md:w-0 border-[1px] bg-[#9747FF] md:h-[200px] border-[#9747FF] md:border-[1px]">  
        </div>
        <div class="flex flex-col gap-2 items-center md:items-start">
          <p class="text-white text-[17px] w-[90%] leading-8 mb-[2%] text-center">
            Iam a computer engineering student at the Higher National School of Computer Science, Algiers, Algeria. Iam also 
            a UI/UX designer and front-end web developer. Arabic is my native language and I speak both English and French fluently.
          </p>
          {/* the mail button */}
          <button onClick={handleEmailCheck} className='text-white border-[1px] rounded-[50px] items-center flex flex-row gap-3 py-2 px-[40px]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M2 8L12.5 12.5L23 8M6.8 21.5H18.2C19.8802 21.5 20.7202 21.5 21.362 21.173C21.9265 20.8854 22.3854 20.4265 22.673 19.862C23 19.2202 23 18.3802 23 16.7V8.3C23 6.61984 23 5.77976 22.673 5.13803C22.3854 4.57354 21.9265 4.1146 21.362 3.82698C20.7202 3.5 19.8802 3.5 18.2 3.5H6.8C5.11984 3.5 4.27976 3.5 3.63803 3.82698C3.07354 4.1146 2.6146 4.57354 2.32698 5.13803C2 5.77976 2 6.61984 2 8.3V16.7C2 18.3802 2 19.2202 2.32698 19.862C2.6146 20.4265 3.07354 20.8854 3.63803 21.173C4.27976 21.5 5.11984 21.5 6.8 21.5Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
              </svg>
            Let's talk !
          </button>
        </div>
      </div>
      <div className="absolute top-[70%] md:top-[78%] left-0 z-10">
          <img src={shape} alt="Shape 1" class="w-[45%] md:w-[80%]" />
      </div>
      <div className="absolute top-[980px] md:top-[900px] right-0 z-10 transform rotate-180">
          <img src={shape} alt="Shape 1" class="w-[40%] md:w-[60%]"/>
      </div>
    </section>
  )
}
        
export default About