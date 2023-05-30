import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const SetupProject = () => {
  const [projectData, setProjecteData] = useState({
    projectName: "",
    projecturl: "",
    startdate: "",
    enddate: "",
    projecturlbrief: "",
  });
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
      "projectName",
      "projecturl",
      "startdate",
      "enddate",
      "projecturlbrief",
    ];
    const errors = {};

    requiredFields.forEach((field) => {
      if (projectData[field] === "") {
        errors[field] = "This field is required";
      }
    });
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  function projectHandleChange(e) {
    const { id, value } = e.target;
    setProjecteData((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  }
  const addData = () => {
    if (isFormValid()) {
      const initialFormValues = {
        skillName: "",
      };
      setProjecteData(initialFormValues);
    } else {
      return;
    }
  };

  //   console.log("----projectData", projectData);
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
              value={projectData.projectName}
              onChange={projectHandleChange}
            />
            {renderErrorMessage("projectName")}
          </div>
          <div>
            <input
              type="text"
              id="projecturl"
              placeholder="Project URL"
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
              value={projectData.projecturl}
              onChange={projectHandleChange}
            />
            {renderErrorMessage("projecturl")}
          </div>
          <div>
            <div>
              <div className="relative flex items-center">
                <DatePicker
                  id="startdate"
                  placeholderText="Start date"
                  className="block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  selected={projectData.startdate}
                  onChange={(date) =>
                    projectHandleChange({
                      target: { id: "startdate", value: date },
                    })
                  }
                />
                <img
                  src="/Assets/calendar.svg"
                  alt="calendar"
                  className="absolute right-2"
                  onClick={() => document.getElementById("startdate").click()}
                />
              </div>
              {renderErrorMessage("startdate")}
            </div>
          </div>
          <div>
            <div className="relative flex items-center">
              <DatePicker
                id="enddate"
                placeholderText="End Date"
                className="block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                selected={projectData.enddate}
                onChange={(date) =>
                  projectHandleChange({
                    target: { id: "enddate", value: date },
                  })
                }
              />
              <img
                src="/Assets/calendar.svg"
                alt="calendar"
                className="absolute right-2"
                onClick={() => document.getElementById("enddate").click()}
              />
            </div>
            {renderErrorMessage("enddate")}
          </div>

          <div className="sm:col-span-2 ">
            <textarea
              type="text"
              id="projecturlbrief"
              placeholder="Project URL"
              className="h-[140px] block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={projectData.projecturlbrief}
              onChange={projectHandleChange}
            />
            {renderErrorMessage("projecturlbrief")}
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
  );
};

export default SetupProject;
