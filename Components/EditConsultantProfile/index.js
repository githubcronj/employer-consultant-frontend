import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CircularProgress,
} from "@mui/material";
import EditEducation from "Components/EditConsultantProfile/edit-education";
import EditExperience from "Components/EditConsultantProfile/edit-experience";
import EditProject from "Components/EditConsultantProfile/edit-project";
import EditSKills from "Components/EditConsultantProfile/edit-skills";
import EditCertificate from "Components/EditConsultantProfile/edit-certification";
import { useDispatch, useSelector } from "react-redux";
import { GET_PROFILE_REQUEST } from "store/type/viewProfileType";
import { EditConsultantSuccess } from "store/action/editConsultantProfileAction";
import { useRouter } from "next/router";

const EditConsultantProfile = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [resumeForm, setResumeForm] = useState({
    personalDetails: {
      fullName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      birth: "",
      location: "",
      text: "",
      image: null,
      totalExperience: "",
    },
    education: [],
    experience: [],
    skill: [],
    project: [],
    certification: [],
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [tempeducation, SetempEdu] = useState({});
  const [errors, setErrors] = useState({});
  const [fresherChecked, setFresherChecked] = useState(false);
  const [presentDateCheck, setpresentDateCheck] = useState(false);
  const [expautodata, setempautodata] = useState([]);
  const [tempExp, setTemExp] = useState({});
  const [tempSkills, setempSkills] = useState({});
  const [tempProject, SetempProject] = useState({});
  const [tempCertificate, SetempCertificate] = useState({});
  const [responseData, setResponseData] = useState(true);
  const dispatch = useDispatch();
  const route = useRouter();

  const routerPath = route?.pathname;

  useEffect(() => {
    dispatch({ type: GET_PROFILE_REQUEST, payload });
  }, []);

  const response = useSelector(
    (state) => state.viewProfileReducer?.CurrentUser
  );
  const isCurrentUser = useSelector(
    (state) => state.viewProfileReducer?.isCurrentUser
  );

  useEffect(() => {
    setResponseData(isCurrentUser);
  }, [isCurrentUser]);

  console.log(isCurrentUser, "asdfgfds");
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
        totalExperience: "Experience",
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

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleCameraIconClick = () => {
    const fileInput = document.getElementById("image");
    fileInput.click();
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

  // for education

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".");
    SetempEdu({ ...tempeducation, [field]: value });
  };

  const handleEducationAdd = () => {
    setResumeForm((prevData) => ({
      ...prevData,
      education: [...prevData.education, tempeducation],
    }));
    SetempEdu({});
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

  // edit experience

  const handleExpChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".");
    setTemExp({ ...tempExp, [field]: value });
  };

  useEffect(() => {
    setTemExp({ ...tempExp, technologyEnvironment: expautodata });
  }, [expautodata]);

  const handleExpAdd = () => {
    setResumeForm((prevData) => ({
      ...prevData,
      experience: [...prevData.experience, tempExp],
    }));
    setTemExp({});
    setempautodata([]);
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

  // for project

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".");
    SetempProject({ ...tempProject, [field]: value });
  };

  const handleProjectAdd = () => {
    setResumeForm((prevData) => ({
      ...prevData,
      project: [...prevData.project, tempProject],
    }));
    SetempProject({});
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

  // for skills

  const handleSkillsChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".");
    setempSkills({ ...tempSkills, [field]: value });
  };

  const handleSkillsAdd = () => {
    setResumeForm((prevData) => ({
      ...prevData,
      skill: [...prevData.skill, tempSkills],
    }));
    setempSkills({});
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

  //for cetificate

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

  const handleCertificateAdd = () => {
    setResumeForm((prevData) => ({
      ...prevData,
      certification: [...prevData.certification, tempCertificate],
    }));
    SetempCertificate({});
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

  // redux saga

  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const finaltoken = getToken();
  const payload = {
    token: finaltoken,
  };

  useEffect(() => {
    if (response) {
      const {
        fullName,
        email,
        phoneNumber,
        gender,
        dob,
        jobRole,
        location,
        education,
        experience,
        skill,
        project,
        certification,
        totalExperience,
      } = response;
      const formattedSkills = skill.skillName.map((skillName) => ({
        skillName,
      }));

      setResumeForm((prevForm) => ({
        ...prevForm,
        personalDetails: {
          fullName,
          email,
          phoneNumber,
          gender,
          birth: dob,
          location,
          text: jobRole,
          image: null,
          totalExperience,
        },
        education: [...education],
        experience: [...experience],
        skill: formattedSkills,
        project: [...project],
        certification: [...certification],
      }));
    }
  }, [response]);

  useEffect(() => {
    setResumeForm(resumeForm);
  }, [resumeForm]);

  const handleSave = () => {
    // if (isFormValid()) {
    const payload = {
      token: finaltoken,
      data: resumeForm,
      id: response._id,
    };

    console.log("dispatchhh", response);
    dispatch(EditConsultantSuccess(payload));
    // dispatch({ type: GET_PROFILE_REQUEST, payload });
    setTimeout(() => {
      route.push("/viewjobpost/cviewprofile");
    }, 3000);

    //   const cleanData = {
    //     personalDetails: {
    //       fullName: "",
    //       email: "",
    //       phoneNumber: "",
    //       gender: "",
    //       birth: "",
    //       location: "",
    //       text: "",
    //       image: null,
    //     },
    //     education: [],
    //     experience: [],
    //     skill: [],
    //     project: [],
    //     certification: [],
    //   };
    //   setResumeForm(cleanData);
    //   setSelectedImage("");
    //   // router.push("/search_job");
    //   router.push("resume-created");
    // }
  };

  console.log(resumeForm, "in Edit");
  console.log(response, "response in edit");
  return (
    <div className="py-5 px-2 sm:px-10 max-w-[1536px] mx-auto ">
      <div className="flex justify-between items-center mx-5 sm:mx-9 sm:mr-6 ">
        <div className="flex items-center gap-x-4 ">
          <Link href="/viewjobpost/cviewprofile">
            <Image
              src="/Assets/backbtn.svg"
              alt="back button"
              width={46}
              height={46}
              className="cursor-pointer"
            />
          </Link>
          <p className="text-[15px] text-[#2B373C] sm:text-2xl font-bold">
            Edit Profile
          </p>
        </div>
        <button
          onClick={handleSave}
          className="px-4 md:px-8 py-3 bg-red-500 text-white text-[10px] md:text-[16px] rounded-[16px] inline-flex gap-4 items-center tracking-wide uppercase my-3"
        >
          <img src="/Assets/check.svg" alt="save" />
          Save
        </button>
      </div>

      <div className=" bg-white mx-2 sm:mx-6 lg-mx-8 border rounded-xl grid lg:grid-cols-5">
        {responseData ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRight: "2px solid #D8D8DD",
              //   marginTop: "1.5rem",
            }}
            className="lg:col-span-3 lg:max-h-[719px] lg:overflow-y-scroll no-scrollbar"
          >
            <CircularProgress sx={{ color: "#EF4444" }} />
          </Box>
        ) : (
          <div
            className="flex flex-col lg:col-span-3 lg:max-h-[719px] lg:overflow-y-scroll no-scrollbar border-hidden lg:border-solid	 lg:border-r-[2px] border-[#D8D8DD] pt-[1.5rem] "
            style={
              {
                // borderRight: "2px solid #D8D8DD",
                // marginTop: "1.5rem",
              }
            }
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
                <div>
                  <input
                    type="number"
                    id="totalExperience"
                    placeholder="Total year of Experience"
                    required
                    className={`py-5 px-4 border rounded-[10px] ${
                      errors["personalDetails.totalExperience"]
                        ? "border-red-500"
                        : "border-[#D8D8DD]"
                    } w-full`}
                    name="personalDetails.totalExperience"
                    value={resumeForm.personalDetails?.totalExperience || ""}
                    onChange={handleInputChange}
                  />
                  {renderErrorMessage("personalDetails.totalExperience")}
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
                  expandIcon={
                    <img src="/Assets/plusSign.svg" alt="cameraIcon" />
                  }
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
                  <EditEducation
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
                  expandIcon={
                    <img src="/Assets/plusSign.svg" alt="cameraIcon" />
                  }
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
                  <EditExperience
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
                  expandIcon={
                    <img src="/Assets/plusSign.svg" alt="cameraIcon" />
                  }
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
                  <EditSKills
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
                  expandIcon={
                    <img src="/Assets/plusSign.svg" alt="cameraIcon" />
                  }
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
                  <EditProject
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
                  expandIcon={
                    <img src="/Assets/plusSign.svg" alt="cameraIcon" />
                  }
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <p className={`font-bold text-lg`}>Certification</p>
                </AccordionSummary>
                <AccordionDetails>
                  <EditCertificate
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
        )}
        {/* section 2 */}
        <div className="lg:col-span-2 mx-auto mt-8 lg:mx-0 lg:mt-0 max-h-[719px] overflow-y-scroll no-scrollbar ">
          {responseData ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="lg:col-span-3 lg:h-[719px] lg:overflow-y-scroll no-scrollbar"
            >
              <CircularProgress sx={{ color: "#EF4444" }} />
            </Box>
          ) : (
            <div className="lg:col-span-2 mx-auto mt-8 lg:mx-0 lg:mt-0 max-h-[719px] overflow-y-scroll max-w-[700px] no-scrollbar ">
              {/* resume */}
              {/* <div className='grid sm:grid-cols-5 bg-black lg:px-4'> */}
              <div className="sm:flex items-center bg-gray-500 lg:px-4">
                {/* <div className='sm:col-span-2 flex items-center my-10'> */}
                <div className="w-[32%] flex items-center my-4 bg-[#FAD02C] rounded-full">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      style={{ width: "fit-content", height: "auto" }}
                      alt="selectedImage"
                      className="h-[93%] w-[100%]"
                    />
                  ) : (
                    <img
                      src="/Assets/image.svg"
                      alt="profile"
                      className="h-[93%] w-[100%]"
                    />
                  )}
                </div>

                {/* <div className='sm:col-span-3 mx-3 my-10'> */}
                <div className="w-[68%] px-3 py-4 bg-gray-500">
                  <div className="text-[24px] font-bold mb-[10px] text-white break-words">
                    {resumeForm.personalDetails.fullName &&
                      resumeForm.personalDetails.fullName}
                    {resumeForm.personalDetails.fullName === ""
                      ? "David Anderson"
                      : null}
                    {resumeForm.personalDetails.fullName === undefined
                      ? "David Anderson"
                      : null}
                  </div>
                  <div className="text-[16px] w-[fit-content] font-medium text-white bg-gray-800 p-1 break-words">
                    {resumeForm.personalDetails.text &&
                      resumeForm.personalDetails.text}
                    {resumeForm.personalDetails.text === ""
                      ? "UX Designer"
                      : null}
                    {resumeForm.personalDetails.text === undefined
                      ? "UX Designer"
                      : null}
                    <span>- job role</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 my-10">
                    {/* 1 */}
                    <div>
                      <div className="text-[14px] text-white font-bold break-words">
                        Phone:
                      </div>
                      <div className="text-[16px] text-white break-words">
                        {resumeForm.personalDetails.phoneNumber &&
                          resumeForm.personalDetails.phoneNumber}
                        {resumeForm.personalDetails.phoneNumber === ""
                          ? "+0000 0000 000"
                          : null}
                        {resumeForm.personalDetails.phoneNumber === undefined
                          ? "+0000 0000 000"
                          : null}
                      </div>
                    </div>
                    {/* 2 */}
                    <div>
                      <div className="text-[14px] text-white font-bold break-words">
                        Email
                      </div>
                      <div className="text-[16px] text-white break-words">
                        {resumeForm.personalDetails.email &&
                          resumeForm.personalDetails.email}
                        {resumeForm.personalDetails.email === ""
                          ? "abc@email.com"
                          : null}
                        {resumeForm.personalDetails.email === undefined
                          ? "abc@email.com"
                          : null}
                      </div>
                    </div>

                    {/* 3 */}
                    <div>
                      <div className="text-[14px] text-white font-bold break-words">
                        Gender:
                      </div>
                      <div className="text-[16px] text-white break-words">
                        {resumeForm.personalDetails.gender &&
                          resumeForm.personalDetails.gender}
                        {resumeForm.personalDetails.gender === ""
                          ? "Male"
                          : null}
                        {resumeForm.personalDetails.gender === undefined
                          ? "Male"
                          : null}
                      </div>
                    </div>

                    {/* new */}

                    {/* 1 */}
                    <div>
                      <div className="text-[14px] text-white font-bold break-words">
                        Loaction:
                      </div>
                      <div className="text-[16px] text-white break-words">
                        {resumeForm.personalDetails.location &&
                          resumeForm.personalDetails.location}
                        {resumeForm.personalDetails.location === ""
                          ? "Banglore"
                          : null}
                        {resumeForm.personalDetails.location === undefined
                          ? "Banglore"
                          : null}
                      </div>
                    </div>
                    {/* 2 */}
                    <div>
                      <div className="text-[14px] text-white font-bold break-words">
                        Year of Experience
                      </div>
                      <div className="text-[16px] text-white break-words">
                        {resumeForm.personalDetails.totalExperience &&
                          resumeForm.personalDetails.totalExperience}
                        {resumeForm.personalDetails.totalExperience === ""
                          ? "5"
                          : null}
                        {resumeForm.personalDetails.totalExperience ===
                        undefined
                          ? "5"
                          : null}
                        <span>{` years`}</span>
                      </div>
                    </div>
                    {/* 3 */}
                  </div>
                </div>
              </div>

              <div className="flex items-start lg:mx-0 bg-[#EEEFEF]">
                {/* education and skills */}

                <div className="flex items-center py-10 pl-4 sm:w-[32%]">
                  <div>
                    <div className="text-[20px] font-bold mb-[10px] break-words">
                      Education
                    </div>
                    {resumeForm.education.length == 0 ? (
                      <div className="my-3">
                        <div className="text-[15px] break-words">2020</div>
                        <div className="text-[15px] font-bold break-words">
                          BCA in Bachelor Degree
                        </div>
                        <div className="text-[15px] break-words">
                          Mumbai University
                        </div>
                      </div>
                    ) : null}
                    {resumeForm.education.map((item, index) => {
                      return (
                        <div className="my-3" key={index}>
                          <div className="text-[15px] break-words">
                            {item.year}
                            {/* 2020 */}
                          </div>
                          <div className="text-[15px] font-bold break-words">
                            {item.level} in {item.degreeName}
                            {/* BCA in Bachelor Degree */}
                          </div>
                          <div className="text-[15px] break-words">
                            {item.institutionName}
                            {/* Mumbai University */}
                          </div>
                        </div>
                      );
                    })}

                    {/* skills */}

                    <div className="text-[20px] font-bold mt-8 break-words">
                      Skills
                    </div>
                    {resumeForm.skill.length == 0 ? (
                      <div className="my-3 flex items-center gap-2">
                        <div>
                          <img
                            src="/Assets/pointer.svg"
                            alt="points"
                            className=""
                          />
                        </div>
                        <div className="text-[15px] font-bold break-words">
                          Javascript
                        </div>
                      </div>
                    ) : null}
                    {resumeForm.skill.map((item, index) => {
                      return (
                        <div
                          className="my-3 flex items-center gap-2"
                          key={index}
                        >
                          <div>
                            <img
                              src="/Assets/pointer.svg"
                              alt="points"
                              className=""
                            />
                          </div>
                          <div className="text-[15px] font-bold break-words">
                            {item.skillName}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* skills */}
                </div>
                {/* expe and projects */}

                <div className="px-3 py-10 sm:w-[68%] bg-white">
                  <div>
                    {!fresherChecked ? (
                      <div>
                        <h2 className="text-[20px] font-bold mb-[10px] break-words">
                          Experience
                        </h2>
                        {resumeForm.experience.length == 0 ? (
                          <div className="grid sm:grid-cols-5 gap-2 my-2">
                            {/* 1 */}
                            <div className="sm:col-span-2">
                              <div className="text-[15px] break-words">
                                2020 to 2021
                              </div>
                              <div className="text-[15px] font-bold break-words">
                                Company Name
                              </div>
                            </div>
                            {/* 2 */}
                            <div className="sm:col-span-3">
                              <div className="text-[15px] font-bold break-words">
                                Senior Developer
                              </div>
                              <div className="text-[15px] break-words">
                                Description - In publishing and graphic design,
                                Lorem ipsum is a placeholder text commonly used
                                to demonstrate the visual form of a document or
                                a typeface without relying on meaningful
                                content.
                              </div>
                            </div>
                          </div>
                        ) : null}
                        {resumeForm?.experience?.map((item, index) => {
                          return (
                            <div
                              className="grid sm:grid-cols-5 gap-2 my-2"
                              key={index}
                            >
                              {/* 1 */}
                              <div className="sm:col-span-2">
                                <div className="text-[15px] break-words">
                                  {item?.joinedDate?.split("-")[0]}{" "}
                                  <span> to </span>
                                  {presentDateCheck
                                    ? "Present"
                                    : item?.endDate?.split("-")[0]}
                                  {/* 2020 to 2021 */}
                                </div>
                                <div className="text-[15px] font-bold break-words">
                                  {item.companyName}
                                  {/* Company Name */}
                                </div>
                              </div>
                              {/* 2 */}
                              <div className="sm:col-span-3">
                                <div className="text-[15px] font-bold break-words">
                                  {/* Senior Developer */}
                                  {item.jobPosition}
                                </div>
                                <div className="text-[15px] break-words">
                                  {item.description}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}

                    {/* end exp */}

                    {/* Projects */}

                    <div>
                      <h2 className="text-[20px] font-bold mb-[10px] break-words">
                        Projects
                      </h2>
                      {resumeForm.project.length == 0 ? (
                        <div className="grid sm:grid-cols-5 gap-2 my-2">
                          {/* 1 */}
                          <div className="sm:col-span-2">
                            <div className="text-[15px] break-words">
                              2020 to 2021
                            </div>
                            <div className="text-[15px] font-bold break-words">
                              Project Name
                            </div>
                          </div>
                          {/* 2 */}
                          <div className="sm:col-span-3">
                            <div className="text-[15px] font-bold break-words">
                              Link
                            </div>
                            <div className="text-[15px] break-words">
                              In publishing and graphic design, Lorem ipsum is a
                              placeholder text commonly used to demonstrate the
                              visual form of a document or a typeface without
                              relying on meaningful content.
                            </div>
                          </div>
                        </div>
                      ) : null}
                      {resumeForm?.project?.map((item, index) => {
                        return (
                          <div
                            className="grid sm:grid-cols-5 gap-2 my-2"
                            key={index}
                          >
                            {/* 1 */}
                            <div className="sm:col-span-2">
                              <div className="text-[15px] break-words">
                                {item?.startDate?.split("-")[0]}{" "}
                                <span> to </span>
                                {item?.endDate?.split("-")[0]}
                                {/* 2020 to 2021 */}
                              </div>
                              <div className="text-[15px] font-bold break-words">
                                {item.projectName}
                              </div>
                            </div>
                            {/* 2 */}
                            <div className="sm:col-span-3">
                              <div className="text-[15px] font-bold break-words">
                                <a
                                  href={item.projectUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 underline italic break-words "
                                >
                                  link
                                </a>
                              </div>
                              <div className="text-[15px] w-full break-words ">
                                {item.projectDescription}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* skills */}
                    <div>
                      {resumeForm.certification.length == 0 ? (
                        <div>
                          <div className="text-[20px] font-bold mt-8 break-words">
                            Certfication
                          </div>
                          <div>
                            <div className="text-[15px] font-bold break-words">
                              Big Data Certification Course by Caltech
                            </div>

                            <div>issued On: 20-02-2020</div>
                            <div>expiration Date: 20-02-2020</div>

                            <div>
                              <a
                                href="http://localhost:3000/resume"
                                className="text-blue-400 underline italic break-words "
                              >
                                view certificate
                              </a>
                            </div>
                          </div>
                        </div>
                      ) : null}

                      {resumeForm.certification.length != 0 && (
                        <div className="text-[20px] font-bold mt-8">
                          Certfication
                        </div>
                      )}

                      {resumeForm.certification.map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="text-[15px] font-bold break-words">
                              {item.courseName} <span> by </span>
                              {item.issuingOrganization}
                            </div>

                            <div>issued On: {item.issueDate}</div>
                            <div>expiration Date: {item.expirationDate}</div>

                            <div>
                              <a
                                href={item.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline italic break-words "
                              >
                                view certificate
                              </a>
                            </div>
                          </div>
                        );
                      })}

                      {/* end */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditConsultantProfile;
