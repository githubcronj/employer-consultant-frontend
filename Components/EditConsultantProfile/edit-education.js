import React, { useState } from "react";

const EditEducation = ({
  educationDetails,
  tempeducation,
  handleEducationAdd,
  infodata,
  handleEducationremovedata,
}) => {
  const [errors, setErrors] = useState({});

  function eduHandleChage(e) {
    tempeducation(e);
  }

  const addData = () => {
    const isValid = validateForm();
    if (isValid) {
      handleEducationAdd();
    }
  };

  const removeData = (indexdata) => {
    handleEducationremovedata(indexdata);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!educationDetails.level) {
      newErrors.level = "Highest Education Level is required";
      isValid = false;
    }

    if (!educationDetails.institutionName) {
      newErrors.institutionName = "Institution Name is required";
      isValid = false;
    }

    if (!educationDetails.degreeName) {
      newErrors.degreeName = "Degree/Diploma is required";
      isValid = false;
    }

    if (!educationDetails.year) {
      newErrors.year = "Year of Passing is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  return (
    <div className=" bg-white ">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div>
            <select
              id="level"
              required
              className={`py-5 px-4 border rounded-[10px] ${
                errors.level ? "border-red-500" : "border-[#D8D8DD]"
              } w-full custom-select`}
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
              name="tempeducation.level"
              value={educationDetails.level || ""}
              onChange={eduHandleChage}
            >
              <option value="">Highest Education Level</option>
              <option value="BCA">BCA</option>
              <option value="BE">BE</option>
              <option value="B.Tech">B.Tech</option>
            </select>{" "}
            {errors.level && (
              <p className="text-red-500 text-xs">{errors.level}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              id="institutionName"
              placeholder="Institution Name"
              required
              className={`py-5 px-4 border rounded-[10px]  w-full ${
                errors.institutionName ? "border-red-500" : "border-[#D8D8DD]"
              } `}
              name="tempeducation.institutionName"
              value={educationDetails.institutionName || ""}
              onChange={eduHandleChage}
            />
            {errors.institutionName && (
              <p className="text-red-500 text-xs">{errors.institutionName}</p>
            )}
          </div>
          <div>
            <select
              id="degreeName"
              required
              className={`py-5 px-4 border rounded-[10px] ${
                errors.degreeName ? "border-red-500" : "border-[#D8D8DD]"
              } w-full custom-select `}
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
              name="tempeducation.degreeName"
              value={educationDetails.degreeName || ""}
              onChange={eduHandleChage}
            >
              <option value="">Degree/Diploma</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Associate degree">Associate degree</option>
              <option value="Bachelor degree">Bachelor degree</option>
              <option value="Master degree">Master degree</option>
            </select>
            {errors.degreeName && (
              <p className="text-red-500 text-xs">{errors.degreeName}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              id="year"
              placeholder="Year of Passing"
              required
              className={`py-5 px-4 border rounded-[10px]  w-full ${
                errors.year ? "border-red-500" : "border-[#D8D8DD]"
              } `}
              name="tempeducation.year"
              value={educationDetails.year || ""}
              onChange={eduHandleChage}
            />
            {errors.year && (
              <p className="text-red-500 text-xs">{errors.year}</p>
            )}
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
      <div className="py-4 grid sm:grid-cols-2 gap-7">
        {infodata?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#F9F6EE] p-6 bordr rounded-xl text-[#1E0F3B] font-bold"
              style={{ position: "relative" }}
            >
              <div>
                <p className="">{item.level + " " + item.degreeName}</p>
                <p className="py-1">{item.institutionName}</p>
                <p className="text-[#9C94A2]">{item.year}</p>
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

export default EditEducation;
