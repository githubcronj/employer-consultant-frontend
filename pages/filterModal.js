import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GET_JOB_REQUEST } from "store/type/getjobType";
import { useDispatch } from "react-redux";
import withEmployerAuth from "Components/ProtectedRoute/withEmployerAuth";

const FilterModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [deadline, setDeadline] = useState(null);
  const dispatch = useDispatch();
  const [jobTitle, setJobTitle] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [maxExp, setMaxExp] = useState("");
  const [minExp, setMinExp] = useState("");
  const [jobType, setJobType] = useState("");

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };

  const handleDateChange = (date) => {
    const year = date.getFullYear();
    console.log(year);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    // Format the date as "yyyy-mm-dd"
    const formattedDate = `${year}-${month}-${day}`;
    setDeadline(formattedDate);
  };
  console.log(deadline);

  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const finaltoken = getToken();

  const handleFilter = () => {
    // let filterParams = {
    //   jobTitle,
    //   minSalary,
    //   maxSalary,
    //   jobType,
    //   minExp,
    //   maxExp,
    //   minSalary,
    //   maxSalary,
    // };
    // filterParams = Object.entries(filterParams).reduce((acc, [key, value]) => {
    //   if (value !== undefined) {
    //     acc[key] = value;
    //   }
    //   return acc;
    // }, {});

    const filterParams = {
      ...(jobTitle && { jobTitle }),
      ...(minSalary && { minSalary }),
      ...(maxSalary && { maxSalary }),
      ...(jobType && { jobType }),
      ...(minExp && { minExp }),
      ...(maxExp && { maxExp }),
      ...(deadline && { deadline }),
    };
    dispatch({
      type: GET_JOB_REQUEST,
      payload: filterParams,
      accessToken: finaltoken,
    });
    setShowModal(false);
  };

  return (
    <>
      <button
        className="m-3 ml-0 sm:ml-3"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <img src="/Assets/filter.svg" alt="filter" />
      </button>
      {showModal ? (
        <>
          <div className="flex bg-black bg-opacity-50 justify-end overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="bg-white sm:w-[370px]">
              <div className="flex items-center gap-5 my-5 mx-3">
                <Image
                  src="/Assets/backbtn.svg"
                  alt="back button"
                  width={40}
                  height={40}
                  className="cursor-pointer"
                  onClick={() => setShowModal(false)}
                />
                <p className="text-lg sm:text-2xl font-bold text-[#1E0F3B]">
                  Advance filter
                </p>
              </div>

              <div className="px-5">
                <div>
                  <label className=" text-[#1E0F3B] font-bold" for="jobTitle">
                    Job Title
                  </label>
                  <select
                    id="jobTitle"
                    required
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="mt-3 py-4 px-4 border bg-[#F9F6EE] rounded-[10px] border-[#D8D8DD] w-full custom-select"
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      appearance: "none",
                      backgroundImage: "none",
                      backgroundImage: "url(/Assets/down-arrow.svg)",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "95% center",
                      paddingRight: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <option value="">All Job Title</option>
                    <option value="UX Designer">UX Designer</option>
                    <option value="React Developer">React Developer</option>
                    <option value="Dev Ops Engineer">Dev Ops Engineer</option>
                    <option value="Python Developer">Python Developer</option>
                  </select>
                </div>
                {/*  */}
                <div className="my-4">
                  <label className=" text-[#1E0F3B] font-bold" for="salary">
                    Salary
                  </label>

                  <div className="flex gap-2 mt-3">
                    {/* min */}
                    <div className="relative">
                      <input
                        type="text"
                        id="minSalary"
                        onChange={(e) => setMinSalary(e.target.value)}
                        placeholder=" "
                        required
                        className={`block py-4 px-4 w-full bg-[#F9F6EE] text-gray-900  border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer
                `}
                      />

                      <label
                        for="min"
                        className="absolute my-1 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        Min
                      </label>
                    </div>
                    {/* max */}
                    <div className="relative">
                      <input
                        type="text"
                        id="maxSalary"
                        onChange={(e) => setMaxSalary(e.target.value)}
                        placeholder=" "
                        required
                        className={`block py-4 px-4 w-full bg-[#F9F6EE]  text-gray-900  border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer
                        `}
                      />

                      <label
                        for="maxSalary"
                        className="absolute my-1 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        Max
                      </label>
                    </div>
                  </div>
                </div>

                {/*  */}

                <div>
                  <label className=" text-[#1E0F3B] font-bold" for="jobTitle">
                    Job Type
                  </label>
                  <select
                    id="jobType"
                    onChange={(e) => setJobType(e.target.value)}
                    required
                    className="mt-3 py-4 px-4 border bg-[#F9F6EE] rounded-[10px] border-[#D8D8DD] w-full custom-select"
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      appearance: "none",
                      backgroundImage: "none",
                      backgroundImage: "url(/Assets/down-arrow.svg)",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "95% center",
                      paddingRight: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <option value="">All Job Type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="freelance">Freelance</option>
                    <option value="contract">Contract</option>
                  </select>
                </div>

                {/*  */}
                <div className="my-4">
                  <label className=" text-[#1E0F3B] font-bold" for="experience">
                    Experience
                  </label>

                  <div className="flex gap-2 mt-3">
                    {/* min */}
                    <div className="relative">
                      <input
                        type="text"
                        id="minExp"
                        onChange={(e) => setMinExp(e.target.value)}
                        placeholder=" "
                        required
                        className={`block py-4 px-4 w-full bg-[#F9F6EE] text-gray-900  border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer
                `}
                      />

                      <label
                        for="minExp"
                        className="absolute my-1 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        Min
                      </label>
                    </div>
                    {/* max */}
                    <div className="relative">
                      <input
                        type="text"
                        id="maxExp"
                        onChange={(e) => setMaxExp(e.target.value)}
                        placeholder=" "
                        required
                        className={`block py-4 px-4 w-full bg-[#F9F6EE]  text-gray-900  border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer
                        `}
                      />

                      <label
                        for="maxExp"
                        className="absolute my-1 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        Max
                      </label>
                    </div>
                  </div>
                </div>

                {/*  */}
                <div className="my-4">
                  <label className=" text-[#1E0F3B] font-bold" for="experience">
                    Application Deadline
                  </label>

                  <div className="relative flex items-center mt-3">
                    <DatePicker
                      id="deadline"
                      placeholderText="DD/MM/YY"
                      selected={deadline ? new Date(deadline) : null}
                      onChange={handleDateChange}
                      required
                      className={`block py-5 px-4 w-full text-gray-900  border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                    />
                    <label
                      for="deadline"
                      className="absolute hidden my-1 text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                    >
                      Founded In{" "}
                    </label>
                    <img
                      src="/Assets/blue-date.svg"
                      alt="calendar"
                      className="absolute right-2"
                    />{" "}
                  </div>
                </div>
                {/*  */}
                <button
                  className="px-8 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3"
                  onClick={handleFilter}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default withEmployerAuth(FilterModal);
