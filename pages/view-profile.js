import React from "react";
import { SideBar } from "Components/Sidebar/sideBar";
import backbtn from "../public/Assets/backbtn.svg";
import edit from "../public/Assets/edit.svg";
import google from "../public/Assets/googleIcon.png";
import { useRouter } from "next/router";
const viewProfile = () => {
  const route = useRouter();
  const editClick = () => {
    route.push("/editProfile");
  };
  return (
    <div>
      <div className='bg-[#2B373C1C] py-1 px-2 ml-6'>
        <div
          className='bg-white'
          style={{
            boxShadow: " 0px 2px 10px #4C4E641A",
            borderRadius: "4px",
            maxWidth: "1030px",
            width: "100%",
          }}
        >
          <div className='flex justify-between mt-[12px] pt-[10px] items-center mx-5 sm:mr-9 sm:ml-[10px] '>
            <div className='flex items-center gap-x-4 '>
              <img
                src={backbtn.src}
                alt='back button'
                width={46}
                height={46}
                className='cursor-pointer'
              />
              <p className=' text-[26px] text-[#2B373C] sm:text-2xl font-bold'>
                View Profile
              </p>
            </div>
            <button onClick={editClick}>
              <img src={edit.src} alt='edit' className='w-[125px] h-[51px]' />
            </button>
          </div>
          <hr className='mt-[25px]'></hr>
          <div className='mt-[19px] mx-5 sm:mx-9 flex justify-between'>
            <div style={{ maxWidth: "462px", width: "100%" }}>
              <div className='flex items-center mb-[15px] '>
                <img
                  src={google.src}
                  alt='googleIcon'
                  className='w-[60px] h-[60px]'
                />
                <p className='w-[54px] pl-[17px] font-bold h-[19px] mb-[15px] mt-[15px] text-[#000000] text-left font-sans'>
                  Google
                </p>
              </div>

              <hr
                className=' '
                style={{ width: "100%", maxWidth: "462px" }}
              ></hr>
              <div className='flex justify-between'>
                <h4 className='h-[19px] mb-[15px] mt-[15px] text-left font-bold font-sans text-[#000000] opacity-1'>
                  Company ID
                </h4>
                <p className='h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1'>
                  #54236
                </p>
              </div>
              <hr className=''></hr>
              <div className='flex justify-between'>
                <h4 className='h-[19px] mb-[18px] mt-[15px]  text-left font-bold font-sans text-[#000000] opacity-1'>
                  Industry type
                </h4>
                <p className='h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1'>
                  IT Services & Technology
                </p>
              </div>
              <hr className=''></hr>
              <div className='flex justify-between'>
                <h4 className='h-[19px] mb-[15px] mt-[15px] text-left font-bold font-sans text-[#000000] opacity-1'>
                  Email
                </h4>
                <p className='h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1'>
                  Google@gmail.com
                </p>
              </div>
              <hr className=''></hr>
              <div className='flex justify-between'>
                <h4 className='h-[19px] mb-[15px] mt-[15px] text-left font-bold font-sans text-[#000000] opacity-1'>
                  Website URL
                </h4>
                <p className='h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1'>
                  https://google.com
                </p>
              </div>
              <hr className=''></hr>
              <div className='flex justify-between'>
                <h4 className='h-[19px] mb-[15px] mt-[15px] text-left font-bold font-sans text-[#000000] opacity-1'>
                  Company Size
                </h4>
                <p className='h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1'>
                  500 Employees
                </p>
              </div>
              <hr className=''></hr>
              <div className='flex justify-between'>
                <h4 className='h-[19px] mb-[15px] mt-[15px] text-left font-bold font-sans text-[#000000] opacity-1'>
                  Company Location
                </h4>
                <p className='h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1'>
                  Bengaluru,India
                </p>
              </div>
              <hr className=''></hr>
              <div className='flex justify-between'>
                <h4 className='h-[19px] mb-[15px] mt-[15px] text-left font-bold font-sans text-[#000000] opacity-1'>
                  Founded In
                </h4>
                <p className='h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1'>
                  12-14-2002
                </p>
              </div>
              <hr className=''></hr>
            </div>
            <div className='border w-[1px] h-[100vh] -mt-[19px] ml-[5px]'></div>
            <div className='w-[530px] pl-[30px]'>
              <h1 className='text-[#1E0F3B] mb-[20px] w-[152px] h-[24px] font-bold tracking-[0.2px]'>
                About Company
              </h1>
              <p
                className=' h-auto text-[#1E0F3B] opacity-[0.7] font-normal font-sans text-left'
                style={{ width: "100%", maxWidth: "533px" }}
              >
                About Accenture: Accenture is a global professional services
                company with leading capabilities in digital, cloud and
                security. Combining unmatched experience and specialized skills
                across more than 40 industries, we offer Strategy and
                Consulting, Technology and Operations services and Accenture
                Song-all powered by the world's largest network of Advanced
                Technology and Intelligent Operations centers. Our 699,000
                people deliver on the promise of technology and human ingenuity
                every day, serving clients in more than 120 countries. We
                embrace the power of change to create value and shared success
                for our clients, people, shareholders, partners and communities.
                Visit us at accenture.com
              </p>
              <p
                className=' h-auto text-[#1E0F3B] opacity-[0.7] font-normal font-sans text-left'
                style={{ width: "100%", maxWidth: "533px" }}
              >
                About Accenture: Accenture is a global professional services
                company with leading capabilities in digital, cloud and
                security. Combining unmatched experience and specialized skills
                across more than 40 industries, we offer Strategy and
                Consulting, Technology and Operations services and Accenture
                Song-all powered by the world's largest network of Advanced
                Technology and Intelligent Operations centers. Our 699,000
                people deliver on the promise of technology and human ingenuity
                every day, serving clients in more than 120 countries. We
                embrace
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default viewProfile;
