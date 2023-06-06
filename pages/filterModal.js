import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <button className="m-3" type="button" onClick={() => setShowModal(true)}>
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
                    }}
                  >
                    <option value="">Job Title</option>
                    <option value="UI">UX Designer</option>
                    <option value="React">React Developer</option>
                    <option value="Devops">Dev Ops Engineer</option>
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
                        id="min"
                        placeholder=" "
                        required
                        className={`block py-4 px-4 w-full bg-[#F9F6EE] text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                `}
                      />

                      <label
                        for="min"
                        className="absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        Min
                      </label>
                    </div>
                    {/* max */}
                    <div className="relative">
                      <input
                        type="text"
                        id="max"
                        placeholder=" "
                        required
                        className={`block py-4 px-4 w-full bg-[#F9F6EE]  text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                        `}
                      />

                      <label
                        for="max"
                        className="absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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
                    }}
                  >
                    <option value="">Job Title</option>
                    <option value="full">Full-time</option>
                    <option value="part">Part-time</option>
                    <option value="freelance">Freelance</option>
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
                        id="min"
                        placeholder=" "
                        required
                        className={`block py-4 px-4 w-full bg-[#F9F6EE] text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                `}
                      />

                      <label
                        for="min"
                        className="absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                      >
                        Min
                      </label>
                    </div>
                    {/* max */}
                    <div className="relative">
                      <input
                        type="text"
                        id="max"
                        placeholder=" "
                        required
                        className={`block py-4 px-4 w-full bg-[#F9F6EE]  text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
                        `}
                      />

                      <label
                        for="max"
                        className="absolute my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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
                      id="applicationDeadline"
                      placeholderText="DD/MM/YY"
                      selected={selectedDate}
                      onChange={handleDateChange}
                      required
                      className={
                        "block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      }
                    />
                    <label
                      for="founded"
                      className="absolute hidden my-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
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
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default FilterModal;
