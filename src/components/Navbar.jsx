import React, {useState} from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../index.css'


const Navbar = () => {
  const[nav,setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  } 
  return (
    <nav className="bg-[#171717] fixed top-0 w-full text-[#F5F5F5] py-4 px-[4%] md:px-[8%] z-50">
      <div className="container md:mx-auto md:flex md:justify-between">
        <div className="flex flex-row justify-between"><Link
            to="home"
            smooth={true}
            class="text-xl  font-bold"
            
          >
            Nesrine Moukebel
          </Link>
          <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                   </svg> 
                   : <svg class="w-5 h-5 right-[10px] text-white fixed" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                     </svg> }
          </div>
          </div>
          
          <div className='hidden md:flex md:space-x-6 md:font-bold'>
          <Link
            to="home"
            smooth={true}
            className="hover:text-[#9747FF] transition-colors duration-300 "
            activeClass="text-[#9747FF]"
            
          >
            HOME
          </Link>
          <Link
            to="about"
            smooth={true}
            className="hover:text-[#9747FF] transition-colors duration-300"
            activeClass="text-[#9747FF]"
          >
            ABOUT
          </Link>
          <Link
            to="experience"
            smooth={true}
            className="hover:text-[#9747FF] transition-colors duration-300"
            activeClass="text-[#9747FF]"
          >
            EXPERIENCE
          </Link>
          <Link
            to="skills"
            smooth={true}
            className="hover:text-[#9747FF] transition-colors duration-300"
            activeClass="text-[#9747FF]"
          >
            SKILLS
          </Link>
          <Link
            to="work"
            smooth={true}
            className="hover:text-[#9747FF] transition-colors duration-300"
            activeClass="text-[#9747FF]"
          >
            WORK
          </Link>
          <Link
            to="contact"
            smooth={true}
            className="hover:text-[#9747FF] transition-colors duration-300"
            activeClass="text-[#9747FF]"
          >
            CONTACT
          </Link>
        </div>
        <div className={nav ? "flex flex-col gap-6 font-bold pt-[10%] left-0 h-full" : 'fixed left-[-100%]'}>
          <Link
            to="home"
            smooth={true}
            className="hover:text-[#9747FF] transition-colors duration-300 "
            activeClass="text-[#9747FF]"
            
          >
            HOME
          </Link>
          <Link
            to="about"
            smooth={true}
            className="hover:text-[#9747FF] transition-colors duration-300"
            activeClass="text-[#9747FF]"
          >
            ABOUT
          </Link>
          <Link
            to="experience"
            smooth={true}
            className="hover:text-[#9747FF] transition-colors duration-300"
            activeClass="text-[#9747FF]"
          >
            EXPERIENCE
          </Link>
          <Link
            to="skills"
            smooth={true}
            className="hover:text-[#9747FF] transition-colors duration-300"
            activeClass="text-[#9747FF]"
          >
            SKILLS
          </Link>
          <Link
            to="work"
            smooth={true}
            className="hover:text-[#9747FF] transition-colors duration-300"
            activeClass="text-[#9747FF]"
          >
            WORK
          </Link>
          <Link
            to="contact"
            smooth={true}
            className="hover:text-[#9747FF] transition-colors duration-300 mb-8"
            activeClass="text-[#9747FF]"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
