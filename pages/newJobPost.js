import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { jobSaveRequest } from "../store/action/jobPostAction";
import { generateResponseSaveRequest } from "store/action/generateResponseAction";
import CircularProgress from "@mui/material/CircularProgress";

const NewJobPost = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [data, setData] = useState(null);
  const [selectedButton, setSelectedButton] = useState("");
  const [isFieldChanged, setIsFieldChanged] = useState(false);
  const [description, setDescription] = useState("");
  const [jobPostData, setJobPostData] = useState({
    jobTitle: "",
    experience: "",
    deadline: "",
    jobType: "",
    minSalary: "",
    maxSalary: "",
    // description: "",
    email: "",
    phoneNumber: "",
    salary: "",
    industryType: "",
    skills: [],
  });
  const renderErrorMessage = (fieldName) => {
    if (errors[fieldName]) {
      return <p className='text-red-500 text-xs'>{errors[fieldName]}</p>;
    }
    return null;
  };
  //
  const inputFieldProps = {
    style: { borderColor: errors.jobTitle ? "red" : "" },
    required: true,
    className: 'py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full',
  };
  // 
  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const finaltoken = getToken();
  //
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      setData(JSON.parse(storedData));
    }
  }, []);
  useEffect(() => {
    if (data && data.token && data.token.accessToken) {
      setJobPostData((prevValues) => ({
        ...prevValues,
        accessToken: data.token.accessToken,
      }));
    }
  }, [data]);
  // response
  const response = useSelector((state) => state?.generateResponseReducer?.data);

  // console.log(response?.key_requirements, "respooonse");

  const defaultDescriptionValue =
    `${response?.job_description}\n\nKey Requirements:\n` +
    (response?.key_requirements || [])
      .map((requirement) => `• ${requirement}`)
      .join("\n") +
    "\n\nResponsibilities:\n" +
    (response?.responsibilities || "") +
    "\n\nConcluding Details:\n" +
    (response?.concluding_details || "");

  const handleSalaryButton = (e) => {
    setSelectedButton(e.target.id);
    setJobPostData((prevValues) => ({
      ...prevValues,
      salary: e.target.id,
    }));
  };
  const handleDateChange = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    // Format the date as "yyyy-mm-dd"
    const formattedDate = `${year}-${month}-${day}`;

    setJobPostData((prevValues) => ({
      ...prevValues,
      deadline: formattedDate, // Update the companyFoundedDate field in formValues with the formatted date
    }));
  };

  useEffect(() => {
    setDescription(defaultDescriptionValue);
  }, [defaultDescriptionValue.length]);

  const handleChangeDesc = (e) => {
    setDescription(e.target.value);
    // setDescription((prevValues) => ({
    // ...prevValues,
    // description: e.target.value,
    // }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    // setJobPostData((prevValues) => ({
    //   ...prevValues,
    //   [id]: value,
    // }));

    if (id === "experience") {
      setJobPostData((prevValues) => ({
        ...prevValues,
        [id]: parseInt(value),
      }));
    } else if (id === "maxSalary" || id === "minSalary") {
      const numericValue = parseInt(value);

      if (!isNaN(numericValue)) {
        setJobPostData((prevValues) => ({
          ...prevValues,
          [id]: numericValue,
        }));
      } else {
        setJobPostData((prevValues) => ({
          ...prevValues,
          [id]: "", // Clear the field if the input is not a valid number
        }));
      }
    }
    // else if (response && defaultDescriptionValue && id === "description" && value === "") {
    //   // Handle description field separately
    //   setJobPostData((prevValues) => ({
    //     ...prevValues,
    //     [id]: defaultDescriptionValue,
    //   }));
    // }
    else {
      setJobPostData((prevValues) => ({
        ...prevValues,
        [id]: value,
      }));
    }
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
      "deadline",
      "jobType",
      "minSalary",
      "maxSalary",
      // "description",
      "email",
      "phoneNumber",
      "salary",
      "industryType",
      "skills",
    ];
    const errors = {};
    if (jobPostData === null) {
      return false;
    }

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
  const loading = useSelector(
    (state) => state?.generateResponseReducer?.loading
  );
  console.log("loading", loading);

  console.log(defaultDescriptionValue, "gdhhonse");
  const handleGenerateResponse = (e) => {
    const requestData = {
      jobTitle: jobPostData.jobTitle,
      jobType: jobPostData.jobType,
      experience: jobPostData.experience,
    };
    dispatch(generateResponseSaveRequest(requestData, finaltoken));
    console.log(requestData);
  };

  console.log("descccc", description);
  const handleSave = (e) => {
    e.preventDefault();
    const jobData = {
      jobTitle: jobPostData.jobTitle,
      experience: jobPostData.experience,
      deadline: jobPostData.deadline,
      jobType: jobPostData.jobType,
      minSalary: jobPostData.minSalary,
      maxSalary: jobPostData.maxSalary,
      description: description,
      email: jobPostData.email,
      phoneNumber: jobPostData.phoneNumber,
      salary: jobPostData.salary,
      industryType: jobPostData.industryType,
      skills: jobPostData.skills,
    };
    console.log("jobdata", jobData);

    if (isFormValid()) {
      dispatch(jobSaveRequest(jobData, finaltoken));

      // console.log(payload,'ppppp');
      const initialJobPostData = {
        jobTitle: "",
        experience: "",
        deadline: "",
        jobType: "",
        minSalary: "",
        maxSalary: "",
        // description: "",
        email: "",
        phoneNumber: "",
        salary: "",
        industryType: "",
        skills: [],
      };
      setJobPostData(initialJobPostData);
      // console.log(jobPostData);
      router.push("/");
    } else {
      return;
    }
  };
  return (
    <div className='bg-[#2B373C1C] py-4 px-2 sm:px-4'>
      <div className='bg-white'>
        <div className='md:flex justify-between items-center mx-5 sm:mx-9 py-1'>
          <div className='my-3 flex gap-6'>
            <Link href='/'>
              <Image
                src='/Assets/backbtn.svg'
                alt='back button'
                width={35}
                height={35}
                className='cursor-pointer'
              />
            </Link>
            <p className='text-lg sm:text-2xl font-bold'>Create New Job Post</p>
          </div>
          <div className='sm:flex gap-2 sm:gap-5'>
            <div>
              <button
                onClick={handleSave}
                className='px-11 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3'
              >
                Save
              </button>
            </div>
            <div>
              <Link href='/'>
                <button className='px-8 py-3 bg-white border border-red-500 text-red-500 rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3'>
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* form section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mx-3 lg:mx-20 lg:px-10 xl:px-20 py-8 my-3'>
          <div className='relative'>
            <label
              className='absolute top-[-8px] left-0 ml-2 mt-px  bg-white px-1 text-[#1E0F3B] text-xs font-bold'
              for='jobTitle'
            >
              Job Title
            </label>
            <input
              type='text'
              id='jobTitle'
              placeholder='UX Designer'
              style={errors.jobTitle ? { borderColor: "red" } : {}}
              required
              className='py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full'
              value={jobPostData.jobTitle}
              onChange={handleChange}
            />
            {renderErrorMessage("jobTitle")}
          </div>
          {/*  */}
          <div>
            <select
              id='experience'
              required
              className='py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select '
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
              value={jobPostData.experience}
              onChange={handleChange}
            >
              <option value=''>Experience</option>
              <option value='1'>1 year</option>
              <option value='2'>2 year</option>
              <option value='3'>3 year</option>
              <option value='4'>4 year</option>
              <option value='5'>5 year</option>
              <option value='6'>6 year</option>
              <option value='7'>7 year</option>
              <option value='8'>8 year</option>
              <option value='9'>9 year</option>
            </select>
            {renderErrorMessage("experience")}
          </div>
          {/*  */}
          <div>
            <div className='relative flex items-center'>
              <DatePicker
                id='deadline'
                placeholderText='Application Deadline'
                required
                className={`block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.deadline ? "border-red-500" : ""
                }`}
                selected={
                  jobPostData.deadline ? new Date(jobPostData.deadline) : null
                }
                onChange={handleDateChange}
              />
              <label
                for='deadline'
                className='absolute hidden my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
              >
                Founded In{" "}
              </label>
              <img
                src='/Assets/calendar.svg'
                alt='calendar'
                className='absolute right-2'
                onClick={() => document.getElementById("deadline").click()}
              />{" "}
            </div>
            {renderErrorMessage("deadline")}
          </div>
          {/*  */}

          <div>
            <select
              id='jobType'
              required
              className='py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select'
              style={{
                WebkitAppearance: "none",
                MozAppearance: "none",
                appearance: "none",
                backgroundImage: "none",
                backgroundImage: "url(/Assets/down-arrow.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "95% center",
                paddingRight: "20px",
                ...(errors.jobType ? { borderColor: "red" } : {}),
              }}
              value={jobPostData.jobType}
              onChange={handleChange}
            >
              <option value=''>Job Type</option>
              <option value='full-time'>Full Time</option>
              <option value='part-time'>Part Time</option>
              <option value='contract'>Contract</option>
              <option value='freelance'>Freelance</option>
              <option value='temporary'>Temporary</option>
              <option value='internship'>Internship</option>
            </select>
            {renderErrorMessage("jobType")}
          </div>

          {/*  salary starts here  */}
          <div className='relative sm:col-span-2'>
            <div
              className='absolute top-[-8px] left-0 ml-2 mt-px  bg-white px-1 text-[#1E0F3B] text-xs font-bold'
              for='jobTitle'
            >
              Salary
            </div>
            <div className='py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full grid grid-cols-1 md:grid-cols-2'>
              <div className='my-3 md:my-0'>
                <ul className='justify-center md:justify-normal flex gap-3 sm:gap-8 md:gap-3 items-center'>
                  <li>
                    <div className='flex'>
                      <input
                        type='checkbox'
                        id='Hourly'
                        checked={selectedButton === "Hourly"}
                        onChange={handleSalaryButton}
                        className='peer hidden'
                      />
                      <label
                        for='Hourly'
                        className='select-none cursor-pointer rounded-lg bg-gray-200 py-5 text-md sm:text-lg px-3 sm:px-6 text-gray-700 transition-colors duration-200 ease-in-out peer-checked:bg-[#5E9AF8] peer-checked:text-white peer-checked:border-0 '
                      >
                        Hourly
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className='flex'>
                      <input
                        type='checkbox'
                        id='Monthly'
                        className='peer hidden'
                        checked={selectedButton === "Monthly"}
                        onChange={handleSalaryButton}
                      />
                      <label
                        for='Monthly'
                        className='select-none cursor-pointer rounded-lg bg-gray-200 py-5 text-md sm:text-lg px-3 sm:px-5 text-gray-700 transition-colors duration-200 ease-in-out peer-checked:bg-[#5E9AF8] peer-checked:text-white peer-checked:border-0'
                      >
                        Monthly
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className='flex'>
                      <input
                        type='checkbox'
                        id='Yearly'
                        className='peer hidden'
                        checked={selectedButton === "Yearly"}
                        onChange={handleSalaryButton}
                      />
                      <label
                        for='Yearly'
                        className='select-none cursor-pointer rounded-lg bg-gray-200 py-5 text-md sm:text-lg px-4 sm:px-7 text-gray-700 transition-colors duration-200 ease-in-out peer-checked:bg-[#5E9AF8] peer-checked:text-white peer-checked:border-0 '
                      >
                        Yearly
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              {/* min max */}
              <div className='flex gap-3 justify-evenly md:justify-normal'>
                {/* min */}
                <div className='relative'>
                  <input
                    type='text'
                    id='minSalary'
                    placeholder=' '
                    style={errors.minSalary ? { borderColor: "red" } : {}}
                    required
                    className={`block py-5 px-4 w-full text-sm text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                `}
                    value={jobPostData.minSalary}
                    onChange={handleChange}
                  />

                  <label
                    for='minSalary'
                    className='absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
                  >
                    Min
                  </label>
                  {renderErrorMessage("minSalary")}
                </div>
                {/* max */}
                <div className='relative'>
                  <input
                    type='text'
                    id='maxSalary'
                    placeholder=' '
                    required
                    style={errors.maxSalary ? { borderColor: "red" } : {}}
                    className={`block py-5 px-4 w-full text-sm text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                        `}
                    value={jobPostData.maxSalary}
                    onChange={handleChange}
                  />

                  <label
                    for='maxSalary'
                    className='absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
                  >
                    Max
                  </label>
                  {renderErrorMessage("maxSalary")}
                </div>
              </div>
              {/* min max ends here */}
            </div>
          </div>
          {/* salary ends here */}
          {/* generate respone button */}
          <div>
            {" "}
            <button
              onClick={handleGenerateResponse}
              className='px-11 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3'
            >
              Generate Job Description From AI
            </button>
          </div>

          {/* jd */}

          <div className='sm:col-span-2 relative'>
            <textarea
              type='text'
              id='description'
              placeholder=' '
              required
              style={{
                minHeight: "180px", // Increase the height here
                ...(errors.description ? { borderColor: "red" } : {}),
              }}
              // style={{errors.description ? { borderColor: "red" } : {},minHeight: '150px'}}
              className='block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              value={jobPostData.description}
              onChange={handleChangeDesc}
              defaultValue={response && defaultDescriptionValue}
              // defaultValue={response && defaultDescriptionValue}
              disabled={loading}
            />
            {loading && (
              <div className='flex justify-center items-center absolute bottom-[35%] left-[50%]'>
                <CircularProgress sx={{ color: "#EF4444" }} />
              </div>
            )}

            <label
              for='description'
              className='absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
            >
              Job Description
            </label>
            {renderErrorMessage("description")}
          </div>
          {/* jd ends here */}

          {/* email */}
          <div className='relative'>
            <input
              type='text'
              id='email'
              placeholder=' '
              required
              style={errors.email ? { borderColor: "red" } : {}}
              className={`block py-5 px-4 w-full text-sm text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
              ${isFieldChanged && errors.email ? "border-red-500" : ""} `}
              value={jobPostData.email}
              onChange={handleChange}
            />

            <label
              htmlFor='email'
              className='absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
            >
              Email
            </label>

            {renderErrorMessage("email")}
          </div>
          {/* phone number */}
          <div className='relative'>
            <input
              type='number'
              id='phoneNumber'
              placeholder=' '
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
              for='phoneNumber'
              className='absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
            >
              Phone Number
            </label>
            {renderErrorMessage("phoneNumber")}
          </div>

          {/* industry type */}
          <div>
            <select
              id='industryType'
              required
              className='py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select '
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
              value={jobPostData.industryType}
              onChange={handleChange}
            >
              <option value=''>All Industry Type</option>
              <option value='Information Technology (IT)'>
                Information Technology (IT)
              </option>
              <option value='Healthcare'>Healthcare</option>
              <option value='Finance and Banking'>Finance and Banking</option>
              <option value='Education'>Education</option>
              <option value='Engineering'>Engineering</option>
              <option value='Sales and Marketing'>Sales and Marketing</option>
              <option value='Hospitality and Tourism'>
                Hospitality and Tourism
              </option>
              <option value='Retail'>Retail</option>
              <option value='Manufacturing'>Manufacturing</option>
              <option value='Media and Entertainment'>
                Media and Entertainment
              </option>
              <option value='Telecommunications'>Telecommunications</option>
              <option value='Construction'>Construction</option>
              <option value='Automotive'>Automotive</option>
              <option value='Energy and Utilities'>Energy and Utilities</option>
              <option value='Government and Public Administration'>
                Government and Public Administration
              </option>
              <option value='Non-profit and Charity'>
                Non-profit and Charity
              </option>
              <option value='Consulting'>Consulting</option>
              <option value='Legal'>Legal</option>
              <option value='Human Resources'>Human Resources</option>
              <option value='Fashion and Apparel'>Fashion and Apparel</option>
            </select>
            {renderErrorMessage("industryType")}
          </div>
          {/* Industry Type */}
          {/* skills */}
          <div>
            <div className='relative flex items-center'>
              <input
                type='text'
                id='skills'
                placeholder=' '
                required
                style={errors.skills ? { borderColor: "red" } : {}}
                // className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                className='block py-5 px-4 w-full text-sm text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                value={jobPostData.skills}
                onChange={handleChange}
              />
              <label
                for='skills'
                className='absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
              >
                Skills
              </label>
              <button
                className='absolute right-2 px-6 sm:px-8 py-3 bg-red-500 text-white rounded-[10px]'
                // onClick={handlePaste}
              >
                Add
              </button>
              <div></div>
            </div>
            <div className='py-4 grid sm:grid-cols-2 gap-7'>
              {/* <div
                className='bg-[#F9F6EE] p-6 bordr rounded-xl text-[#1E0F3B] font-bold mt-4'
                style={{ position: "relative" }}
              >
                <div>
                  <p className=''>test</p>
                </div>
                <img
                  src='/Assets/cross.svg'
                  alt='cancel'
                  className=' justify-end'
                  style={{ position: "absolute", top: "11%", right: "2%" }}
                />
              </div>
              <div
                className='bg-[#F9F6EE] p-6 bordr rounded-xl text-[#1E0F3B] font-bold mt-4'
                style={{ position: "relative" }}
              >
                <div>
                  <p className=''>test</p>
                </div>
                <img
                  src='/Assets/cross.svg'
                  alt='cancel'
                  className=' justify-end'
                  style={{ position: "absolute", top: "11%", right: "2%" }}
                />
              </div>   */}
            </div>
          </div>

          {/* skills */}
        </div>

        {/* form section ends here */}
      </div>
    </div>
  );
};

export default NewJobPost;
