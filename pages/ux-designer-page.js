
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/LoginPage.module.css";
const uxDesigner = () => {
  const router = useRouter();

  const [skillData, setSkilleData] = useState({
    skillName: "",
  }); const [errors, setErrors] = useState({});
  const renderErrorMessage = (fieldName) => {
    if (errors[fieldName]) {
      return (
        <p className="text-red-500 text-xs font-bold">{errors[fieldName]}</p>
      );
    }
    return null;
  };
  const isFormValid = () => {
    const requiredFields = [
      "skillName"
    ];
    const errors = {};

    requiredFields.forEach((field) => {
      if (skillData[field] === "") {
        errors[field] = "This field is required";
      }
    });
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };


  return (
    <div className="bg-[#2B373C1C] py-5 px-2 sm:px-10">
   <div className="grid grid-cols-3 gap-4 mx-2 sm:mx-6 bg-white border px-4 py-4">
  <div className="flex items-center gap-x-4 lg:col-span-1 sm:col-span-2">
    <Image
      src="/Assets/backbtn.svg"
      alt="back button"
      width={46}
      height={46}
      className="cursor-pointer"
    />
    <div>
      <p className="text-[26px] text-[#2B373C] sm:text-2xl font-bold">
        UX Designer
      </p>
      <p className="text-[14px] text-[#2B373C]">3-5 years experience</p>
    </div>
  </div>
  <div className="flex items-center gap-x-4 lg:col-span-1 sm:col-span-2">
    <p className="text-[16px] text-[#2B373C]">Full Time .</p>
    <p className="text-[16px] text-[#2B373C]">$10-15 /hr .</p>
    <p className="text-[16px] text-[#2B373C]">12-09-2023</p>
  </div>
  <div className="flex items-center  lg:justify-end gap-x-4 lg:col-span-1 sm:col-span-2">
    <p className="text-[16px] text-[#5E9AF8] font-bold">View Job Post</p>
    <img src="/Assets/forwardArr.svg" alt="frw-ar" />
  </div>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 sm:mx-6 bg-[#F9F6EE] border px-4 py-4">
  <div className="col-span-1 sm:col-span-2 lg:col-span-1">
    <div className="relative w-full">
      <input
        type="text"
        id="simple-search"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder="Search"
        required
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Image src="/Assets/searchIcon.svg" alt="Search Icon" width={16} height={16} />
      </div>
    </div>
  </div>
  <div className="col-span-1 sm:col-span-1 lg:col-span-2">
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <div className="lg:col-span-2 md:col-span-2 sm:col-span-1">
        <select
          id="experience1"
          required
          className="py-2 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select"
          style={{
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            backgroundImage: "none",
            backgroundImage: "url(/Assets/down-arrow.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "95% center",
            paddingRight: "20px",
            ...(errors.experience ? { borderColor: "red" } : {}),
          }}
        >
          <option value="">Education Level</option>
          <option value="one">1 year</option>
          <option value="two">2 years</option>
          <option value="three">3 years</option>
        </select>
      </div>
      <div className="lg:col-span-2 md:col-span-2 sm:col-span-1">
        <select
          id="experience2"
          required
          className="py-2 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select"
          style={{
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            backgroundImage: "none",
            backgroundImage: "url(/Assets/down-arrow.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "95% center",
            paddingRight: "20px",
            ...(errors.experience ? { borderColor: "red" } : {}),
          }}
        >
          <option value="">Applied Date</option>
          <option value="one">1 year</option>
          <option value="two">2 years</option>
          <option value="three">3 years</option>
        </select>
      </div>
      <div className="lg:col-span-2 md:col-span-2 sm:col-span-1">
        <select
          id="experience3"
          required
          className="py-2 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select"
          style={{
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
            backgroundImage: "none",
            backgroundImage: "url(/Assets/down-arrow.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "95% center",
            paddingRight: "20px",
            ...(errors.experience ? { borderColor: "red" } : {}),
          }}
        >
          <option value="">Location</option>
          <option value="one">1 year</option>
          <option value="two">2 years</option>
          <option value="three">3 years</option>
        </select>
      </div>
      <div className="lg:col-span-2  md:col-span-2 sm:col-span-1">
        <button
          type="submit"
          className="flex items-center gap-2 px-8 py-2 bg-transparent text-[#A7A7A7] border border-[#A7A7A7] rounded-[16px] inline-flex gap-4 items-center tracking-wide  mr-1 sm:mr-3"
        >
          <img src="/Assets/crossIcon.svg" alt="Image" className="w-4 h-4" />
          Clear
        </button>
      </div>
    </div>
  </div>
</div>


      <div className=" bg-white    mx-2 sm:mx-6 lg-mx-8 border rounded-xl grid lg:grid-cols-6">
        {/* first section */}
        <div className="flex flex-col lg:col-span-2 py-6 px-6"
          style={{ borderRight: "2px solid #D8D8DD" }}
        >
         <p className=" text-[26px] text-[#2B373C] sm:text-2xl font-bold">
         24 Consultant
          </p>
<div className="gap-3">
          <div className={`flex items-center mt-5 m-3 border-b p-2 ${styles.uxCard}` }>
      
      <Image
            src="/Assets/clientImg.png"
            alt="back button"
            width={46}
            height={46}
            className="cursor-pointer w-10 h-10 rounded-full mr-4"
          />
      <div className="text-sm">
        <p className="text-gray-900 leading-none font-bold text-[16px]">James Joy</p>
        <p className="text-gray-600 mt-2">UX Designer . 2 yr Exp</p>
      </div>
    </div>
    <div className ={`flex items-center mt-5 m-3 border-b p-2 ${styles.uxCard}` }>
      
      <Image
            src="/Assets/clientImg.png"
            alt="back button"
            width={46}
            height={46}
            className="cursor-pointer w-10 h-10 rounded-full mr-4"
          />
      <div className="text-sm">
        <p className="text-gray-900 leading-none font-bold text-[16px]">James Joy</p>
        <p className="text-gray-600 mt-2">UX Designer . 2 yr Exp</p>
      </div>
    </div>
    <div className={`flex items-center mt-5 m-3 border-b p-2 ${styles.uxCard}` }>
      
      <Image
            src="/Assets/clientImg.png"
            alt="back button"
            width={46}
            height={46}
            className="cursor-pointer w-10 h-10 rounded-full mr-4"
          />
      <div className="text-sm">
        <p className="text-gray-900 leading-none font-bold text-[16px]">James Joy</p>
        <p className="text-gray-600 mt-2">UX Designer . 2 yr Exp</p>
      </div>
    </div>
    <div className={`flex items-center mt-5 m-3 border-b p-2 ${styles.uxCard}` }>
      
      <Image
            src="/Assets/clientImg.png"
            alt="back button"
            width={46}
            height={46}
            className="cursor-pointer w-10 h-10 rounded-full mr-4"
          />
      <div className="text-sm">
        <p className="text-gray-900 leading-none font-bold text-[16px]">James Joy</p>
        <p className="text-gray-600 mt-2">UX Designer . 2 yr Exp</p>
      </div>
    </div>
    <div className={`flex items-center mt-5 m-3 border-b p-2 ${styles.uxCard}` }>
      
      <Image
            src="/Assets/clientImg.png"
            alt="back button"
            width={46}
            height={46}
            className="cursor-pointer w-10 h-10 rounded-full mr-4"
          />
      <div className="text-sm">
        <p className="text-gray-900 leading-none font-bold text-[16px]">James Joy</p>
        <p className="text-gray-600 mt-2">UX Designer . 2 yr Exp</p>
      </div>
    </div>
    <div className={`flex items-center mt-5 m-3 border-b p-2 ${styles.uxCard}` }>
      
      <Image
            src="/Assets/clientImg.png"
            alt="back button"
            width={46}
            height={46}
            className="cursor-pointer w-10 h-10 rounded-full mr-4"
          />
      <div className="text-sm">
        <p className="text-gray-900 leading-none font-bold text-[16px]">James Joy</p>
        <p className="text-gray-600 mt-2">UX Designer . 2 yr Exp</p>
      </div>
    </div>
    <div className={`flex items-center mt-5 m-3 border-b p-2 ${styles.uxCard}` }>
      
      <Image
            src="/Assets/clientImg.png"
            alt="back button"
            width={46}
            height={46}
            className="cursor-pointer w-10 h-10 rounded-full mr-4"
          />
      <div className="text-sm">
        <p className="text-gray-900 leading-none font-bold text-[16px]">James Joy</p>
        <p className="text-gray-600 mt-2">UX Designer . 2 yr Exp</p>
      </div>
    </div>
    </div>
        <div>
          
        </div>
        
        </div>
        {/* section 2 */}
        <div className="lg:col-span-3">
  <div className="flex">
    <div className="border-l border-r">
      <img src="/Assets/resumeTemplate.png" alt="cameraIcon" />
    </div>
  </div>
</div>
        <div className=" flex flex-col py-6 px-6 lg:col-span-1 border-l ml-12"  style={{ width: "fit-content" }}>
       
          <div className="flex justify-end px-3 py-3">
            <img src="/Assets/tick.svg" alt="tick"/>
          </div>
          <div className="flex justify-end px-3 py-3">
            <img src="/Assets/crossbtn.svg" alt="tick"/>
          </div>
          <div className="flex justify-end px-3 py-3">
            <img src="/Assets/mailBtn.svg" alt="tick"/>
          </div>
          <div className="flex justify-end px-3 py-3">
            <img src="/Assets/chat.svg" alt="tick"/>
          </div>
          <div className="flex justify-end px-3 py-3">
            <img src="/Assets/mail2.svg" alt="tick"/>
          </div>
         
          
        </div>
      
      </div>
    </div>
  );
};

export default uxDesigner;
