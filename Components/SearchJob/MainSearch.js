import React from "react";
import { useState } from "react";
import google from "../../public/Assets/googleIcon.png";
import experienceicon from "../../public/Assets/suitcase.svg";
import building from "../../public/Assets/building.svg";
import call from "../../public/Assets/call.svg";
import laptop from "../../public/Assets/laptop.svg";
import location from "../../public/Assets/location.svg";
import mail from "../../public/Assets/mail.svg";
import money from "../../public/Assets/money.svg";
import scheduler from "../../public/Assets/scheduler.svg";
import apply from "../../public/Assets/apply.svg";
import chaticon from "../../public/Assets/chaticon.svg";
import bookmark from "../../public/Assets/bookmark.svg";
const MainSearch = () => {
  const [flexing, setFlexing] = useState(false);

  return (
    <div
      className='bg-white w-auto'
      style={{ borderRadius: "5px" }}
    >
      <div className='mt-[19px] mx-3  sm:col-span-2'>
        <div className='lg:col-span-6 sm:col-span-1 '>
          <div className='flex justify-between'>
            <div
              className={`flex items-center mb-[15px] ${
                flexing ? "flex-col" : "flex-row"
              }`}
            >
              <img
                src={google.src}
                alt='googleIcon'
                className='w-[63px] h-[63px] '
              />
              <div>
                <p className='text-2xl font-extrabold  xl:pl-[17px] lg:pl-[17px] sm:pl-[17px] md:pl-[17px] pl-[5px]  h-[19px] mb-[15px] mt-[15px] text-[#000000] text-left font-sans'>
                  UX Designer
                </p>

                <div className='flex items-center justify-between align-baseline'>
                  <p className='w-[54px] mr-6 xl:pl-[17px] lg:pl-[17px] sm:pl-[17px] md:pl-[17px] pl-[5px] font-bold h-[19px] mb-[10px] mt-[10px] text-[#000000] text-left font-sans'>
                    Google
                  </p>
                  <p className='pt-1'>company Id</p>
                </div>
              </div>
            </div>
            <div className='mt-[19px] mx-3 flex flex-col gap-5'>
              <img src={apply.src} alt='apply' className='w-[125px] h-[51px]' />
              <p className='text-lg ml-3'>12-04-2023</p>
            </div>
          </div>

          <div className='flex m-3 '>
            <img
              src={experienceicon.src}
              alt=''
              className='w-[44px] h-[44px]'
            />

            <p className='h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
              {/* {item?.experience} years */}2 yrs Experience
            </p>
          </div>

          <div className='flex m-3 '>
            <img src={building.src} alt='' className='w-[44px] h-[44px]' />
            <p className='h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
              IT consultancy
            </p>
          </div>
          <div className='flex m-3 '>
            <img src={money.src} alt='money' className='w-[44px] h-[44px]' />
            <p className='h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
              {/* {item?.salary} */}
              10$/hr
            </p>
          </div>
          <div className='flex justify-between'>
            <div className='flex m-3 '>
              <img
                src={laptop.src}
                alt='laptop'
                className='w-[44px] h-[44px]'
              />
              <p className='h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
                {/* {item?.jobType}{" "} */}
                Full Time
              </p>
            </div>
            <div>
              <img
                src={bookmark.src}
                alt='bookmark'
              />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='flex m-3 '>
              <img src={location.src} alt='' className='w-[44px] h-[44px]' />
              <p className='h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
                Silicon Valley
              </p>
            </div>
            <div>
              <img
                src={chaticon.src}
                alt='chat'
                // className='w-[54px] h-[54px]'
              />
            </div>
          </div>
          <hr className=' w-[100%] xl:my-0 lg:my-0 md:my-[2px] sm:my-[2px] my-[25px]'></hr>

          <div className='flex m-3 '>
            <img
              src={scheduler.src}
              alt='calender'
              className='w-[44px] h-[44px]'
            />
            <p className='h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
              20-04-2024
            </p>
          </div>
          <div className='flex m-3 '>
            <img src={mail.src} alt='mail' className='w-[44px] h-[44px]' />
            <p className='h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
              {/* {item?.email}{" "} */}
              @gmail.com
            </p>
          </div>
          <div className='flex m-3 '>
            <img
              src={call.src}
              alt='Phone number'
              className='w-[44px] h-[44px]'
            />
            <p className='h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl'>
              {/* {item?.phoneNumber}{" "} */}
              1234567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainSearch;
