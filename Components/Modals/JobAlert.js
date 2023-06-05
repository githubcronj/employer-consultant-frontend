import React, { useState } from "react";
import { useRef } from "react";
import deletebutton from "../../public/Assets/delete.svg";
import cancelbutton from "../../public/Assets/cancelbtn.svg";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
const JobAlert = () => {
  return (
    <>
      <>
        <div className='flex  bg-black bg-opacity-50 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
          <div className='relative  w-auto my-6 mx-auto max-w-3xl '>
            <div className='w-auto  bg-white py-1 rounded-[15px] sm:w-[500px] lg:w-[513px] text-center xl:w[513px] xl:h-[212px] flex items-center justify-center'>
              <div className='flex m-w[513px] w-[100%]  flex-col sm:flex justify-between items-center mx-3 my-3 sm:my-0'></div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default JobAlert;
