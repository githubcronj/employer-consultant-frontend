import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SetupExperience = () => {
  const router = useRouter();

  const [experienceData, setExperienceData] = useState({
    companyName: "",
    jobposition: "",
    emptype: "",
    joindate: "",
  });
  const checkboxStyle = {
    accentColor: "#F9342E",
    width: "20px",
    height: "20px",
  };
  const [errors, setErrors] = useState({});
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
      "companyName",
      "jobposition",
      "emptype",
      "joindate",
    ];
    const errors = {};

    requiredFields.forEach((field) => {
      if (experienceData[field] === "") {
        errors[field] = "This field is required";
      }
    });
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  function expHandleChange(e) {
    const { id, value } = e.target;
    setExperienceData((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  }
  const experiChecked = (e) => {
    if (e.target.checked == true) {
      router.push("/setup-details");
    }
  };
  const addData = () => {
    if (isFormValid()) {
      const initialFormValues = {
        companyName: "",
        jobposition: "",
        emptype: "",
        joindate: "",
      };
      setExperienceData(initialFormValues);
    } else {
      return;
    }
  };
  const handleSave = (e) => {
    e.preventDefault();
    if (isFormValid()){
      router.push("/setup-skills");
    }
  };
  const navigateToNext = () => {
    router.push("/setup-details");
  };
  console.log(experienceData,"hey");
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
          <div className="flex justify-between  flex-col sm:flex-row">
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
                Experience
              </p>
            </div>
            <div class="flex items-center mb-4">
              <div class="flex  items-center mb-4">
                <input
                  type="checkbox"
                  id="default-checkbox"
                  name="default-checkbox"
                  value="checked"
                  style={checkboxStyle}
                  onChange={experiChecked}
                />

                <label
                  for="default-checkbox"
                  class="ml-2 text-[#1E0F3B] font-bold dark:text-gray-300"
                >
                  Fresher
                </label>
              </div>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <input
                  type="text"
                  id="companyName"
                  placeholder="Company Name"
                  required
                  className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                  value={experienceData.companyName}
                  onChange={expHandleChange}
                />
                {renderErrorMessage("companyName")}
              </div>
              <div>
                <input
                  type="text"
                  id="jobposition"
                  placeholder="Job Position"
                  required
                  className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                  value={experienceData.jobposition}
                  onChange={expHandleChange}
                />
                {renderErrorMessage("jobposition")}
              </div>
              <div>
                <select
                  id="emptype"
                  required
                  className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select"
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                    backgroundImage: "none",
                    backgroundImage: "url(/Assets/down-arrow.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "95% center",
                    paddingRight: "20px",
                  }}
                  value={experienceData.emptype}
                  onChange={expHandleChange}
                >
                  <option value="" disabled selected>
                    Employment type
                  </option>
                  <option value="Full Time">Full Time </option>
                  <option value="Part Time">Part Time</option>
                </select>
                {renderErrorMessage("emptype")}
              </div>
              <div>
                <div className="relative flex items-center">
                  <DatePicker
                    id="joindate"
                    placeholderText="Date of Joined"
                    required
                    className="block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    selected={experienceData.joindate}
                    onChange={(date) =>
                      expHandleChange({
                        target: { id: "joindate", value: date },
                      })
                    }
                  />
                  <img
                    src="/Assets/calendar.svg"
                    alt="calendar"
                    className="absolute right-2"
                    onClick={() => document.getElementById("joindate").click()}
                  />
                </div>{" "}
                {renderErrorMessage("joindate")}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={addData}
                type="submit"
                className="px-8 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase"
              >
                Add
              </button>
            </div>
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

export default SetupExperience;
