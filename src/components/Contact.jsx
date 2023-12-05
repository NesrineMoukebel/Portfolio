import React from 'react'
import Spline from '@splinetool/react-spline';
import Stone from "../assets/contactDeco.png"
import shape from "../assets/shape.png"
const Contact = () => {
  const emailAddress = 'kn_moukebel@esi.dz';
  const handleEmailCheck = () => {
    window.location.href= `mailto:${emailAddress}`;
  };
  return (
    <section id="contact">
      <div class="pt-[20%] md:pt-[10%]">
        <div class="mx-auto flex flex-col gap-2 items-center ">
          <h1 class=" text-white font-bold text-[40px] md:text-[60px] mb-[-5%]">
            CONTACT
          </h1>
          <div class="flex flex-col md:flex-row gap-[-50%] items-center">
            <img src={Stone} alt=""/>
            <div class="flex flex-col gap-6 items center">
              <h2 class="text-white mx-auto md:mx text-center md:w-full w-[90%]">If you want to collaborate, don't hesitate to reach out to me :</h2>
              <div class="items-center flex flex-row gap-8 mx-auto ">
                <a href="https://behance.net/nesrinemoukebel"><svg xmlns="http://www.w3.org/2000/svg"  width="90" height="88" viewBox="0 0 90 88" fill="none">
                    <circle cx="45" cy="38.5" r="37.5" stroke="white" stroke-width="2"/>
                    <g filter="url(#filter0_d_131_176)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M41.2151 37.3626C41.2151 37.3626 44.9819 36.9218 44.9819 32.2423C44.9819 27.5615 41.9358 25.4231 37.8245 25.4231H30.2568H30.0347H24.2949V51.5759H30.0347H30.2568H37.8245C37.8245 51.5759 46.0845 51.8385 46.0845 43.8563C46.0845 43.8563 46.4438 37.3626 41.2151 37.3626ZM36.6496 29.782H37.7073C37.7073 29.782 39.5517 29.8982 39.5517 33.03C39.5517 36.1605 38.3386 36.3204 37.1779 36.3204H30.8337V29.782H36.6496ZM38.66 47.218H30.8337V40.6795H38.66C38.66 40.6795 41.7312 40.9214 41.7312 44.1328C41.7312 46.8394 39.8179 47.198 38.66 47.218ZM57.4955 31.9623C48.3412 32.0642 48.2811 42.0459 48.2811 42.0459C48.2811 42.0459 47.5528 51.5625 57.3282 51.5625C57.3282 51.5625 65.6856 52.2087 65.6856 44.8477H61.5905C61.5905 44.8477 61.4511 47.6494 57.4955 47.6494C57.4955 47.6494 53.4005 47.9575 53.4005 43.1669C53.4005 43.1669 65.6856 43.1669 65.6824 43.1501C65.5536 42.5842 67.1056 31.8556 57.4955 31.9623ZM52.6285 40.6794C52.6285 40.6794 53.1022 36.3205 57.2778 36.3205C61.4522 36.3205 61.3462 40.6794 61.3462 40.6794H52.6285ZM63.526 29.7821H52.6285V27.6026H63.526V29.7821Z" fill="white"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_131_176" x="0.294922" y="13.4231" width="89.4102" height="74.1538" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="12"/>
                        <feGaussianBlur stdDeviation="12"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_131_176"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_131_176" result="shape"/>
                      </filter>
                    </defs>
                  </svg></a>
                  <a href="https://linkedin.com/in/nesrine-moukebel-9A4077248">
                  <svg xmlns="http://www.w3.org/2000/svg" width="79" height="87" viewBox="0 0 79 87" fill="none" >
                      <circle cx="39" cy="38.5" r="37.5" stroke="white" stroke-width="2"/>
                      <g filter="url(#filter0_d_131_177)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.7606 32.2973H25.9534V51H31.7606V32.2973ZM32.2355 26.373C32.2355 24.5135 30.7244 23 28.8678 23C27.0004 23 25.5 24.5135 25.5 26.373C25.5 28.2324 27.0004 29.7459 28.8678 29.7459C30.7244 29.7459 32.2355 28.2324 32.2355 26.373ZM40.968 32.2973H35.4198V51H41.2163V41.7459C41.2163 39.3135 41.6696 36.9459 44.692 36.9459C47.6712 36.9459 47.7035 39.7351 47.7035 41.9081V51H53.5V40.7514C53.5 35.7135 52.4098 31.8432 46.5378 31.8432C43.7097 31.8432 41.8207 33.3892 41.0436 34.8595H40.968V32.2973Z" fill="white"/>
                      </g>
                      <defs>
                        <filter id="filter0_d_131_177" x="1.5" y="11" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="12"/>
                          <feGaussianBlur stdDeviation="12"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_131_177"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_131_177" result="shape"/>
                        </filter>
                      </defs>
                    </svg>

                  </a>
                  <button onClick={handleEmailCheck} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="86" viewBox="0 0 81 86" fill="none">
                      <circle cx="40" cy="38.5" r="37.5" stroke="white" stroke-width="2"/>
                      <g filter="url(#filter0_d_131_188)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M29.5374 28.0065H51.425C52.6625 27.9737 53.8728 28.3906 54.8513 29.1866L53.6041 30.0356L40.44 38.9292L37.0137 36.5907C36.9431 36.5201 36.859 36.4661 36.767 36.4324L27.3513 30.0284L26.111 29.1866C27.075 28.3621 28.2956 27.9417 29.5374 28.0065ZM25.2476 30.2947L26.4057 31.0862L35.4581 37.267L26.4879 47.0528L25.5148 48.1105C24.8387 47.1192 24.4832 45.9263 24.5006 44.7071L24.5075 33.2736C24.4978 32.2292 24.7532 31.2009 25.2476 30.2947ZM53.5219 48.0242L44.3735 38.0657L40.8786 40.4402L40.7621 40.4978H40.7073C40.6504 40.5053 40.5929 40.5053 40.536 40.4978C40.4791 40.5053 40.4215 40.5053 40.3647 40.4978H40.3098L40.1454 40.4402L36.6779 38.0801L27.4815 48.053L26.4948 49.1251C27.3998 49.7363 28.4621 50.0402 29.5374 49.9957H51.4661C52.5372 50.0029 53.5872 49.6829 54.4881 49.0747L53.5219 48.0242ZM56.496 33.2952V44.7071C56.5419 45.9237 56.194 47.1208 55.5092 48.1033L54.5292 47.0312L45.5659 37.2382L54.6115 31.0862L55.7764 30.3019C56.2774 31.2097 56.5266 32.2464 56.496 33.2952Z" fill="white"/>
                      </g>
                      <defs>
                        <filter id="filter0_d_131_188" x="0.5" y="16" width="80" height="70" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="12"/>
                          <feGaussianBlur stdDeviation="12"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_131_188"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_131_188" result="shape"/>
                        </filter>
                      </defs>
                    </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto pt-[20%] md:pt-2 items-center md:w-[30%] text-center"> 
          <h3 class="text-[#f1F1F1] text-[15px]">Designed and built by Nesrine Moukebel.</h3>
          <h3 class="text-[#f1F1F1]">All rights reserved.</h3>
        </div>
      </div>
      <div className="absolute top-[1880px] md:top-[2500px] right-0 z-10 transform rotate-180">
          <img src={shape} alt="Shape 1" class="w-[50%] md:w-[80%]" />
      </div>
    </section>
  )
}

export default Contact