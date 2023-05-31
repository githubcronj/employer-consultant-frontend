import React from 'react';
import BellIcon from 'public/Assets/bell.svg';
import Dropdown from 'Components/DropDown/Dropdown';
import { SideBar } from 'Components/Sidebar/sideBar';

export const Navbar = () => {
  return (
    
    <div className="bg-[#FFFFFF] bg-no-repeat bg-origin-padding shadow-[0px_1px_4px_rgba(21,34,50,0.08)] opacity-100 flex flex-row h-[68px] justify-center items-center">
      <div className="text-[#131523] font-normal text-left text-[20px] font-ProductSans flex-1 ml-7 ">
        Logo
      </div>
      <div className="flex flex-row mr-10 justify-center items-center gap-8 ">
        <div class="relative">
          <div className="flex items-center justify-center rounded-lg bg-transparent text-center">
            <img src={BellIcon.src} alt="Bell Icon" />
          </div>
          <span className="absolute -top-[4px] -right-[5px] h-4 w-4 bg-[#F0142F] rounded-full text-white flex items-center justify-center text-xs font-semibold">
            7
          </span>
        </div>
        
        <Dropdown />
      </div>
    </div>
  );
};
