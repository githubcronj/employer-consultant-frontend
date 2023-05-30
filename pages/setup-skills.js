import React, { useState } from "react";

const SetupSkills = () => {
  const [skillData, setSkilleData] = useState({
    skillName: "",
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
    const requiredFields = ["skillName"];
    const errors = {};

    requiredFields.forEach((field) => {
      if (skillData[field] === "") {
        errors[field] = "This field is required";
      }
    });
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  function skillHandleChange(e) {
    const { id, value } = e.target;
    setSkilleData((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  }
  const addData = () => {
    if (isFormValid()) {
      const initialFormValues = {
        skillName: "",
      };
      setSkilleData(initialFormValues);
    } else {
      return;
    }
  };

  return (
    <div className=" bg-white ">
      {/* first section */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 gap-4 mb-8">
          <div className="relative">
            <input
              type="text"
              id="skillName"
              placeholder="Skill name"
              required
              className="py-5 pl-4 pr-32 border rounded-[10px] border-[#D8D8DD] w-full"
              value={skillData.skillName}
              onChange={skillHandleChange}
            />
            <button
              type="submit"
              onClick={addData}
              className="px-8 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase absolute top-0 right-0 mt-2 mr-1 sm:mr-3 sm:mt-2"
            >
              Add
            </button>
          </div>
          {renderErrorMessage("skillName")}
        </div>
        <div className="flex justify-end"></div>
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

export default SetupSkills;
