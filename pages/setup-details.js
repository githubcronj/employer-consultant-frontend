import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import SetupEducation from "./setup-education";
import SetupExperience from "./setup-experience";
import SetupSkills from "./setup-skills";
import SetupProject from "./setup-project";
import SetupCertificate from "./setup-certification";

const Setupdetails = () => {
  const router = useRouter();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [resumeForm, setResumeForm] = useState({
    personalDetails: {
      fullName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      birth: "",
      location: "",
      text: "",
    },
    educationDetails: {},
    experienceDetails: [],
    skillsDetails: { skillName: "" },
    projectDetails: {},
    certificationDetails: {},
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [tempExp, setTemExp] = useState({});

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
  // new handle
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".");
    setResumeForm((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleExpChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".");
    setTemExp({ ...tempExp, [field]: value });
  };

  const handleExpAdd = () => {
    setResumeForm((prevData) => ({
      ...prevData,
      experienceDetails: [...prevData.experienceDetails, tempExp],
    }));
    setTemExp({});
  };

  const handleremovedata = (indexdata) => {
    setResumeForm((prevData) => {
      const updatedExperienceDetails = prevData.experienceDetails.filter(
        (_, index) => index !== indexdata
      );
      return {
        ...prevData,
        experienceDetails: updatedExperienceDetails,
      };
    });
  };

  console.log(resumeForm, tempExp);

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
          // onClick={handleSave}
          className="px-8 py-3 bg-red-500 text-white rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3"
        >
          <img src="/Assets/check.svg" alt="save" />
          Save
        </button>
      </div>
      <div className=" bg-white   mx-2 sm:mx-6 lg-mx-8 border rounded-xl grid lg:grid-cols-5">
        <div
          className="flex flex-col lg:col-span-3 lg:max-h-[719px] lg:overflow-y-scroll"
          style={{
            borderRight: "2px solid #D8D8DD",
            marginTop: "1.5rem",
          }}
        >
          <div
            className="bg-[#2B373C1C] flex justify-center items-center mb-7 mx-auto px-4 lg:py-4"
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
                  name="personalDetails.fullName"
                  value={resumeForm.personalDetails?.fullName || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  required
                  className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                  name="personalDetails.email"
                  value={resumeForm.personalDetails?.email || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="number"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  required
                  className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                  name="personalDetails.phoneNumber"
                  value={resumeForm.personalDetails?.phoneNumber || ""}
                  onChange={handleInputChange}
                />
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
                  name="personalDetails.gender"
                  value={resumeForm.personalDetails?.gender || ""}
                  onChange={handleInputChange}
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <input
                  type="number"
                  id="birth"
                  placeholder="Date of Birth"
                  required
                  className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                  name="personalDetails.birth"
                  value={resumeForm.personalDetails?.birth || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  id="location"
                  placeholder="Location"
                  required
                  className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                  name="personalDetails.location"
                  value={resumeForm.personalDetails?.location || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  id="role"
                  placeholder="Job role"
                  required
                  className="py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full"
                  name="personalDetails.text"
                  value={resumeForm.personalDetails?.text || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </form>
          <div>
            <hr className="bg-[#15223214] " />
            {/* <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              elevation={0}
            >
              <AccordionSummary
                expandIcon={<img src="/Assets/plusSign.svg" alt="cameraIcon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p className="text-[#1E0F3B] font-bold text-lg">Education</p>
              </AccordionSummary>
              <AccordionDetails>
                <SetupEducation />
              </AccordionDetails>
            </Accordion> */}
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              elevation={0}
            >
              <AccordionSummary
                expandIcon={<img src="/Assets/plusSign.svg" alt="cameraIcon" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <p className="text-[#1E0F3B] font-bold text-lg">Experience</p>
              </AccordionSummary>
              <AccordionDetails>
                <SetupExperience
                  experienceDetails={tempExp}
                  tempExp={handleExpChange}
                  handleExpAdd={handleExpAdd}
                  infodata={resumeForm?.experienceDetails}
                  handleremovedata={handleremovedata}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              elevation={0}
            >
              <AccordionSummary
                expandIcon={<img src="/Assets/plusSign.svg" alt="cameraIcon" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <p className="text-[#1E0F3B] font-bold text-lg">Skill</p>
              </AccordionSummary>
              <AccordionDetails>
                <SetupSkills
                  skillsDetails={resumeForm}
                  setskillsDetails={setResumeForm}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              elevation={0}
            >
              <AccordionSummary
                expandIcon={<img src="/Assets/plusSign.svg" alt="cameraIcon" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <p className="text-[#1E0F3B] font-bold text-lg">Project</p>
              </AccordionSummary>
              <AccordionDetails>
                <SetupProject />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
              elevation={0}
            >
              <AccordionSummary
                expandIcon={<img src="/Assets/plusSign.svg" alt="cameraIcon" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <p className="text-[#1E0F3B] font-bold text-lg">
                  Certification
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <SetupCertificate />
              </AccordionDetails>
            </Accordion>
            <hr className="bg-[#15223214] " />
          </div>
        </div>
        {/* section 2 */}
        <div className="lg:col-span-2 mx-auto mt-8 lg:mx-0 lg:mt-0">
          <img src="/Assets/resumeTemplate.png" alt="cameraIcon" />
        </div>
      </div>
    </div>
  );
};

export default Setupdetails;
