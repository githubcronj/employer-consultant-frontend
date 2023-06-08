import { Button } from "@mui/material";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SetupCertificate = ({
  certificationDetails,
  tempCertificate,
  handleCertificateAdd,
  infodata,
  handleCertificateremovedata,
}) => {
  function CertificateHandleChange(e) {
    tempCertificate(e);
  }
  const addData = (section) => {
    handleCertificateAdd(section);
  };
  const removeData = (indexdata) => {
    handleCertificateremovedata(indexdata);
  };
  const handleDateChange = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    // Format the date as "yyyy-mm-dd"
    const formattedDate = `${year}-${month}-${day}`;

    CertificateHandleChange({
      target: {
        name: "tempCertificate.issueDate",
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

    CertificateHandleChange({
      target: {
        name: "tempCertificate.expirationDate",
        value: formattedDate || "",
      },
    });
  };
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Handle the selected file here
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
              name="tempCertificate.courseName"
              value={certificationDetails?.courseName || ""}
              onChange={CertificateHandleChange}
            />
          </div>
          <div>
            <input
              type="text"
              id="issuingOrganization"
              placeholder="Issuing organization"
              className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
              name="tempCertificate.issuingOrganization"
              value={certificationDetails?.issuingOrganization || ""}
              onChange={CertificateHandleChange}
            />
          </div>
          <div>
            <div className="relative flex items-center">
              <DatePicker
                id="issueDate"
                placeholderText="Issue date"
                className="block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                name={tempCertificate.issueDate}
                selected={
                  certificationDetails?.issueDate
                    ? new Date(certificationDetails?.issueDate)
                    : null
                }
                onChange={handleDateChange}
              />
              <img
                src="/Assets/calendar.svg"
                alt="calendar"
                className="absolute right-2"
                onClick={() => document.getElementById("issueDate").click()}
              />
            </div>
          </div>

          <div>
            <div className="relative flex items-center">
              <DatePicker
                id="expirationDate"
                placeholderText="Expiration date"
                className="block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                name={tempCertificate.expirationDate}
                selected={
                  certificationDetails?.expirationDate
                    ? new Date(certificationDetails?.expirationDate)
                    : null
                }
                onChange={handleDateChangeEnd}
              />
              <img
                src="/Assets/calendar.svg"
                alt="calendar"
                className="absolute right-2"
                onClick={() =>
                  document.getElementById("expirationDate").click()
                }
              />
            </div>
          </div>

          <div className="sm:col-span-2 ">
            <input
              type="text"
              id="credentialUrl"
              placeholder="Credential URL"
              className="block py-5 px-4 w-full text-gray-900 dark:bg-gray-700 border rounded-[10px] border-[#D8D8DD] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              name="tempCertificate.credentialUrl"
              value={certificationDetails?.credentialUrl || ""}
              onChange={CertificateHandleChange}
            />
          </div>
          <div className="sm:col-span-2 ">
            <div>
              <input
                id="image"
                type="file"
                name="personalDetails.image"
                accept=".jpg,.jpeg,.png,.svg"
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
              <label htmlFor="image">
                <Button
                  component="span"
                  variant="contained"
                  style={{background:"#F0142F",boxShadow:"none"}}
                  className="px-8 py-3 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase"
                >
                  Add Certificate
                </Button>
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => addData("certificationDetails")}
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
          {
            /* const date = item.issueDate;
          const issueDate = date?.toLocaleString("en-US", {
            month: "short",
            year: "numeric",
          }); */
          }
          return (
            <div
              key={index}
              className="bg-[#F9F6EE] p-6 bordr rounded-xl text-[#1E0F3B] font-bold"
              style={{ position: "relative" }}
            >
              <div>
                <p className="">{item.courseName}</p>
                <p className="py-1">{item.issuingOrganization}</p>
                <p className="text-[#9C94A2]">{item.issueDate}</p>
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

export default SetupCertificate;
