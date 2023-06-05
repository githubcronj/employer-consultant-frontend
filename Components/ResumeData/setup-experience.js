import React from "react";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";

const SetupExperience = ({
  experienceDetails,
  tempExp,
  handleExpAdd,
  infodata,
  handleremovedata,
}) => {
  const router = useRouter();

  const handleExperienceDetailsChange = (e) => {
    tempExp(e);
  };

  const checkboxStyle = {
    accentColor: "#F9342E",
    width: "20px",
    height: "20px",
  };

  const experiChecked = (e) => {
    if (e.target.checked == true) {
      router.push("/setup-details");
    }
  };

  const addData = (section) => {
    handleExpAdd(section);
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

  return (
    <div className=" bg-white">
      {/* first section */}

      <div className="flex justify-end  flex-col sm:flex-row">
        <div className="flex items-center mb-4">
          <div className="flex  items-center mb-4">
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
              className="ml-2 text-[#1E0F3B] font-bold dark:text-gray-300"
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
              name="tempExp.companyName"
              value={experienceDetails?.companyName || ""}
              onChange={handleExperienceDetailsChange}
            />
          </div>
          <div>
            <input
              type="text"
              id="jobposition"
              placeholder="Job Position"
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
              name="tempExp.jobposition"
              value={experienceDetails?.jobposition || ""}
              onChange={handleExperienceDetailsChange}
            />
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
              name="tempExp.emptype"
              value={experienceDetails?.emptype || ""}
              onChange={handleExperienceDetailsChange}
            >
              <option value="" disabled selected>
                Employment type
              </option>
              <option value="Full Time">Full Time </option>
              <option value="Part Time">Part Time</option>
            </select>
          </div>
          <div>
            <div className="relative flex items-center">
              <DatePicker
                id="joindate"
                placeholderText="Date of Joined"
                required
                className="block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                name="tempExp.joindate"
                selected={experienceDetails?.joindate}
                onChange={(date) =>
                  handleExperienceDetailsChange({
                    target: {
                      name: "tempExp.joindate",
                      value: date || "",
                    },
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
          </div>
          <div>
            {/* <input
              type="text"
              id="techEnviro"
              placeholder="Technology Environmental "
              required
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
              name="tempExp.techEnviro"
              value={experienceDetails?.techEnviro || ""}
              onChange={handleExperienceDetailsChange}
            /> */}
            <Autocomplete
              multiple
              options={techOption}
              // name="tempExp.techEnviro"
              // value={experienceDetails?.techEnviro || []}
              // onChange={(e,value)=>{console.log("input",value)}}
              // onChange={(e, value) =>
              //   handleExperienceDetailsChange({
              //     target: {
              //       name: "tempExp.techEnviro",
              //       value: value || [],
              //     },
              //   })
              // }
              getOptionLabel={(option) => option.title}
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
      {/* need to work and render properly as per our item data */}
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
                  <span className=" opacity-50	"> {item?.emptype}</span>
                </p>
                {item.joindate && (
                  <p className="py-1  opacity-90">
                    {item?.emptype +
                      " - " +
                      item.joindate.getDate() +
                      "/" +
                      item.joindate.getMonth() +
                      "/" +
                      item.joindate.getFullYear()}
                  </p>
                )}
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
  );
};

export default SetupExperience;
