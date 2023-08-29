import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CloseIcon from '../../utils/svgs/Close.svg';
import CustomMenuIcon from '../../utils/svgs/Menu.svg';
import './AppNav.css';
import 'animate.css';

const MenuItem = ({ to, label }) => (
  <NavLink to={to}>
    <li key={to} className="text-[#0B5345] text-[2.1rem] font-[500] px-6 py-1 rounded-2xl hover:text-[#707070] lin lin--elar hov-scale
      lg:text-[1.8rem] lg:px-[0%] lg:py-[1.5%]
      md:text-[1.65rem] md:px-[5%] md:py-[2%]
      sm:text-[1.3rem] sm:px-[5%] sm:py-[4%]" 
    >
       {label}
    </li>
  </NavLink>
);

export const AppNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setMenuOpen(!menuOpen);
  };
  

  return (
    <div className="fixed right-0">
      <img
        src={ menuOpen ? CloseIcon : CustomMenuIcon }
        alt="Custom Menu Icon"
        onClick={handleButtonClick}
        style={{
          width: '50px',
        }}
        className={ menuOpen ? `absolute w-[40px] z-10 top-[5.5rem] right-[6rem] cursor-pointer transition close-icon
          xl:top-[4.8rem] xl:right-[2.5rem]
          sm:top-[2.5rem] sm:right-[1.8rem]`
          : `fixed right-20 top-14 cursor-pointer animate__animated animate__fadeInDown animate__slow
          xl:right-16 lg:right-[3.4rem] lg:top-12 md:top-12 md:right-[3.4rem] sm:top-10 sm:right-[1.5rem]` }
      />
      <div
        className={`${menuOpen ? 'slide-in app-nav-modal-close' : 'slide-out app-nav-modal'} xl:w-[59vh]`}
      >
        <img
          src={CloseIcon}
          alt="Close Menu Icon"
          onClick={handleButtonClick}
          className='absolute w-[40px] z-10 top-[5.5rem] right-[6rem] cursor-pointer transition close-icon
            xl:top-[4.8rem] xl:right-[2.5rem]
            sm:top-[2rem] sm:right-[1.8rem]'
        />
          <ul className='flex flex-col pl-[9.5rem] pt-[12rem]
            lg:pl-[8rem] lg:pt-[10rem]
            md:pl-[5rem] md:pt-[14rem]
            sm:pl-[1rem] sm:pt-[8rem]'
          >
            <MenuItem to="/faatra" label="F.A.A.T.R.A" />
            <MenuItem to="/atam" label="A.T.A.M" />
          </ul>
        </div>
    </div>
  );
};