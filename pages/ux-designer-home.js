
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";

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
  function skillHandleChange(e) {
    const { id, value } = e.target;
    setSkilleData((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  }
  const addData = () => {
    if (isFormValid()) {
      const initialFormValues = {
        skillName: "",
        
      };
      setSkilleData(initialFormValues);
    } else {
      return;
    }
  };
  const handleSave = (e) => {
    e.preventDefault();
    if (isFormValid()){
      router.push("/setup-project");
    }
  };
  const navigateToNext = () => {
    router.push("/setup-details");
  };
  return (
    <div className="bg-[#2B373C1C] py-5 px-2 sm:px-10">
      <div className="flex justify-between items-center mx-2 sm:mx-6 bg-white border  px-4 py-4">
        <div className="flex items-center gap-x-4 ">
          <Image
            src="/Assets/backbtn.svg"
            alt="back button"
            width={46}
            height={46}
            className="cursor-pointer"
          />
          <div>
          <p className=" text-[26px] text-[#2B373C] sm:text-2xl font-bold">
          UX Designer
          </p>
          <p className=" text-[14px] text-[#2B373C]">
          3-5 years experience
          </p>
          </div>
         
        </div>
        <div className="flex items-center gap-x-4 ">
        
          
          <p className=" text-[16px] text-[#2B373C]">
          Full Time
          </p>
          <p className=" text-[14px] text-[#2B373C] font-bold">
            .
          </p>
          
          <p className=" text-[16px] text-[#2B373C]">
          $10-15 /hr
          </p>
          <p className=" text-[14px] text-[#2B373C]">
            .
          </p>
          
          <p className=" text-[16px] text-[#2B373C]">
          12-09-2023
          </p>
         

          
         
        </div>
        <div className="flex items-center gap-x-4 ">
          
         
        
          <p className=" text-[16px] text-[#5E9AF8] font-bold">
          View Job Post 
          </p>
          
         
        </div>
       
      </div>
      <div className="flex justify-between items-center mx-2 sm:mx-6 bg-[#F9F6EE] border  px-4 py-4">
        <div className="flex items-center gap-x-4 ">
        <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Search"
                  required
                />
         
         
        </div>
        <div className="flex items-center gap-x-4 ">
        
          
        <select
              id="experience"
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select "
              style={{
                WebkitAppearance: "none",
                MozAppearance: "none",
                appearance: "none",
                backgroundImage: "none",
                backgroundImage: "url(/Assets/down-arrow.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "95% center",
                paddingRight: "20px",
                ...errors.experience ? { borderColor: "red" } : {}
              }}
              
            >
              <option value="">Experience</option>
              <option value="one">1 year</option>
              <option value="two">2 year</option>
              <option value="three">3 year</option>
            </select>
        
            <select
              id="experience"
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select "
              style={{
                WebkitAppearance: "none",
                MozAppearance: "none",
                appearance: "none",
                backgroundImage: "none",
                backgroundImage: "url(/Assets/down-arrow.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "95% center",
                paddingRight: "20px",
                ...errors.experience ? { borderColor: "red" } : {}
              }}
              
            >
              <option value="">Experience</option>
              <option value="one">1 year</option>
              <option value="two">2 year</option>
              <option value="three">3 year</option>
            </select>
        
          
            <select
              id="experience"
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select "
              style={{
                WebkitAppearance: "none",
                MozAppearance: "none",
                appearance: "none",
                backgroundImage: "none",
                backgroundImage: "url(/Assets/down-arrow.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "95% center",
                paddingRight: "20px",
                ...errors.experience ? { borderColor: "red" } : {}
              }}
              
            >
              <option value="">Experience</option>
              <option value="one">1 year</option>
              <option value="two">2 year</option>
              <option value="three">3 year</option>
            </select>
         

          
         
        </div>
        <div className="flex items-center gap-x-4 ">
          
         
        
          <button
                  type="submit" 
                  className="px-8 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase  mt-2 mr-1 sm:mr-3 sm:mt-2"
                >
                  Add
                </button>
         
        </div>
       
      </div>
      <div className=" bg-white    mx-2 sm:mx-6 lg-mx-8 border rounded-xl grid lg:grid-cols-5">
        {/* first section */}
        <div
          className="flex flex-col lg:col-span-2 py-6 px-6"
          style={{ borderRight: "2px solid #D8D8DD" }}
        >
          
        
        </div>
        {/* section 2 */}
        <div className="lg:col-span-2">
          <img src="/Assets/resumeTemplate.png" alt="cameraIcon" />
        </div>
      </div>
    </div>
  );
};

export default uxDesigner;
