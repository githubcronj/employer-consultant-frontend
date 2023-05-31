import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SetupCertificate = () => {
  const [certificateData, setCertificateData] = useState({
    courseName: "",
    issueOgr: "",
    issuedate: "",
    expriDate: "",
    credentialUrl: "",
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
      "courseName",
      "issueOgr",
      "issuedate",
      "expriDate",
      "credentialUrl",
    ];
    const errors = {};

    requiredFields.forEach((field) => {
      if (certificateData[field] === "") {
        errors[field] = "This field is required";
      }
    });
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  function CertificateHandleChange(e) {
    const { id, value } = e.target;
    setCertificateData((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  }
  const addData = () => {
    if (isFormValid()) {
      const initialFormValues = {
        courseName: "",
        issueOgr: "",
        issuedate: "",
        expriDate: "",
        credentialUrl: "",
      };
      setCertificateData(initialFormValues);
    } else {
      return;
    }
  };

  return (
    <div className=" bg-white">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div>
            <input
              type="text"
              id="courseName"
              placeholder="Course Name"
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
              value={certificateData.courseName}
              onChange={CertificateHandleChange}
            />
            {renderErrorMessage("courseName")}
          </div>
          <div>
            <input
              type="text"
              id="issueOgr"
              placeholder="Issuing organization"
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
              value={certificateData.issueOgr}
              onChange={CertificateHandleChange}
            />
            {renderErrorMessage("issueOgr")}
          </div>
          <div>
            <div className="relative flex items-center">
              <DatePicker
                id="issuedate"
                placeholderText="Issue date"
                className="block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                selected={certificateData.issuedate}
                onChange={(date) =>
                  CertificateHandleChange({
                    target: { id: "issuedate", value: date },
                  })
                }
              />
              <img
                src="/Assets/calendar.svg"
                alt="calendar"
                className="absolute right-2"
                onClick={() => document.getElementById("issuedate").click()}
              />
            </div>
            {renderErrorMessage("issuedate")}
          </div>

          <div>
            <div className="relative flex items-center">
              <DatePicker
                id="expriDate"
                placeholderText="Expiration date"
                className="block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                selected={certificateData.expriDate}
                onChange={(date) =>
                  CertificateHandleChange({
                    target: { id: "expriDate", value: date },
                  })
                }
              />
              <img
                src="/Assets/calendar.svg"
                alt="calendar"
                className="absolute right-2"
                onClick={() => document.getElementById("expriDate").click()}
              />
            </div>
            {renderErrorMessage("expriDate")}
          </div>

          <div className="sm:col-span-2 ">
            <input
              type="text"
              id="credentialUrl"
              placeholder="Credential URL"
              className="block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={certificateData.credentialUrl}
              onChange={CertificateHandleChange}
            />{" "}
            {renderErrorMessage("credentialUrl")}
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

export default SetupCertificate;
