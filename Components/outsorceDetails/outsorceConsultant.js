import React, { useState } from "react";
import path from "../../public/Assets/path.svg";
import cal from "../../public/Assets/cal.svg";
import redcross from "../../public/Assets/redcross.svg";
const outsorceConsultant = ({ setPopup }) => {
  const backClick = () => {
    setPopup(false);
  };
  return (
    <div className='flex  bg-black bg-opacity-20 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
      <div className='relative   w-auto my-6 mx-auto max-w-3xl '>
        <div className='w-auto xl:m-w[625px]   bg-white py-3 rounded-[15px] sm:w-[500px] lg:w-[513px] text-center  flex items-center justify-center'>
          <div className='flex m-w[513px] w-[100%]  flex-col sm:flex justify-between   my-3 sm:my-0'>
            <div className='flex align-middle justify-start gap-3 mx-3'>
              <img
                src={redcross.src}
                alt='X'
                className='w-[18px] h-[18px] mt-2'
                onClick={backClick}
              />

              <p className='text-xl sm:text-2xl  font-bold text-[#1E0F3B] opacity-[1]'>
                OutSorce Consultant
              </p>
            </div>
            <div className='w-[100%] h-[1px] border my-2 '></div>
            {/* {display.map((item, index) => {
              return ( */}
            <div className='mx-3'>
              <p className='flex pl-1 justify-start text-[#1e0f3b] font-sans m-w-[270px] w-auto text-xl font-semibold'>
                Google
              </p>
              <div
                className=' flex xl:items-center lg:items-center sm:items-center md:items-center xl:justify-between lg:justify-between
                   md:justify-between sm:justify-between xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-start flex-col '
              >
                <div className='flex justify-center pl-1'>
                  <img
                    src={cal.src}
                    alt='calender'
                    className='mt-3 w-[20px] h-[20px]'
                  />
                  <p className='m-2 text-md'>02-06-2023</p>
                  <img src={path.src} alt='-' className='mt-1' />
                  <p className='m-2 text-md'>06-06-2023</p>
                </div>
                <div>
                  <p className='text-lg -ml-1 font-medium'>
                    Worked Hours: 62 hr
                  </p>
                </div>
              </div>
              <div className='xl:m-w[625px] -m-1 lg:m-w[625px] md:m-w[620px] border my-2 w-[100%] h-[1px]'></div>
            </div>
            <div className='mx-3'>
              <p className='flex pl-1 justify-start text-[#1e0f3b] font-sans m-w-[270px] w-auto text-xl font-semibold'>
                Google
              </p>
              <div
                className=' flex xl:items-center lg:items-center sm:items-center md:items-center xl:justify-between lg:justify-between
                   md:justify-between sm:justify-between xl:flex-row lg:flex-row md:flex-row sm:flex-row justify-start flex-col '
              >
                <div className='flex justify-center pl-1'>
                  <img
                    src={cal.src}
                    alt='calender'
                    className='mt-3 w-[20px] h-[20px]'
                  />
                  <p className='m-2 text-md'>02-06-2023</p>
                  <img src={path.src} alt='-' className='mt-1' />
                  <p className='m-2 text-md'>06-06-2023</p>
                </div>
                <div>
                  <p className='text-lg -ml-1 font-medium'>
                    Worked Hours: 62 hr
                  </p>
                </div>
              </div>
              <div className='xl:m-w[625px] -m-1 lg:m-w[625px] md:m-w[620px] border my-2 w-[100%] h-[1px]'></div>
            </div>
            {/* );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default outsorceConsultant;
