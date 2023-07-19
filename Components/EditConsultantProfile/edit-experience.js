import { Autocomplete, TextField } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import { toast } from "react-toastify";

const EditExperience = ({
  experienceDetails,
  tempExp,
  handleExpAdd,
  infodata,
  handleremovedata,
  fresherChecked,
  setFresherChecked,
  presentDateCheck,
  setpresentDateCheck,
  handleautodata,
  setempautodata,
  expautodata,
}) => {
  const [errors, setErrors] = useState({});
  const [isFocused, setIsFocused] = useState(false);

  const handleExperienceDetailsChange = (e) => {
    tempExp(e);
  };

  const checkboxStyle = {
    accentColor: "#F9342E",
    width: "20px",
    height: "20px",
  };
  const addData1 = (section) => {
    if (isFocused) {
      handleExpAdd(section);
      setIsFocused(false);
    }
  };
  const experiChecked = (event) => {
    const isChecked = event.target.checked;
    setFresherChecked(isChecked);
    console.log(fresherChecked);
    handleExperienceDetailsChange({
      target: {
        name: "tempExp.fresher",
        value: isChecked ? "true" : "false",
      },
    });
  };
  const presentDateChecked = (event) => {
    setpresentDateCheck(event.target.checked);
  };

  const addData = (section) => {
    const isValid = validateForm();
    if (isValid) {
      handleExpAdd(section);
      setempautodata([]);
      toast.success("Experience added!!");
    }
  };
  const removeData = (indexdata) => {
    handleremovedata(indexdata);
  };
  const techOption = [
    { title: "Operating Systems" },
    { title: "Programming Languages" },
    { title: "Web Development" },
    { title: "Databases" },
    { title: "Cloud Computing Platforms" },
    { title: "Version Control" },
  ];

  const handleDateChange = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    // Format the date as "yyyy-mm-dd"
    const formattedDate = `${year}-${month}-${day}`;

    handleExperienceDetailsChange({
      target: {
        name: "tempExp.joinedDate",
        value: formattedDate || "",
      },
    });
  };

  const handleDateChange2 = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    // Format the date as "yyyy-mm-dd"
    const formattedDate = `${year}-${month}-${day}`;

    handleExperienceDetailsChange({
      target: {
        name: "tempExp.endDate",
        value: formattedDate || "",
      },
    });
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!experienceDetails.companyName) {
      newErrors.companyName = "Company Name is required";
      isValid = false;
    }

    if (!experienceDetails.jobPosition) {
      newErrors.jobPosition = "Field is required";
      isValid = false;
    }

    if (!experienceDetails.employmentType) {
      newErrors.employmentType = "Field is required";
      isValid = false;
    }

    if (!experienceDetails.joinedDate) {
      newErrors.joinedDate = "Field is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handledata = (e, value) => {
    handleautodata(value);
  };
  return (
    <div className=" bg-white">
      {/* first section */}

      <div className="flex justify-end  flex-col sm:flex-row">
        <div className="flex items-center mb-4">
          <div className="flex  items-center mb-4">
            <input
              type="checkbox"
              id="default-checkbox"
              name="tempExp.fresher"
              value={experienceDetails?.fresher || ""}
              style={checkboxStyle}
              onChange={experiChecked}
              onFocus={() => setIsFocused(true)}
              onBlur={() => addData1("experienceDetails")}
            />

            <label
              for="default-checkbox"
              className="ml-2 text-[#1E0F3B] font-bold dark:text-gray-300"
            >
              Fresher
            </label>
          </div>
        </div>
      </div>
      {!fresherChecked ? (
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <input
                  type="text"
                  id="companyName"
                  placeholder="Company Name"
                  required
                  className={`py-5 px-4 border rounded-[10px] ${
                    errors.companyName ? "border-red-500" : "border-[#D8D8DD]"
                  } w-full`}
                  name="tempExp.companyName"
                  value={experienceDetails?.companyName || ""}
                  onChange={handleExperienceDetailsChange}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs">{errors.companyName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  id="jobPosition"
                  placeholder="Job Position"
                  required
                  className={`py-5 px-4 border rounded-[10px] ${
                    errors.jobPosition ? "border-red-500" : "border-[#D8D8DD]"
                  } w-full`}
                  name="tempExp.jobPosition"
                  value={experienceDetails?.jobPosition || ""}
                  onChange={handleExperienceDetailsChange}
                />
                {errors.jobPosition && (
                  <p className="text-red-500 text-xs">{errors.jobPosition}</p>
                )}
              </div>
              <div>
                <select
                  id="employmentType"
                  required
                  className={`py-5 px-4 border rounded-[10px]  w-full custom-select ${
                    errors.employmentType
                      ? "border-red-500"
                      : "border-[#D8D8DD]"
                  }`}
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
                  name="tempExp.employmentType"
                  value={experienceDetails?.employmentType || ""}
                  onChange={handleExperienceDetailsChange}
                >
                  <option value="" disabled selected>
                    Employment type
                  </option>
                  <option value="Full Time">Full Time </option>
                  <option value="Part Time">Part Time</option>
                </select>
                {errors.employmentType && (
                  <p className="text-red-500 text-xs">
                    {errors.employmentType}
                  </p>
                )}
              </div>
              <div>
                <div className="relative flex items-center">
                  <DatePicker
                    id="joinedDate"
                    placeholderText="Date of Joined"
                    required
                    className={`block py-5 px-4 w-full text-gray-900  border rounded-[10px]  border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                      errors.joinedDate ? "border-red-500" : "border-[#D8D8DD]"
                    }`}
                    name="tempExp.joinedDate"
                    selected={
                      experienceDetails?.joinedDate
                        ? new Date(experienceDetails?.joinedDate)
                        : null
                    }
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    onChange={handleDateChange}
                  />
                  <img
                    src="/Assets/calendar.svg"
                    alt="calendar"
                    className="absolute right-2"
                    onClick={() =>
                      document.getElementById("joinedDate").click()
                    }
                  />
                </div>
                {errors.joinedDate && (
                  <p className="text-red-500 text-xs">{errors.joinedDate}</p>
                )}
              </div>
              <div className="flex  items-center mb-4">
                <input
                  type="checkbox"
                  id="default-checkbox"
                  name="default-checkbox"
                  value="checked"
                  style={checkboxStyle}
                  onChange={presentDateChecked}
                />

                <label
                  for="default-checkbox"
                  className="ml-2 text-[#1E0F3B] font-bold dark:text-gray-300"
                >
                  Present
                </label>
              </div>
              {!presentDateCheck ? (
                <div>
                  <div className="relative flex items-center">
                    <DatePicker
                      id="endDate"
                      placeholderText="Last working Date"
                      required
                      className={`block py-5 px-4 w-full text-gray-900  border rounded-[10px]  border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                        errors.endDate ? "border-red-500" : "border-[#D8D8DD]"
                      }`}
                      name="tempExp.endDate"
                      selected={
                        experienceDetails?.endDate
                          ? new Date(experienceDetails?.endDate)
                          : null
                      }
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      onChange={handleDateChange2}
                    />
                    <img
                      src="/Assets/calendar.svg"
                      alt="calendar"
                      className="absolute right-2"
                      onClick={() => document.getElementById("endDate").click()}
                    />
                  </div>
                  {errors.endDate && (
                    <p className="text-red-500 text-xs">{errors.endDate}</p>
                  )}
                </div>
              ) : null}
              <div className="sm:col-span-2 ">
                <textarea
                  type="text"
                  id="description"
                  placeholder="Description"
                  className={`h-[140px] block py-5 px-4 w-full text-gray-900  border rounded-[10px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                    errors.description ? "border-red-500" : "border-[#D8D8DD]"
                  }`}
                  name="tempExp.description"
                  value={experienceDetails?.description || ""}
                  onChange={handleExperienceDetailsChange}
                />
                {errors.description && (
                  <p className="text-red-500 text-xs">{errors.description}</p>
                )}
              </div>
              <div>
                <Autocomplete
                  multiple
                  id="technologyEnvironment"
                  options={techOption}
                  name="tempExp.technologyEnvironment"
                  onChange={handledata}
                  value={expautodata}
                  getOptionLabel={(option) => option.title}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Technology Environmental"
                      placeholder="Technology Environmental"
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => addData("experienceDetails")}
                type="submit"
                className="px-8 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase"
              >
                Add
              </button>
            </div>
          </form>

          {/* block display */}
          <div className="py-4 grid sm:grid-cols-2 gap-7">
            {infodata?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#F9F6EE] p-6 bordr rounded-xl text-[#1E0F3B]"
                  style={{ position: "relative" }}
                >
                  <div>
                    <p>
                      <span className=" font-bold">{item?.companyName}</span>
                      <span className=" opacity-50	">
                        {" "}
                        {item?.employmentType}
                      </span>
                    </p>
                    <p>{item.joinedDate}</p>
                    <p>{item?.techEnviro}</p>
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
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EditExperience;
