import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import SetupEducation from "./setup-education";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Setupdetails = () => {
  const router = useRouter();
  const [resumeForm, setResumeForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    birth: "",
    location: "",
    role: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [errors, setErrors] = useState({});
  const handleCameraIconClick = () => {
    const fileInput = document.getElementById("imageview");
    fileInput.click();
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    } else {
      setSelectedImage(null);
    }
  };
  function dataHandleChage(e) {
    const { id, value } = e.target;
    setResumeForm((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    if (id === "email") {
      const isValidEmail = /^[\w+.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(
        value
      );
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: isValidEmail ? "" : "Invalid email format",
      }));
    }
  }
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
      "fullName",
      "email",
      "phoneNumber",
      "gender",
      "birth",
      "location",
      "role",
    ];
    const errors = {};

    requiredFields.forEach((field) => {
      if (resumeForm[field] === "") {
        errors[field] = "This field is required";
      }
    });
    if (
      resumeForm.email !== "" &&
      !/^[\w+.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(resumeForm.email)
    ) {
      errors.email = "Invalid email format";
    }
    console.log(errors);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSave = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log(resumeForm);
      const initialFormValues = {
        fullName: "",
        email: "",
        phoneNumber: "",
        gender: "",
        birth: "",
        location: "",
        role: "",
      };
      setResumeForm(initialFormValues);
      setSelectedImage(null);
      router.push("/setup-education");
    } else {
      return;
    }
  };

  return (
    <div className="bg-[#2B373C1C] py-5 px-2 sm:px-10">
      <div className="flex justify-between items-center mx-5 sm:mx-9">
        <div className="flex items-center gap-x-4 ">
          <Image
            src="/Assets/backbtn.svg"
            alt="back button"
            width={46}
            height={46}
            className="cursor-pointer"
          />
          <p className=" text-[26px] text-[#2B373C] sm:text-2xl font-bold">
            Setup details
          </p>
        </div>
        <button
          onClick={handleSave}
          className="px-8 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3"
        >
          <img src="/Assets/check.svg" alt="save" />
          Save
        </button>
      </div>
      <div className=" bg-white   mx-2 sm:mx-6 lg-mx-8 border rounded-xl grid lg:grid-cols-5">
        <div
          className="flex flex-col justify-center lg:col-span-3"
          style={{ borderRight: "2px solid #D8D8DD" }}
        >
          <div
            className="bg-[#2B373C1C] flex justify-center items-center mb-7 mx-auto px-4 mt-6"
            style={{ width: "80px", height: "80px", borderRadius: "24px" }}
            onClick={handleCameraIconClick}
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                style={{ width: "fit-content", height: "auto" }}
                alt="selectedImage"
              />
            ) : (
              <img src="/Assets/camera-icon.svg" alt="cameraIcon" />
            )}{" "}
            <input
              id="imageview"
              type="file"
              name="company_logo"
              accept=".jpg,.jpeg,.png,.svg"
              hidden
              onChange={handleImageChange}
            />
          </div>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 px-4">
              <div className="relative">
                <label
                  className="absolute top-[-8px] left-0 ml-2 mt-px  bg-white px-1 text-[#1E0F3B] text-xs font-bold"
                  for="fullName"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="James Joy"
                  required
                  className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                  value={resumeForm.fullName}
                  onChange={dataHandleChage}
                />
                {renderErrorMessage("fullName")}
              </div>
              <div>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  required
                  className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                  value={resumeForm.email}
                  onChange={dataHandleChage}
                />
                {renderErrorMessage("email")}
              </div>
              <div>
                <input
                  type="number"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  required
                  className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                  value={resumeForm.phoneNumber}
                  onChange={dataHandleChage}
                />
                {renderErrorMessage("phoneNumber")}
              </div>
              <div>
                <select
                  id="gender"
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
                  value={resumeForm.gender}
                  onChange={dataHandleChage}
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {renderErrorMessage("gender")}
              </div>
              <div>
                <input
                  type="number"
                  id="birth"
                  placeholder="Date of Birth"
                  required
                  className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                  value={resumeForm.birth}
                  onChange={dataHandleChage}
                />
                {renderErrorMessage("birth")}
              </div>
              <div>
                <input
                  type="text"
                  id="location"
                  placeholder="Location"
                  required
                  className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                  value={resumeForm.location}
                  onChange={dataHandleChage}
                />
                {renderErrorMessage("location")}
              </div>
              <div>
                <input
                  type="text"
                  id="role"
                  placeholder="Job role"
                  required
                  className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                  value={resumeForm.role}
                  onChange={dataHandleChage}
                />
                {renderErrorMessage("role")}
              </div>
            </div>
          </form>
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<img src="/Assets/plusSign.svg" alt="cameraIcon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="text-[#1E0F3B] font-bold text-lg">Education</p>
              </AccordionSummary>
              <AccordionDetails>
                <SetupEducation/>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<img src="/Assets/plusSign.svg" alt="cameraIcon" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <p className="text-[#1E0F3B] font-bold text-lg">Experience</p>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          {/* <div
            className=" py-5 px-4 flex justify-between"
            
          >
            <p className="text-[#1E0F3B] font-bold text-lg">Education</p>
            <img src="/Assets/plusSign.svg" alt="cameraIcon" />
          </div>
          <div
            className=" py-5 px-4 flex justify-between"
            
          >
            <p className="text-[#1E0F3B] font-bold text-lg">Experience</p>
            <img src="/Assets/plusSign.svg" alt="cameraIcon" />
          </div>
          <div
            className=" py-5 px-4 flex justify-between"
          >
            <p className="text-[#1E0F3B] font-bold text-lg">Skill</p>
            <img src="/Assets/plusSign.svg" alt="cameraIcon" />
          </div>
          <div
            className=" py-5 px-4 flex justify-between"
          >
            <p className="text-[#1E0F3B] font-bold text-lg">Project</p>
            <img src="/Assets/plusSign.svg" alt="cameraIcon" />
          </div>
          <div
            className=" py-5 px-4 flex justify-between"
          >
            <p className="text-[#1E0F3B] font-bold text-lg">Certification</p>
            <img src="/Assets/plusSign.svg" alt="cameraIcon" />
          </div> */}
        </div>
        {/* section 2 */}
        <div className="lg:col-span-2">
          <img src="/Assets/resumeTemplate.png" alt="cameraIcon" />
        </div>
      </div>
    </div>
  );
};

export default Setupdetails;
