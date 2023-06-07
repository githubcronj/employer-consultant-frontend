import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const SetupProject = ({
  projectDetails,
  tempProject,
  handleProjectAdd,
  infodata,
  handleProjectremovedata,
}) => {
  function projectHandleChange(e) {
    tempProject(e);
  }
  const addData = (section) => {
    handleProjectAdd(section);
  };
  const removeData = (indexdata) => {
    handleProjectremovedata(indexdata);
  };
  const handleDateChange = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
  
    // Format the date as "yyyy-mm-dd"
    const formattedDate = `${year}-${month}-${day}`;
  
    projectHandleChange({
      target: {
        name: "tempProject.startDate",
        value: formattedDate || "",
      },
    });
  
   
  };
  const handleDateChangeEnd = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
  
    // Format the date as "yyyy-mm-dd"
    const formattedDate = `${year}-${month}-${day}`;
  
    projectHandleChange({
      target: {
        name: "tempProject.endDate",
        value: formattedDate || "",
      },
    });
  
  };
 
  return (
    <div className=" bg-white    ">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div>
            <input
              type="text"
              id="projectName"
              placeholder="Project name"
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
              name="tempProject.projectName"
              value={projectDetails?.projectName || ""}
              onChange={projectHandleChange}
            />
          </div>
          <div>
            <input
              type="text"
              id="projectUrl"
              placeholder="Project URL"
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
              name="tempProject.projectUrl"
              value={projectDetails?.projectUrl || ""}
              onChange={projectHandleChange}
            />
          </div>
          <div>
            <div>
              <div className="relative flex items-center">
                <DatePicker
                  id="startDate"
                  placeholderText="Start date"
                  className="block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  name={tempProject.startDate}
                  selected={
                    projectDetails?.startDate
                      ? new Date(projectDetails?.startDate)
                      : null
                  }
                  onChange={handleDateChange}
                />
                <img
                  src="/Assets/calendar.svg"
                  alt="calendar"
                  className="absolute right-2"
                  onClick={() => document.getElementById("startDate").click()}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex items-center">
              <DatePicker
                id="endDate"
                placeholderText="End Date"
                className="block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                name={tempProject.endDate}
                selected={
                  projectDetails?.endDate
                    ? new Date(projectDetails?.endDate)
                    : null
                }
                onChange={handleDateChangeEnd}
              />
              <img
                src="/Assets/calendar.svg"
                alt="calendar"
                className="absolute right-2"
                onClick={() => document.getElementById("endDate").click()}
              />
            </div>
          </div>

          <div className="sm:col-span-2 ">
            <textarea
              type="text"
              id="projectDescription"
              placeholder="Project URL"
              className="h-[140px] block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              name="tempProject.projectDescription"
              value={projectDetails?.projectDescription || ""}
              onChange={projectHandleChange}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => addData("projectDetails")}
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
              className="bg-[#F9F6EE] p-6 bordr rounded-xl text-[#1E0F3B] font-bold h-auto"
              style={{ position: "relative" }}
            >
              <div>
                <p className="">{item.projectName}</p>
                <p className="py-1 px-1 ">{item.projectDescription}</p>
                <p className="text-[#9C94A2]"><span>{item.startDate}</span> - <span>{item.endDate}</span>  </p>
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

export default SetupProject;
