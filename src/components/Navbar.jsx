import React from 'react'
import { NavLink } from 'react-router-dom'
import {AppNav} from "../components/appNav"
import Faatra from "../assets/Faatra.png"
import Atam from "../assets/Atam.png"

export const Navbar = () => {
  return (
    <div className='flex items-center justify-start h-[160px]
    lg:px-6 lg:h-[126px] md:px-3 md:h-[126px] sm:px-3 sm:h-[100px] '
  >
    <div className="flex-none sticky w-16 h-16 bg-white rounded-xl shadow-lg hover-scale ml-[4%] animate__animated animate__fadeInLeft animate__slow
      xl:w-14 xl:h-14 
      lg:w-[53px] lg:h-[53px] 
      md:w-[53px] md:h-[53px] md:ml-[5%] 
      sm:w-[60px] sm:h-[65px] sm:ml-[5%] sm:mt-2 sm:z-10"
    > 
      <NavLink to={"/faatra"}>
        <img src={Faatra} alt="faatra" className=" p-1 w-full h-full bounce-hover cursor-pointer" />
      </NavLink>
    </div>

    <div className="flex-none sticky w-16 h-16 bg-white rounded-xl shadow-lg hover-scale ml-[4%] animate__animated animate__fadeInLeft animate__slow
      xl:w-14 xl:h-14 
      lg:w-[53px] lg:h-[53px] 
      md:w-[53px] md:h-[53px] md:ml-[5%] 
      sm:w-[65px] sm:h-[65px] sm:ml-[5%] sm:mt-2 sm:z-10"
    > 
      <NavLink to={"/atam"}>
        <img  src={Atam} alt="atam" className=" p-1 w-full h-full bounce-hover cursor-pointer" />
      </NavLink>
    </div>

    <ul className='flex items-center ml-[7.5rem] pb-2 gap-[2.7rem] 
      xl:ml-[2.2rem] xl:gap-[1.8rem] lg:hidden md:hidden sm:hidden xsm:hidden 2xsm:hidden'>
      <NavLink to={"branding"} className="animate__animated animate__fadeInDown animate__slower">
        <li className='text-xl text-[#0B5345] hover-scale px-4 rounded-2xl link link--elara xl:text-[1.08rem]' >
          F.A.A.T.R.A
        </li>
      </NavLink>
      <NavLink to={"design"} className="animate__animated animate__fadeInDown animate__slow">
        <li className={`text-xl text-[#0B5345] hover-scale px-4 rounded-2xl link link--elara xl:text-[1.08rem]`} >
          A.T.A.M
        </li>
      </NavLink>
    </ul>
    
    <div className='flex items-center justify-end w-full'>
      <AppNav/>
    </div>

  </div>
  )
}
