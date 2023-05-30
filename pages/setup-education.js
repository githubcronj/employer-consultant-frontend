import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsInfo, removeData } from "store/action/setupDetails";

const SetupEducation = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.setupReducer.data);
  const [educationdata, SetupEducationData] = useState({
    eduLevel: "",
    institutionName: "",
    degree: "",
    passingyear: "",
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
      "eduLevel",
      "institutionName",
      "degree",
      "passingyear",
    ];
    const errors = {};

    requiredFields.forEach((field) => {
      if (educationdata[field] === "") {
        errors[field] = "This field is required";
      }
    });
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  function eduHandleChage(e) {
    const { id, value } = e.target;
    SetupEducationData((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  }

  const addData = () => {
    if (isFormValid()) {
      let info = {
        eduLevel: educationdata.eduLevel,
        institutionName: educationdata.institutionName,
        degree: educationdata.degree,
        passingyear: educationdata.passingyear,
      };
      dispatch(detailsInfo([...selector, info]));
      SetupEducationData({
        eduLevel: "",
        institutionName: "",
        degree: "",
        passingyear: "",
      });
    }
  };
  const handleRemoveData = (index) => {
    dispatch(removeData(index));
  };
  return (
    <div className=" bg-white ">
      <div className="flex flex-col lg:col-span-3 py-6 px-6">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div>
              <select
                id="eduLevel"
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
                value={educationdata.eduLevel}
                onChange={eduHandleChage}
              >
                <option value="">Highest Education Level</option>
                <option value="BCA">BCA</option>
                <option value="BE">BE</option>
                <option value="B.Tech">B.Tech</option>
              </select>
              {renderErrorMessage("eduLevel")}
            </div>
            <div>
              <input
                type="text"
                id="institutionName"
                placeholder="Institution Name"
                required
                className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                value={educationdata.institutionName}
                onChange={eduHandleChage}
              />{" "}
              {renderErrorMessage("institutionName")}
            </div>
            <div>
              <select
                id="degree"
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
                value={educationdata.degree}
                onChange={eduHandleChage}
              >
                <option value="">Degree/Diploma</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Associate degree">Associate degree</option>
                <option value="Bachelor degree">Bachelor degree</option>
                <option value="Master degree">Master degree</option>
              </select>
              {renderErrorMessage("degree")}
            </div>
            <div>
              <input
                type="text"
                id="passingyear"
                placeholder="Year of Passing"
                required
                className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                value={educationdata.passingyear}
                onChange={eduHandleChage}
              />
              {renderErrorMessage("passingyear")}
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
          {selector.map((item, index) => {
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
                  onClick={() => handleRemoveData(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SetupEducation;
