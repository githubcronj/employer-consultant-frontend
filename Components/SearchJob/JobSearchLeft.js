import React from "react";
import spotify from "../../public/Assets/spotify.svg";
const leftmapping = [
  {
    title: "UX Designer",
    company: "Spotify",
    Experience: "2 yrs exp",
  },
  {
    title: "UX Designer",
    company: "Spotify",
    Experience: "2 yrs exp",
  },
  {
    title: "UX Designer",
    company: "Spotify",
    Experience: "2 yrs exp",
  },
  {
    title: "UX Designer",
    company: "Spotify",
    Experience: "2 yrs exp",
  },
  {
    title: "UX Designer",
    company: "Spotify",
    Experience: "2 yrs exp",
  },
  
];
const JobSearchLeft = () => {
  return (
    <div>
      <div className='bg-white xl:max-w-[278px] lg:max-w-[278px] w-auto max-h-[732px] h-auto' style={{borderRadius:"6px"}}>
        <p className='font-semibold text-xl pt-[24px] pl-[22px]'>24 Jobs</p>

        {leftmapping?.map((item, index) => {
          return (
            <div className='' key={index}>
              <div className='flex gap-3 items-center pt-3 pl-[24px]  w-auto h-auto'>
                <div>
                  <img
                    src={spotify.src}
                    alt='logo'
                    className='w-[46px] h-[46px]'
                  />
                </div>
                <div className='flex flex-col '>
                  <div>
                    <p className='font-semibold text-lg -mt-1.5'>{item.title}</p>
                  </div>
                  <div className='flex gap-3'>
                    <p>{item.company}</p>
                    <p className='font-extrabold text-xl -mt-1'>.</p>
                    <p>{item.Experience}</p>
                  </div>
                </div>
              </div>
              <div className='w-[100%] h-[1px] border my-3'></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default JobSearchLeft;
