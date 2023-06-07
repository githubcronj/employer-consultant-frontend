import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobFormData,
  submitJobFormData,
} from "store/action/editJobPostAction";
import { GET_JOB_REQUEST } from "store/type/getjobType";

const EditJobPost = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { state } = router.query;

  // Decode and parse the state object
  // const decodedState = decodeURIComponent(state);
  // const parsedState = JSON.parse(decodedState);
  // console.log('statee',parsedState);
  let payload;
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");
      const tokenset = JSON.parse(storedData);
      payload = tokenset.token.accessToken;
    }
  });
  useEffect(() => {
    dispatch({ type: GET_JOB_REQUEST, payload });
  }, []);
  const response = useSelector(
    (state) => state?.getjobReducer?.CurrentUser?.data
  );
  console.log("responsee", response);

  let finaldata = response?.filter((x, y) => {
    return id == x?._id;
  });
  console.log("fff", finaldata);

  const [errors, setErrors] = useState({});
  const [data, setData] = useState(null);
  const [flexing, setFlexing] = useState(false);
  const [selectedButton, setSelectedButton] = useState("");
  const [isFieldChanged, setIsFieldChanged] = useState(false);
  const [editJobPostData, setEditJobPostData] = useState({
    jobTitle: "",
    experience: "",
    deadline: "",
    jobType: "",
    minSalary: "",
    maxSalary: "",
    description: "",
    email: "",
    phoneNumber: "",
  });

  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      setData(JSON.parse(storedData));
    }
  }, []);
  useEffect(() => {
    if (data && data.token && data.token.accessToken) {
      setEditJobPostData((prevValues) => ({
        ...prevValues,
        accessToken: data.token.accessToken,
      }));
    }
  }, [data]);
  // useEffect(() => {
  //   if (parsedState) {
  //     const {
  //       jobTitle,
  //       experience,
  //       deadline,
  //       jobType,
  //       minSalary,
  //       maxSalary,
  //       description,
  //       email,
  //       phoneNumber
  //     } = parsedState[0];

  //     setEditJobPostData({
  //       jobTitle,
  //       experience,
  //       deadline,
  //       jobType,
  //       minSalary,
  //       maxSalary,
  //       description,
  //       email,
  //       phoneNumber
  //     });
  //   }
  // }, []);
  //   console.log(editJobPostData);

  const renderErrorMessage = (fieldName) => {
    if (errors[fieldName]) {
      return <p className="text-red-500 text-xs">{errors[fieldName]}</p>;
    }
    return null;
  };

  const handleSalaryButton = (e) => {
    setSelectedButton(e.target.id);
  };
  const handleDateChange = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    // Format the date as "yyyy-mm-dd"
    const formattedDate = `${year}-${month}-${day}`;

    setEditJobPostData((prevValues) => ({
      ...prevValues,
      deadline: formattedDate, // Update the companyFoundedDate field in formValues with the formatted date
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEditJobPostData((prevValues) => ({
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
      "deadline",
      "jobType",
      "minSalary",
      "maxSalary",
      "description",
      "email",
      "phoneNumber",
    ];
    const errors = {};

    requiredFields.forEach((field) => {
      if (editJobPostData[field] === "") {
        errors[field] = "This field is required";
      }
    });
    if (
      editJobPostData.email !== "" &&
      !/^[\w+.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(editJobPostData.email)
    ) {
      errors.email = "Invalid email format";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };
  const handleSave = (e) => {
    e.preventDefault();
    if (isFormValid() && data?.token?.accessToken) {
      dispatch(submitJobFormData(editJobPostData, data, parsedState[0]._id));
      const initialJobPostData = {
        jobTitle: "",
        experience: "",
        deadline: "",
        jobType: "",
        minSalary: "",
        maxSalary: "",
        description: "",
        email: "",
        phoneNumber: "",
      };
      setEditJobPostData(initialJobPostData);
      console.log(editJobPostData);
      router.push("/ux-designer-page");
    } else {
      return;
    }
  };
  return (
    <div className="bg-[#2B373C1C] py-4 px-2 sm:px-4">
      <div className="bg-white">
        <div className="md:flex justify-between items-center mx-5 sm:mx-9 py-1">
          <div className="my-3 flex gap-6">
            {/* <Link href={`/viewjobpost/${parsedState[0]._id}`}> */}
            <Image
              src="/Assets/backbtn.svg"
              alt="back button"
              width={35}
              height={35}
              className="cursor-pointer"
            />
            {/* </Link> */}
            <p className="text-lg sm:text-2xl font-bold">Edit Job Post</p>
          </div>
          <div className="sm:flex gap-2 sm:gap-5">
            <div>
              <button
                onClick={handleSave}
                className="px-11 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3"
              >
                Save
              </button>
            </div>
            <div>
              <Link href="/ux-designer-page">
                <button className="px-8 py-3 bg-white border border-red-500 text-red-500 rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3">
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* form section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-3 lg:mx-20 lg:px-10 xl:px-20 py-8 my-3">
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
              value={editJobPostData.jobTitle}
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
                ...(errors.experience ? { borderColor: "red" } : {}),
              }}
              value={editJobPostData.experience}
              onChange={handleChange}
            >
              <option value="">Experience</option>
              <option value="1">1 year</option>
              <option value="2">2 year</option>
              <option value="3">3 year</option>
            </select>
            {renderErrorMessage("experience")}
          </div>
          {/*  */}
          <div>
            <div className="relative flex items-center">
              <DatePicker
                id="deadline"
                placeholderText="Application Deadline"
                required
                className={`block py-5 px-4 w-full text-gray-900  border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.deadline ? "border-red-500" : ""
                }`}
                selected={
                  editJobPostData.deadline
                    ? new Date(editJobPostData.deadline)
                    : null
                }
                onChange={handleDateChange}
              />
              <label
                for="deadline"
                className="absolute hidden my-1 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Founded In{" "}
              </label>
              <img
                src="/Assets/calendar.svg"
                alt="calendar"
                className="absolute right-2"
                onClick={() => document.getElementById("deadline").click()}
              />{" "}
            </div>
            {renderErrorMessage("deadline")}
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
                ...(errors.jobType ? { borderColor: "red" } : {}),
              }}
              value={editJobPostData.jobType}
              onChange={handleChange}
            >
              <option value="">Job Type</option>
              <option value="full-time">Full time</option>
              <option value="part-time">Part time</option>
              <option value="contract">Contract</option>
              <option value="freelance">Freelance</option>
              <option value="temporary">Temporary</option>
              <option value="internship">Internship</option>
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
                        checked={selectedButton === "hourly"}
                        onChange={handleSalaryButton}
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
                      <input
                        type="checkbox"
                        id="monthly"
                        className="peer hidden"
                        checked={selectedButton === "monthly"}
                        onChange={handleSalaryButton}
                      />
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
                      <input
                        type="checkbox"
                        id="yearly"
                        className="peer hidden"
                        checked={selectedButton === "yearly"}
                        onChange={handleSalaryButton}
                      />
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
                    id="minSalary"
                    placeholder=" "
                    style={errors.minSalary ? { borderColor: "red" } : {}}
                    required
                    className={`block py-5 px-4 w-full text-sm text-gray-900  border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer
                `}
                    value={editJobPostData.minSalary}
                    onChange={handleChange}
                  />

                  <label
                    for="minSalary"
                    className="absolute my-1 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Min
                  </label>
                  {renderErrorMessage("minSalary")}
                </div>
                {/* max */}
                <div className="relative">
                  <input
                    type="text"
                    id="maxSalary"
                    placeholder=" "
                    required
                    style={errors.maxSalary ? { borderColor: "red" } : {}}
                    className={`block py-5 px-4 w-full text-sm text-gray-900  border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer
                        `}
                    value={editJobPostData.maxSalary}
                    onChange={handleChange}
                  />

                  <label
                    for="maxSalary"
                    className="absolute my-1 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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

          {/* jd */}
          <div className="sm:col-span-2 relative">
            <textarea
              type="text"
              id="description"
              placeholder=" "
              required
              style={errors.description ? { borderColor: "red" } : {}}
              className="block py-5 px-4 w-full text-gray-900  border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={editJobPostData.description}
              onChange={handleChange}
            />
            <label
              for="description"
              className="absolute my-1 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Job Description
            </label>
            {renderErrorMessage("description")}
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
              className={`block py-5 px-4 w-full text-sm text-gray-900  border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer
              ${isFieldChanged && errors.email ? "border-red-500" : ""} `}
              value={editJobPostData.email}
              onChange={handleChange}
            />

            <label
              htmlFor="email"
              className="absolute my-1 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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
              className={`block py-5 px-4 w-full text-sm text-gray-900  border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer
                `}
              value={editJobPostData.phoneNumber}
              onChange={handleChange}
            />

            <label
              for="phoneNumber"
              className="absolute my-1 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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

export default EditJobPost;
