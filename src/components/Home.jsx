import React from 'react'
import Spline from '@splinetool/react-spline';
import shape from "../assets/shape.png"
const Home = () => {
  return (
    <section id="home">
        <div class="mx-auto md:pt-[8%] pt-[30%] flex flex-col gap-2 items-center mb-[-8%]">
          <h1 class="text-[70px] text-center md:text-[80px] font-bold text-white">hi, I'm Nesrine</h1>
          <h2 class="font-[300] text-center text-[15px] md:text-[20px] text-[#BFBFBF]">and I create stuff sometimes...</h2>
          <p class="text-[17px] text-center text-white">I'm a UI/UX designer and front-end web developer, based in Algeria</p>
          {/*<iframe src="https://my.spline.design/portfolioanimation-c5f244f5adc1a486fa63f33b8799d764/" frameborder='0' width='100%' height='100%'></iframe>*/}
          <Spline scene="https://prod.spline.design/WktuyYGMuIRTK-R9/scene.splinecode"/>
        </div>
    </section>
  )
}

export default Home