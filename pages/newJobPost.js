import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewJobPost = () => {
  const router = useRouter();

  const [errors, setErrors] = useState({});
  const [isFieldChanged, setIsFieldChanged] = useState(false);
  const [jobPostData, setJobPostData] = useState({
    jobTitle: "",
    experience: "",
    applicationDeadline: "",
    jobType: "",
    min: "",
    max: "",
    jobDescription: "",
    email: "",
    phoneNumber: "",
  });
  const renderErrorMessage = (fieldName) => {
    if (errors[fieldName]) {
      return <p className="text-red-500 text-xs">{errors[fieldName]}</p>;
    }
    return null;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setJobPostData((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    setIsFieldChanged(true);
    if (id === "email") {
      const isValidEmail = /^[\w+.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(
        value
      );
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: isValidEmail ? "" : "Invalid email format",
      }));
    }
  };
  const isFormValid = () => {
    const requiredFields = [
      "jobTitle",
      "experience",
      "applicationDeadline",
      "jobType",
      "min",
      "max",
      "jobDescription",
      "email",
      "phoneNumber",
    ];
    const errors = {};

    requiredFields.forEach((field) => {
      if (jobPostData[field] === "") {
        errors[field] = "This field is required";
      }
    });
    if (
      jobPostData.email !== "" &&
      !/^[\w+.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(jobPostData.email)
    ) {
      errors.email = "Invalid email format";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };
  const handleSave = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log(jobPostData);
      const initialJobPostData = {
        jobTitle: "",
        experience: "",
        applicationDeadline: "",
        jobType: "",
        min: "",
        max: "",
        jobDescription: "",
        email: "",
        phoneNumber: "",
      };
      setJobPostData(initialJobPostData);
      console.log(jobPostData);
      router.push("/home");
    } else {
      return;
    }
  };
  return (
    <div className="bg-[#2B373C1C] py-4 px-2 sm:px-4">
      <div className="bg-white">
        <div className="md:flex justify-between items-center mx-5 sm:mx-9 py-1">
          <div className="my-3 flex gap-6">
            <Link href="/home">
              <Image
                src="/Assets/backbtn.svg"
                alt="back button"
                width={35}
                height={35}
                className="cursor-pointer"
              />
            </Link>
            <p className="text-lg sm:text-2xl font-bold">Create New Job Post</p>
          </div>
          <div className="flex gap-2 sm:gap-5">
            <button
              onClick={handleSave}
              className="px-11 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3"
            >
              Save
            </button>
            <Link href="/home">
              <button className="px-8 py-3 bg-white border border-red-500 text-red-500 rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3">
                Cancel
              </button>
            </Link>
          </div>
        </div>
        {/* form section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-3 lg:mx-20 lg:px-10 xl:px-24 py-8 my-3">
          <div className="relative">
            <label
              className="absolute top-[-8px] left-0 ml-2 mt-px  bg-white px-1 text-[#1E0F3B] text-xs font-bold"
              for="jobTitle"
            >
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              placeholder="UX Designer"
              style={errors.jobTitle ? { borderColor: "red" } : {}}
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
              value={jobPostData.jobTitle}
              onChange={handleChange}
            />
            {renderErrorMessage("jobTitle")}
          </div>
          {/*  */}
          <div>
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
              value={jobPostData.experience}
              onChange={handleChange}
            >
              <option value="">Experience</option>
              <option value="one">1 year</option>
              <option value="two">2 year</option>
              <option value="three">3 year</option>
            </select>
            {renderErrorMessage("experience")}
          </div>
          {/*  */}
          <div>
            <div className="relative flex items-center">
              <DatePicker
                id="applicationDeadline"
                placeholderText="Application Deadline"
                required
                className={`block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${errors.applicationDeadline ? "border-red-500" : ""}`}
                selected={jobPostData.applicationDeadline}
                onChange={(date) =>
                  handleChange({
                    target: { id: "applicationDeadline", value: date },
                  })
                }
              />
              <label
                for="applicationDeadline"
                className="absolute hidden my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Founded In{" "}
              </label>
              <img
                src="/Assets/calendar.svg"
                alt="calendar"
                className="absolute right-2"
                onClick={() => document.getElementById("founded").click()}
              />{" "}
            </div>
            {renderErrorMessage("applicationDeadline")}
          </div>
          {/*  */}

          <div>
            <select
              id="jobType"
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
                ...errors.jobType ? { borderColor: "red" } : {}
              }}
              value={jobPostData.jobType}
              onChange={handleChange}
            >
              <option value="">Job Type</option>
              <option value="UI">UX Designer</option>
              <option value="React">React Developer</option>
              <option value="Devops">Dev Ops Engineer</option>
            </select>
            {renderErrorMessage("jobType")}
          </div>

          {/*  salary starts here  */}
          <div className="relative sm:col-span-2">
            <div
              className="absolute top-[-8px] left-0 ml-2 mt-px  bg-white px-1 text-[#1E0F3B] text-xs font-bold"
              for="jobTitle"
            >
              Salary
            </div>
            <div className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full grid grid-cols-1 md:grid-cols-2">
              <div className="my-3 md:my-0">
                <ul className="justify-center md:justify-normal flex gap-3 sm:gap-8 md:gap-3 items-center">
                  <li>
                    <div className="flex">
                      <input
                        type="checkbox"
                        id="hourly"
                        className="peer hidden"
                      />
                      <label
                        for="hourly"
                        className="select-none cursor-pointer rounded-lg bg-gray-200 py-5 text-md sm:text-lg px-3 sm:px-6 text-gray-700 transition-colors duration-200 ease-in-out peer-checked:bg-[#5E9AF8] peer-checked:text-white peer-checked:border-0 "
                      >
                        Hourly
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex">
                      <input type="checkbox" id="monthly" class="peer hidden" />
                      <label
                        for="monthly"
                        className="select-none cursor-pointer rounded-lg bg-gray-200 py-5 text-md sm:text-lg px-3 sm:px-5 text-gray-700 transition-colors duration-200 ease-in-out peer-checked:bg-[#5E9AF8] peer-checked:text-white peer-checked:border-0"
                      >
                        Monthly
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex">
                      <input type="checkbox" id="yearly" class="peer hidden" />
                      <label
                        for="yearly"
                        className="select-none cursor-pointer rounded-lg bg-gray-200 py-5 text-md sm:text-lg px-4 sm:px-7 text-gray-700 transition-colors duration-200 ease-in-out peer-checked:bg-[#5E9AF8] peer-checked:text-white peer-checked:border-0 "
                      >
                        Yearly
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              {/* min max */}
              <div className="flex gap-3 justify-evenly md:justify-normal">
                {/* min */}
                <div className="relative">
                  <input
                    type="text"
                    id="min"
                    placeholder=" "
                    style={errors.min ? { borderColor: "red" } : {}}
                    required
                    className={`block py-5 px-4 w-full text-sm text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                `}
                    value={jobPostData.min}
                    onChange={handleChange}
                  />

                  <label
                    for="min"
                    className="absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Min
                  </label>
                  {renderErrorMessage("min")}
                </div>
                {/* max */}
                <div className="relative">
                  <input
                    type="text"
                    id="max"
                    placeholder=" "
                    required
                    style={errors.max ? { borderColor: "red" } : {}}
                    className={`block py-5 px-4 w-full text-sm text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                        `}
                    value={jobPostData.max}
                    onChange={handleChange}
                  />

                  <label
                    for="max"
                    className="absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Max
                  </label>
                  {renderErrorMessage("max")}
                </div>
              </div>
              {/* min max ends here */}
            </div>
          </div>
          {/* salary ends here */}

          {/* jd */}
          <div className="sm:col-span-2 relative">
            <textarea
              type="text"
              id="jobDescription"
              placeholder=" "
              required
              style={errors.jobDescription ? { borderColor: "red" } : {}}
              className="block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={jobPostData.jobDescription}
              onChange={handleChange}
            />
            <label
              for="jobDescription"
              className="absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Job Description
            </label>
            {renderErrorMessage("jobDescription")}
          </div>
          {/* jd ends here */}
          {/* email */}
          <div className="relative">
            <input
              type="text"
              id="email"
              placeholder=" "
              required
              style={errors.email ? { borderColor: "red" } : {}}
              className={`block py-5 px-4 w-full text-sm text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
              ${isFieldChanged && errors.email ? "border-red-500" : ""} `}
              value={jobPostData.email}
              onChange={handleChange}
            />

            <label
              htmlFor="email"
              className="absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Email
            </label>
           
            {renderErrorMessage("email")}
          </div>
          {/* phone number */}
          <div className="relative">
            <input
              type="number"
              id="phoneNumber"
              placeholder=" "
              required
            //   minlength="10"
            //   maxlength="12"
              style={errors.phoneNumber ? { borderColor: "red" } : {}}
              className={`block py-5 px-4 w-full text-sm text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                `}
              value={jobPostData.phoneNumber}
              onChange={handleChange}
            />

            <label
              for="phoneNumber"
              className="absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Phone Number
            </label>
            {renderErrorMessage("phoneNumber")}
          </div>
        </div>
        {/* form section ends here */}
      </div>
    </div>
  );
};

export default NewJobPost;
