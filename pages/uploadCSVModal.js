import Image from "next/image";
import React, { useState } from "react";
import Papa from "papaparse";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { csvSaveRequest } from "../store/action/csvMultipleJobUploadAction";
import withEmployerAuth from "Components/ProtectedRoute/withEmployerAuth";

const UploadCSVModal = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [uploadedFile, setUploadedFile] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef(null);
  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const finaltoken = getToken();
  // console.log(finaltoken)

  // const handleFileUpload = () => {

  //   console.log(uploadedFile,'<-----')
  //   const file = fileInputRef.current.files[0];
  //   if (file) {
  //     const allowedTypes = ["text/csv"];

  //     if (!allowedTypes.includes(file.type)) {
  //       setErrorMessage(
  //         "Invalid file type. Only CSV is allowed."
  //       );
  //       return;
  //     }

  //     setUploadedFile(file);
  //     console.log('file',file)
  //     console.log('fileee',uploadedFile)
  //     setErrorMessage(""); // Reset the error message
  //     // dispatch(csvSaveRequest(file,finaltoken));
  //     Papa.parse(file, {
  //       complete: function (results) {
  //         console.log('Finished:', results.data);
  //         const jsonData = {
  //           jobs: results.data.slice(1).map((row) => ({
  //             jobTitle: row[0],
  //             experience: Number(row[1]),
  //             deadline: row[2],
  //             jobType: row[3],
  //             salary: row[4],
  //             minSalary: Number(row[5]),
  //             maxSalary: Number(row[6]),
  //             description: row[7],
  //             email: row[8],
  //             phoneNumber: row[9]
  //           }))
  //         };

  //         dispatch(csvSaveRequest(jsonData, finaltoken));
  //       },
  //     });
  //   }
  // };
  const handleFileUpload = () => {
    console.log(uploadedFile, "<-----");
    const file = fileInputRef.current.files[0];
    if (file) {
      const allowedTypes = ["text/csv"];

      if (!allowedTypes.includes(file.type)) {
        setErrorMessage("Invalid file type. Only CSV is allowed.");
        return;
      }

      setUploadedFile(file);
      console.log("file", file);
      console.log("fileee", uploadedFile);
      setErrorMessage(""); // Reset the error message
      // dispatch(csvSaveRequest(file,finaltoken));
    }
  };
  const handleExport = () => {
    if (!uploadedFile) {
      setErrorMessage("Please upload a file.");
      return;
    }

    Papa.parse(uploadedFile, {
      complete: function (results) {
        console.log("Finished:", results.data);
        const jsonData = {
          jobs: results.data.slice(1).map((row) => ({
            jobTitle: row[0],
            experience: Number(row[1]),
            deadline: row[2],
            jobType: row[3],
            salary: row[4],
            minSalary: Number(row[5]),
            maxSalary: Number(row[6]),
            description: row[7],
            email: row[8],
            phoneNumber: row[9],
          })),
        };

        dispatch(csvSaveRequest(jsonData, finaltoken));
        setShowModal(false);
      },
    });
  };

  const handleRemoveFile = (event) => {
    setUploadedFile(null);
    setErrorMessage("");

    // Clear the file input value
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation(); // Prevents browser from opening the file
    event.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation(); // Prevents browser from opening the file
    const file = event.dataTransfer.files[0];
    setUploadedFile(file);
    setErrorMessage("");
  };

  // enddd
  return (
    <>
      <button className="m-3" type="button" onClick={() => setShowModal(true)}>
        <img src="/Assets/download.svg" alt="save" />
      </button>
      {showModal ? (
        <>
          <div className="flex bg-black bg-opacity-50 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              <div className="w-auto bg-white py-1 rounded-[15px] sm:w-[500px] lg:w-[690px] text-center">
                <div className="sm:flex justify-between items-center mx-3 my-3 sm:my-0">
                  <div className="flex items-center gap-5 ">
                    <img
                      src="/Assets/cancel.svg"
                      alt="cancel"
                      onClick={() => setShowModal(false)}
                      className="cursor-pointer"
                    />
                    <p className="text-lg sm:text-2xl font-bold text-[#1E0F3B]">
                      Upload as CSV
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={handleExport}
                      className="px-8 py-4 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3"
                    >
                      Export
                    </button>
                  </div>
                </div>

                <label
                  htmlFor="fileInput"
                  className="cursor-pointer"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <div className="bg-[#5E9AF814] mx-4 sm:mx-6 md:mx-20 mt-4 mb-9 py-10 rounded-xl border-dashed border border-1 border-[#5E9AF8]">
                    <div className="flex justify-center">
                      <Image
                        src="/Assets/csvupload.svg"
                        alt="upload csv"
                        width={62}
                        height={80}
                      />
                    </div>
                    <p className="pt-3 px-1 text-lg font-bold">
                      Select a CSV file to upload
                    </p>
                    <p className="text-sm text-[#6C627F] px-2">
                      or drag and drop it here
                    </p>
                    {errorMessage && (
                      <p className="text-red-500 font-semibold mt-2 px-4">
                        {errorMessage}
                      </p>
                    )}

                    <input
                      type="file"
                      id="fileInput"
                      ref={fileInputRef}
                      className="hidden"
                      onChange={handleFileUpload}
                      accept=".pdf, .docx, .doc"
                    />
                    {uploadedFile && (
                      <div className="mt-2">
                        <p>Uploaded file: {uploadedFile.name}</p>
                        <button
                          className="text-red-500 font-semibold"
                          onClick={(event) => {
                            event.preventDefault();
                            handleRemoveFile();
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                </label>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default withEmployerAuth(UploadCSVModal);
