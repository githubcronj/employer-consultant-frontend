import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";

const SetupSkills = () => {
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
      <div className="flex justify-between items-center mx-5 sm:mx-9">
        <div className="flex items-center gap-x-4 ">
          <Image
            src="/Assets/backbtn.svg"
            alt="back button"
            width={46}
            height={46}
            className="cursor-pointer"
          />
          <p className=" text-[26px] text-[#2B373C] sm:text-2xl font-bold">
            Setup details
          </p>
        </div>
        <button onClick={handleSave} className="px-8 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3">
          <img src="/Assets/check.svg" alt="save" />
          Save
        </button>
      </div>
      <div className=" bg-white    mx-2 sm:mx-6 lg-mx-8 border rounded-xl grid lg:grid-cols-5">
        {/* first section */}
        <div
          className="flex flex-col lg:col-span-3 py-6 px-6"
          style={{ borderRight: "2px solid #D8D8DD" }}
        >
          <div className="flex items-center gap-x-4 pb-6">
            <Image
              src="/Assets/backbtn.svg"
              alt="back button"
              width={34}
              height={34}
              className="cursor-pointer"
              onClick={navigateToNext}
            />
            <p className=" text-[26px] text-[#2B373C] sm:text-2xl font-bold">
              Skill{" "}
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="relative">
                <input
                  type="text"
                  id="skillName"
                  placeholder="Skill name"
                  required
                  className="py-5 pl-4 pr-32 border rounded-[10px] border-[#D8D8DD] w-full"
                  value={skillData.skillName}
                  onChange={skillHandleChange}
                />
                <button
                  type="submit" onClick={addData}
                  className="px-8 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase absolute top-0 right-0 mt-2 mr-1 sm:mr-3 sm:mt-2"
                >
                  Add
                </button>
              </div>
              {renderErrorMessage("skillName")}
            </div>
            <div className="flex justify-end"></div>
          </form>
          {/* block display */}
          {/* <div className="py-4 grid sm:grid-cols-2 gap-7">
        {infodata.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#F9F6EE] p-6 bordr rounded-xl text-[#1E0F3B] font-bold"
              style={{ position: "relative" }}
            >
              <div>
                <p className="">{item.eduLevel + " " + item.degree}</p>
                <p className="py-1">{item.institutionName}</p>
                <p className="text-[#9C94A2]">{item.passingyear}</p>
              </div>
              <img
                src="/Assets/cross.svg"
                alt="cameraIcon"
                className=" justify-end"
                style={{ position: "absolute", top: "11%", right: "2%" }}
                onClick={() => removeData(index)}
              />
            </div>
          );
        })}
      </div> */}
        </div>
        {/* section 2 */}
        <div className="lg:col-span-2">
          <img src="/Assets/resumeTemplate.png" alt="cameraIcon" />
        </div>
      </div>
    </div>
  );
};

export default SetupSkills;
