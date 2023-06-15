import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import SetupEducation from "../Components/ResumeData/setup-education";
import SetupExperience from "../Components/ResumeData/setup-experience";
import SetupSkills from "../Components/ResumeData/setup-skills";
import SetupProject from "../Components/ResumeData/setup-project";
import SetupCertificate from "../Components/ResumeData/setup-certification";
import { useDispatch, useSelector } from "react-redux";
import { resumeDataFillingAction } from "store/action/resumeDataFillingAction";
import Link from "next/link";
import { RESUME_REQUEST } from "store/type/setupDetailsType";
const Setupdetails = () => {
  const router = useRouter();
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  const resumeData = useSelector((state) => state.resumeDataFillingReducer);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [resumeFormData, setresumeFormData] = useState(resumeData);

  useEffect(() => {
    // dispatch(resumeDataFillingAction(resumeForm.personalDetails));
    setresumeFormData(resumeData);
  }, [resumeData]);

  const [resumeForm, setResumeForm] = useState({
    personalDetails: {
      fullName: resumeFormData?.resumeData?.personalDetails?.fullName,
      email: resumeFormData?.resumeData?.personalDetails?.email,
      phoneNumber: resumeFormData?.resumeData?.personalDetails?.phoneNumber,
      gender: resumeFormData?.resumeData?.personalDetails?.gender,
      birth: resumeFormData?.resumeData?.personalDetails?.birth,
      location: resumeFormData?.resumeData?.personalDetails?.location,
      text: resumeFormData?.resumeData?.personalDetails?.text,
      image: null,
    },
    education: [],
    experience: [],
    skill: [],
    project: [],
    certification: [],
    totalExperience: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [tempExp, setTemExp] = useState({});
  const [tempSkills, setempSkills] = useState({});
  const [tempProject, SetempProject] = useState({});
  const [tempCertificate, SetempCertificate] = useState({});
  const [tempeducation, SetempEdu] = useState({});
  const [fresherChecked, setFresherChecked] = useState(false);
  const [presentDateCheck, setpresentDateCheck] = useState(false);
  const [expautodata, setempautodata] = useState([]);
  const template = router.query.templateId;

  const handleCameraIconClick = () => {
    const fileInput = document.getElementById("image");
    fileInput.click();
  };

  const [errors, setErrors] = useState({});

  const renderErrorMessage = (fieldName) => {
    if (errors[fieldName]) {
      return <p className="text-red-500 text-xs">{errors[fieldName]}</p>;
    }
    return null;
  };
  const isFormValid = () => {
    const requiredFields = {
      personalDetails: {
        fullName: "Full Name",
        email: "Email",
        phoneNumber: "Phone Number",
        gender: "Gender",
        birth: "Birth (yyyy-mm-dd)",
        location: "Location",
        text: "Text",
        image: "Image",
      },
      education: "Education",
      experience: "Experience",
      skill: "Skill",
      project: "Project",
      certification: "Certification",
    };
    const errors = {};

    // Check for required fields in personalDetails
    const personalDetailsFields = Object.keys(requiredFields.personalDetails);
    personalDetailsFields.forEach((field) => {
      if (!resumeForm.personalDetails[field]) {
        errors[
          `personalDetails.${field}`
        ] = `${requiredFields.personalDetails[field]} is required`;
      }
    });

    // Validate birth field format
    const birthRegex = /^\d{4}-\d{2}-\d{2}$/;
    const birth = resumeForm.personalDetails.birth;
    if (birth && !birth.match(birthRegex)) {
      errors["personalDetails.birth"] =
        "Birth must be in the format yyyy-mm-dd";
    }

    Object.keys(requiredFields).forEach((section) => {
      if (section !== "personalDetails" && section !== "certification") {
        if (
          Array.isArray(resumeForm[section]) &&
          resumeForm[section].length === 0
        ) {
          errors[section] = `Atleast One entery required`;
        }
      }
    });
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const [section, field] = name.split(".");
      const file = files[0];

      setResumeForm((prevData) => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [field]: file,
        },
      }));
      setSelectedImage(URL.createObjectURL(file));
    } else {
      const [section, field] = name.split(".");

      let fieldValue = value;

      // Check specific validations for email field
      if (field === "email") {
        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [`${section}.${field}`]: "Invalid email format",
          }));
        } else {
          // Clear the error if email format is valid
          setErrors((prevErrors) => ({
            ...prevErrors,
            [`${section}.${field}`]: "",
          }));
        }
      }

      setResumeForm((prevData) => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [field]: fieldValue,
        },
      }));
    }
  };

  const handleExpChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".");
    setTemExp({ ...tempExp, [field]: value });
  };

  useEffect(() => {
    setTemExp({ ...tempExp, technologyEnvironment: expautodata });
  }, [expautodata]);

  useEffect(() => {
    console.log(resumeData);
  }, [resumeData]);

  const handleSkillsChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".");
    setempSkills({ ...tempSkills, [field]: value });
  };

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".");
    SetempProject({ ...tempProject, [field]: value });
  };

  const handleCertificateChange = (e) => {
    const { name, value, type, files } = e.target;
    const [section, field] = name.split(".");

    if (type === "file") {
      const file = files[0];
      SetempCertificate({ ...tempCertificate, [field]: file });
    } else {
      SetempCertificate({ ...tempCertificate, [field]: value });
    }
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".");
    SetempEdu({ ...tempeducation, [field]: value });
  };

  const handleExpAdd = () => {
    setResumeForm((prevData) => ({
      ...prevData,
      experience: [...prevData.experience, tempExp],
    }));
    setTemExp({});
    setempautodata([]);
  };

  const handleSkillsAdd = () => {
    setResumeForm((prevData) => ({
      ...prevData,
      skill: [...prevData.skill, tempSkills],
    }));
    setempSkills({});
  };
  const handleProjectAdd = () => {
    setResumeForm((prevData) => ({
      ...prevData,
      project: [...prevData.project, tempProject],
    }));
    SetempProject({});
  };

  const handleCertificateAdd = () => {
    setResumeForm((prevData) => ({
      ...prevData,
      certification: [...prevData.certification, tempCertificate],
    }));
    SetempCertificate({});
  };

  const handleEducationAdd = () => {
    setResumeForm((prevData) => ({
      ...prevData,
      education: [...prevData.education, tempeducation],
    }));
    SetempEdu({});
  };
  const handleautodata = (data) => {
    console.log("dingding", data);
    setempautodata(data);
  };

  const handleremovedata = (indexdata) => {
    setResumeForm((prevData) => {
      const updatedExperienceDetails = prevData.experience.filter(
        (_, index) => index !== indexdata
      );
      return {
        ...prevData,
        experience: updatedExperienceDetails,
      };
    });
  };

  const handleSkillsremovedata = (indexdata) => {
    setResumeForm((prevData) => {
      const updatedDataskills = prevData.skill.filter(
        (_, index) => index !== indexdata
      );
      return {
        ...prevData,
        skill: updatedDataskills,
      };
    });
  };

  const handleProjectremovedata = (indexdata) => {
    setResumeForm((prevData) => {
      const updatedData = prevData.project.filter(
        (_, index) => index !== indexdata
      );
      return {
        ...prevData,
        project: updatedData,
      };
    });
  };

  const handleCertificateremovedata = (indexdata) => {
    setResumeForm((prevData) => {
      const updatedData1 = prevData.certification.filter(
        (_, index) => index !== indexdata
      );
      return {
        ...prevData,
        certification: updatedData1,
      };
    });
  };

  const handleEducationremovedata = (indexdata) => {
    setResumeForm((prevData) => {
      const updatedDataEdu = prevData.education.filter(
        (_, index) => index !== indexdata
      );
      return {
        ...prevData,
        education: updatedDataEdu,
      };
    });
  };

  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");
      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const finaltoken = getToken();

  const handleSave = () => {
    if (isFormValid()) {
      const payload = {
        token: finaltoken,
        data: resumeForm,
      };
      dispatch({ type: RESUME_REQUEST, payload });
      const cleanData = {
        personalDetails: {
          fullName: "",
          email: "",
          phoneNumber: "",
          gender: "",
          birth: "",
          location: "",
          text: "",
          image: null,
        },
        education: [],
        experience: [],
        skill: [],
        project: [],
        certification: [],
      };
      setResumeForm(cleanData);
      setSelectedImage("");
      // router.push("/search_job");
      router.push("resume-created");
    }
  };
  console.log(resumeForm, "in details");

  return (
    <div className="bg-[#2B373C1C] py-5 px-2 sm:px-10">
      <div className="flex justify-between items-center mx-5 sm:mx-9">
        <div className="flex items-center gap-x-4 ">
          <Link href="/resume-upload">
            <Image
              src="/Assets/backbtn.svg"
              alt="back button"
              width={46}
              height={46}
              className="cursor-pointer"
            />
          </Link>
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
            )}
            <input
              id="image"
              type="file"
              name="personalDetails.image"
              accept=".jpg,.jpeg,.png,.svg"
              hidden
              onChange={handleInputChange}
            />
          </div>

          <div style={{ textAlign: "center", marginTop: "-1.2rem" }}>
            {" "}
            {renderErrorMessage("personalDetails.image")}
          </div>

          <form className="pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 px-4">
              <div className="relative">
                <label
                  className={`absolute top-[-8px] left-0 ml-2 mt-px  bg-white px-1 text-[#1E0F3B] text-xs font-bold `}
                  for="fullName"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="James Joy"
                  required
                  className={`py-5 px-4 border rounded-[10px] ${
                    errors["personalDetails.fullName"]
                      ? "border-red-500"
                      : "border-[#D8D8DD]"
                  } w-full`}
                  name="personalDetails.fullName"
                  value={resumeForm.personalDetails?.fullName || ""}
                  onChange={handleInputChange}
                />
                {renderErrorMessage("personalDetails.fullName")}
              </div>
              <div>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  required
                  className={`py-5 px-4 border rounded-[10px] ${
                    errors["personalDetails.email"]
                      ? "border-red-500"
                      : "border-[#D8D8DD]"
                  } w-full`}
                  name="personalDetails.email"
                  value={resumeForm.personalDetails?.email || ""}
                  onChange={handleInputChange}
                />
                {renderErrorMessage("personalDetails.email")}
              </div>
              <div>
                <input
                  type="number"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  required
                  className={`py-5 px-4 border rounded-[10px] ${
                    errors["personalDetails.phoneNumber"]
                      ? "border-red-500"
                      : "border-[#D8D8DD]"
                  } w-full`}
                  name="personalDetails.phoneNumber"
                  value={resumeForm.personalDetails?.phoneNumber || ""}
                  onChange={handleInputChange}
                />
                {renderErrorMessage("personalDetails.phoneNumber")}
              </div>
              <div>
                <select
                  id="gender"
                  required
                  className={`py-5 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select ${
                    errors["personalDetails.gender"]
                      ? "border-red-500"
                      : "border-[#D8D8DD]"
                  }`}
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
                {renderErrorMessage("personalDetails.gender")}
              </div>
              <div>
                <input
                  id="birth"
                  placeholder="Date of Birth (yyyy-mm-dd)"
                  required
                  className={`py-5 px-4 border rounded-[10px] ${
                    errors["personalDetails.birth"]
                      ? "border-red-500"
                      : "border-[#D8D8DD]"
                  } w-full`}
                  name="personalDetails.birth"
                  value={resumeForm.personalDetails?.birth || ""}
                  onChange={handleInputChange}
                />
                {renderErrorMessage("personalDetails.birth")}
              </div>
              <div>
                <input
                  type="text"
                  id="location"
                  placeholder="Location"
                  required
                  className={`py-5 px-4 border rounded-[10px] ${
                    errors["personalDetails.location"]
                      ? "border-red-500"
                      : "border-[#D8D8DD]"
                  } w-full`}
                  name="personalDetails.location"
                  value={resumeForm.personalDetails?.location || ""}
                  onChange={handleInputChange}
                />
                {renderErrorMessage("personalDetails.location")}
              </div>
              <div>
                <input
                  type="text"
                  id="role"
                  placeholder="Job role"
                  required
                  className={`py-5 px-4 border rounded-[10px] ${
                    errors["personalDetails.text"]
                      ? "border-red-500"
                      : "border-[#D8D8DD]"
                  } w-full`}
                  name="personalDetails.text"
                  value={resumeForm.personalDetails?.text || ""}
                  onChange={handleInputChange}
                />
                {renderErrorMessage("personalDetails.text")}
              </div>
            </div>
          </form>
          <div>
            <hr className="bg-[#15223214] " />
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              elevation={0}
            >
              <AccordionSummary
                expandIcon={<img src="/Assets/plusSign.svg" alt="cameraIcon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p
                  className={` font-bold text-lg ${
                    errors["education"] ? "text-[#ed4646]" : "text-[#1E0F3B]"
                  }`}
                >
                  Education
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <SetupEducation
                  educationDetails={tempeducation}
                  tempeducation={handleEducationChange}
                  handleEducationAdd={handleEducationAdd}
                  infodata={resumeForm?.education}
                  handleEducationremovedata={handleEducationremovedata}
                />
              </AccordionDetails>
            </Accordion>
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
                <p
                  className={` font-bold text-lg ${
                    errors["experience"] ? "text-[#ed4646]" : "text-[#1E0F3B]"
                  }`}
                >
                  Experience
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <SetupExperience
                  experienceDetails={tempExp}
                  tempExp={handleExpChange}
                  handleExpAdd={handleExpAdd}
                  infodata={resumeForm?.experience}
                  handleremovedata={handleremovedata}
                  fresherChecked={fresherChecked}
                  setFresherChecked={setFresherChecked}
                  presentDateCheck={presentDateCheck}
                  setpresentDateCheck={setpresentDateCheck}
                  handleautodata={handleautodata}
                  setempautodata={setempautodata}
                  expautodata={expautodata}
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
                <p
                  className={` font-bold text-lg ${
                    errors["skill"] ? "text-[#ed4646]" : "text-[#1E0F3B]"
                  }`}
                >
                  Skill
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <SetupSkills
                  skillsDetails={tempSkills}
                  tempSkills={handleSkillsChange}
                  handleSkillsAdd={handleSkillsAdd}
                  infodata={resumeForm?.skill}
                  handleSkillsremovedata={handleSkillsremovedata}
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
                <p
                  className={` font-bold text-lg ${
                    errors["project"] ? "text-[#ed4646]" : "text-[#1E0F3B]"
                  }`}
                >
                  Project
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <SetupProject
                  projectDetails={tempProject}
                  tempProject={handleProjectChange}
                  handleProjectAdd={handleProjectAdd}
                  infodata={resumeForm?.project}
                  handleProjectremovedata={handleProjectremovedata}
                />
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
                <p className={`font-bold text-lg`}>Certification</p>
              </AccordionSummary>
              <AccordionDetails>
                <SetupCertificate
                  certificationDetails={tempCertificate}
                  tempCertificate={handleCertificateChange}
                  handleCertificateAdd={handleCertificateAdd}
                  infodata={resumeForm?.certification}
                  handleCertificateremovedata={handleCertificateremovedata}
                />
              </AccordionDetails>
            </Accordion>
            <hr className="bg-[#15223214] " />
          </div>
        </div>
        {/* section 2 */}
        <div className="lg:col-span-2 mx-auto mt-8 lg:mx-0 lg:mt-0 max-h-[719px] overflow-y-scroll ">
          {/* <img src="/Assets/resumeTemplate.png" alt="cameraIcon" /> */}
          {template === "templateOne" ? (
            <div className="flex flex-col justify-center ">
              <div>
                <div className="m-[20px] p-[20px] border border-[#ccc] rounded-[5px] ">
                  <div className="flex items-center">
                    <div className="w-[80px] h-[80px] mr-[20px] ">
                      {/* <img
                      src={resumeForm.personalDetails.image.name}
                      alt="Profile"
                      className="w-full h-full rounded-[50%] "
                    /> */}
                      {selectedImage ? (
                        <img
                          src={selectedImage}
                          style={{ width: "fit-content", height: "auto" }}
                          alt="selectedImage"
                        />
                      ) : (
                        <img src="/Assets/camera-icon.svg" alt="cameraIcon" />
                      )}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-[20px] font-bold ">
                        {resumeForm.personalDetails.fullName}
                      </div>
                      <div className="text-[24px] text-[#888] ">
                        {resumeForm.personalDetails.text}
                      </div>
                    </div>
                  </div>
                  <div>email:-{resumeForm.personalDetails.email}</div>
                  <div>
                    Contact Number:-{resumeForm.personalDetails.phoneNumber}{" "}
                  </div>
                  <div className="">{resumeForm.personalDetails.location}</div>

                  <div className="content">
                    <div className="mb-[20px] ">
                      <h2>Education</h2>
                      {resumeForm.education.map((item, index) => {
                        return (
                          <div className="item" key={index}>
                            <div className="text-[18px] font-bold ">
                              {/* Bachelor of Science in Computer Science */}
                              {item.level} in {item.degreeName}
                            </div>
                            <div className="text-[14px] text-[#888] mb-[10px] ">
                              {/* University of XYZ, 2015-2019 */}
                              {item.institutionName}
                              <span>,</span> {item.year}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {!fresherChecked ? (
                      <div className="mb-[20px]">
                        <h2>Experience</h2>
                        {resumeForm.experience.map((item, index) => {
                          return (
                            <div className="item" key={index}>
                              <div className="text-[18px] font-bold ">
                                {/* Frontend Developer */}
                                {item.jopPosition}
                              </div>
                              <div className="text-[14px] text-[#888] mb-[10px] ">
                                {/* ABC Company, 2019-Present */}
                                {item.companyName} <span>,</span>{" "}
                                {item.joinedDate} <span>-</span>{" "}
                                {presentDateCheck ? "Present" : item.endDate}
                              </div>
                              <div>{item.description}</div>
                              {/* <ul className="pl-[20px] m-0 ">
                              <li className="mb-[5px] ">
                                Developed and maintained responsive web
                                applications using React.js
                              </li>
                              <li className="mb-[5px] ">
                                Collaborated with designers to implement user
                                interface components
                              </li>
                              <li className="mb-[5px] ">
                                Worked with backend developers to integrate APIs
                              </li>
                            </ul> */}
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                    <div className="mb-[20px] ">
                      <h2>Skills</h2>
                      <div className="item">
                        <ul className="m-0 flex flex-row ">
                          {resumeForm.skill.map((item, index) => {
                            return (
                              <li className="mb-[5px] ml-[8px] " key={index}>
                                {item.skillName}
                              </li>
                            );
                          })}

                          {/* <li className="mb-[5px] ">HTML</li>
                        <li className="mb-[5px] ">CSS</li>
                        <li className="mb-[5px] ">JavaScript</li>
                        <li className="mb-[5px] ">Git</li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="mb-[20px] ">
                      <h2>projects</h2>
                      <div>
                        {resumeForm.project.map((item, index) => {
                          return (
                            <div key={index} className="">
                              <div className="flex flex-row gap-[5px]">
                                <p>{item.projectName}</p>
                                <a
                                  href={item.projectUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 underline italic "
                                >
                                  link
                                </a>
                                <span>
                                  {item.startDate} <span>-</span> {item.endDate}
                                </span>
                              </div>
                              <p>{item.projectDescription}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="mb-[20px] ">
                      <h2>Certification</h2>
                      <div>
                        {resumeForm.certification.map((item, index) => {
                          return (
                            <div key={index} className="">
                              <div className="flex flex-row gap-[5px]">
                                <p>{item.courseName}</p>
                                <p>{item.issuingOrganization}</p>
                                <a
                                  href={item.projectUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 underline italic "
                                >
                                  link
                                </a>
                              </div>
                              <div>
                                {item.issueDate} <span>-</span>{" "}
                                {item.expirationDate}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {template === "templateTwo" ? (
            <div className="m-[20px] p-[20px] border border-[#ccc] rounded-[5px] ">
              <div className="flex justify-center mb-[30px]">
                <div className="flex items-center">
                  {/* <img
                    src="/Assets/appleIcon.png"
                    alt="Profile"
                    className="profile-image"
                  /> */}
                  <div className="w-[80px] h-[80px] mr-[20px] ">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        style={{ width: "fit-content", height: "auto" }}
                        alt="selectedImage"
                      />
                    ) : (
                      <img src="/Assets/camera-icon.svg" alt="cameraIcon" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[24px] font-bold mb-[10px] ">
                      {/* John Doe */}
                      {resumeForm.personalDetails.fullName}
                    </div>
                    <div className="text-[18px] text-[#888] mb-[10px] ">
                      {resumeForm.personalDetails.text}
                    </div>
                    <div className="contact">
                      <span className="block mb-[5px] ">
                        Email: {resumeForm.personalDetails.email}
                      </span>
                      <span className="block mb-[5px] ">
                        Phone: {resumeForm.personalDetails.phoneNumber}
                      </span>
                      <span className="block mb-[5px] ">
                        Location: {resumeForm.personalDetails.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="mb-[20px]">
                  <h2>Education</h2>
                  {resumeForm.education.map((item, index) => {
                    return (
                      <div className="item" key={index}>
                        <div className="text-[18px] font-bold mb-[10px] ">
                          {/* Bachelor of Science in Computer Science */}
                          {item.level} in {item.degreeName}
                        </div>
                        <div className="text-[14px] text-[#888] mb-[10px] ">
                          {/* University of XYZ, 2015-2019 */}
                          {item.institutionName}
                          <span>,</span> {item.year}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {!fresherChecked ? (
                  <div className="mb-[20px]">
                    <h2>Experience</h2>
                    {resumeForm.experience.map((item, index) => {
                      return (
                        <div className="item" key={index}>
                          <div className="text-[18px] font-bold mb-[10px] ">
                            {/* Frontend Developer */}
                            {item.jopPosition}
                          </div>
                          <div className="text-[14px] text-[#888] mb-[10px] ">
                            {/* ABC Company, 2019-Present */}
                            {item.companyName} <span>,</span> {item.joinedDate}{" "}
                            <span>-</span>{" "}
                            {presentDateCheck ? "Present" : item.endDate}
                          </div>
                          <div>{item.description}</div>
                          {/* <ul className="pl-[20px] m-0 ">
                            <li className="mb-[5px]">
                              Developed and maintained responsive web
                              applications using React.js
                            </li>
                            <li className="mb-[5px]">
                              Collaborated with designers to implement user
                              interface components
                            </li>
                            <li>
                              Worked with backend developers to integrate APIs
                            </li>
                          </ul> */}
                        </div>
                      );
                    })}
                  </div>
                ) : null}
                <div className="mb-[20px]">
                  <h2>Skills</h2>
                  <div className="item">
                    <ul className="m-0 flex flex-row ">
                      {resumeForm.skill.map((item, index) => {
                        return (
                          <li className="mb-[5px] ml-[8px] " key={index}>
                            {item.skillName}
                          </li>
                        );
                      })}
                      {/* <li className="mb-[5px]">React.js</li>
                      <li className="mb-[5px]">HTML</li>
                      <li className="mb-[5px]">CSS</li>
                      <li className="mb-[5px]">JavaScript</li>
                      <li className="mb-[5px]">Git</li> */}
                    </ul>
                  </div>
                </div>
                <div className="mb-[20px] ">
                  <h2>projects</h2>
                  <div>
                    {resumeForm.project.map((item, index) => {
                      return (
                        <div key={index} className="">
                          <div className="flex flex-row gap-[5px]">
                            <p>{item.projectName}</p>
                            <a
                              href={item.projectUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 underline italic "
                            >
                              link
                            </a>
                            <span>
                              {item.startDate} <span>-</span> {item.endDate}
                            </span>
                          </div>
                          <p>{item.projectDescription}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mb-[20px] ">
                  <h2>Certification</h2>
                  <div>
                    {resumeForm.certification.map((item, index) => {
                      return (
                        <div key={index} className="">
                          <div className="flex flex-row gap-[5px]">
                            <p>{item.courseName}</p>
                            <p>{item.issuingOrganization}</p>
                            <a
                              href={item.projectUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 underline italic "
                            >
                              link
                            </a>
                          </div>
                          <div>
                            {item.issueDate} <span>-</span>{" "}
                            {item.expirationDate}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Setupdetails;

