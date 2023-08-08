import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Popoverr from "../../Components/PopOver/index";
import ConsultantCard, {
  cardData,
} from "../../Components/Cards/ConsultantsCard";
import Link from "next/link";
import ConfirmationModal from "Components/Modals/ConfirmationModal";
import withEmployerAuth from "Components/ProtectedRoute/withEmployerAuth";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_SHORTLISTED_COSULTANT_REQUEST,
  FETCH_SHORTLISTED_CONSULTANT_SUCCESS,
  REMOVE_SHORTLISTED_CONSULTANT_REQUEST,
} from "store/type/shortlistType";
import { Box, Button, InputAdornment, InputBase } from "@mui/material";
import {
  fetchshortlistconsultantRequest,
  rejectshortlistconsultantRequest,
} from "store/action/shortlistAction";
import {
  addintosheduleRequest,
  rejectsheduledconsultantRequest,
} from "store/action/sheduleConsultantAction";
import moment from "moment";
import styles from "styles/LoginPage.module.css";
import { emailInviteAction } from "store/action/emailInviteAction";

const ShortlistedConsultant = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const id = router.query;
  console.log(id, "roterid");
  const [selectedCard, setSelectedCard] = useState(null);
  const [shortlistedCards, setShortlistedCards] = useState([]);

  const [shortlistMessage, setShortlistMessage] = useState(`Shortlisted.`);
  const [shcheduleMessage, setScheduleMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);
  const [errors, setErrors] = useState({});
  const [search, setsearch] = useState("");
  const [jobId, setJobId] = useState();
  const [currentJob, setCurrentJob] = useState();
  const [singleConsulantData, setSingleConsulantData] = useState(null);
  // const [employerJobId, setEmployerJobId] = useState(null);

  // useEffect(() => {
  //   setEmployerJobId(router?.query);
  // }, [router?.query]);

  const now = new Date(); // Get the current date and time
  const year = now.getFullYear(); // Get the current year
  const month = now.getMonth() + 1; // Get the current month (Note: January is 0)
  const day = now.getDate(); // Get the current day
  const hours = 10; // Specify the desired hour (in this case, 10 AM)
  const minutes = 0; // Specify the desired minute (in this case, 00)
  const seconds = 0; // Specify the desired second (in this case, 00)

  // Format the date components with leading zeros if needed
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  // Create the scheduled date string in the desired format
  const scheduledDate = `${year}-${formattedMonth}-${formattedDay} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  console.log(scheduledDate, "scheduledDate");
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNo = () => {
    setModalOpen(false);
  };

  const handleSingleConsultantData = (card) => {
    setSingleConsulantData(card);
  };
  console.log(singleConsulantData, "singleConsulantData");

  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const accessToken = getToken();

  useEffect(() => {
    const JobId = localStorage.getItem("jobId");
    setJobId(JobId);
  }, [jobId]);

  useEffect(() => {
    // dispatch({
    //   type: FETCH_SHORTLISTED_COSULTANT_REQUEST,
    //   payload: jobId,
    //   accessToken,
    // });
    const payload = {
      payload: jobId,
      accessToken,
      // search: search,
    };
    dispatch(fetchshortlistconsultantRequest(payload));
  }, [jobId]);

  const onSearch = (e) => {
    setsearch(e.target.value);

    dispatch({
      type: FETCH_SHORTLISTED_COSULTANT_REQUEST,
      payload: jobId,
      accessToken,
      search: e.target.value,
    });
  };
  const handleChange = () => {
    const payload = {
      payload: jobId,
      accessToken,
      search: search,
    };
    dispatch(fetchshortlistconsultantRequest(payload));
    // dispatch({
    //   type: FETCH_SHORTLISTED_COSULTANT_REQUEST,
    //   payload: jobId,
    //   accessToken,
    //   search: search,
    // });
  };

  const clearFilters = () => {
    const payload = {
      payload: jobId,
      accessToken,
      search: search,
    };
    dispatch(fetchshortlistconsultantRequest(payload));
  };

  useEffect(() => {
    if (!search) {
      clearFilters();
      console.log("clearFilters");
    }
  }, [search]);

  const response = useSelector((state) => state?.getjobReducer?.selectedJob);
  console.log(response, "sweta");

  useEffect(() => {
    if (response) {
      if (Object?.keys(response).length >= 0) {
        setCurrentJob(response);
      }
    }
  }, [response]);
  // useEffect(() => {
  //   console.log(jobId,"jobid fetch shortlist")
  //   dispatch({
  //     type:FETCH_SHORTLISTED_COSULTANT_REQUEST,
  //     payload:id,
  //     accessToken,
  //     search,
  //   });
  // }, [jobId]);

  // const shortlistedData = useSelector(
  //   (state) =>
  //     state.shortlistConsultantReducer.shortlistedConsultantData.payload?.data
  //       ?.shortlistedConsultant
  // );
  const shortlistedData = useSelector(
    (state) =>
      state.shortlistConsultantReducer.fetchshortlistedconsultant.data
        ?.shortlistedConsultant
  );

  const shortlistedConsultantData = useSelector(
    (state) => state.shortlistConsultantReducer.fetchshortlistedconsultant.data
  );
  const shortlistedConsultantcount = useSelector(
    (state) => state.shortlistConsultantReducer.fetchshortlistedconsultant
  );

  console.log(shortlistedConsultantcount, "shortlistedConsultantcount");

  const consultantId = shortlistedData?.length > 0 && shortlistedData[0]?._id;

  console.log(consultantId, "cosultantid");
  const handleCardClick = (id) => {
    setSelectedCard(id);
  };
  const handleYes = () => {
    setYesClicked(true);
    setModalOpen(false);
    const rejectPayload = {
      jobId: jobId,
      consultantId: consultantId,
      accessToken,
    };

    dispatch(rejectshortlistconsultantRequest(rejectPayload));
  };

  const handleYes2 = () => {
    setYesClicked(true);
    setModalOpen(false);
    console.log(jobId, "jobid for sheduled ");
    console.log(consultantId, "consultantid for sheduled ");

    const shedulePayload = {
      jobId: jobId,
      consultantId: consultantId,
      scheduledDate: scheduledDate,
      accessToken,
    };

    dispatch(addintosheduleRequest(shedulePayload));
  };

  const handleScheduleClick = (id) => {
    if (!shortlistedCards.includes(id)) {
      setShortlistedCards([...shortlistedCards, id]);
      const currentDate = new Date().toLocaleDateString("en-US");
      const message = `Add to schedule.\n${scheduledDate}`;
      setScheduleMessage(message);
      setModalOpen(true);
    }
  };

  const shortlistedCount = shortlistedCards.length;

  const handleRemoveShortlisted = () => {
    const updatedShortlistedCards = shortlistedCards.filter(
      (cardId) => cardId !== selectedCard
    );
    setShortlistedCards(updatedShortlistedCards);
    setScheduleMessage(false);
    setModalOpen(true);
  };
  const handleRemoveSheduled = () => {
    const updatedShortlistedCards = shortlistedCards.filter(
      (cardId) => cardId !== selectedCard
    );
    setShortlistedCards(updatedShortlistedCards);
    setScheduleMessage(false);
    const rejectPayload = {
      jobId: jobId,
      consultantId: consultantId,
      accessToken,
    };

    dispatch(rejectsheduledconsultantRequest(rejectPayload));
  };
  const isCardShortlisted = shortlistedCards.includes(selectedCard);

  const renderShortlistButton = () => {
    if (isCardShortlisted || shcheduleMessage === "Consultant shortlisted.") {
      return (
        <>
          <button onClick={() => handleRemoveShortlisted()}>
            <img src="/Assets/removeShortlistedButton.svg" alt="remove" />
          </button>
        </>
      );
    } else {
      return (
        <Popoverr text={"Select and add into shortlist"}>
          <button
            onClick={() => handleShortlistClick(selectedCard)}
            className="flex justify-end sm:px-3 sm:py-3 mr-2 sm:mr-0"
          >
            <img src="/Assets/tick.svg" alt="tick" />
          </button>
        </Popoverr>
      );
    }
  };
  console.log(singleConsulantData?.consultantId?.email);

  const sendEmailInvite = () => {
    const payload = {
      // to: "pankaj@cronj.com",
      to: singleConsulantData?.consultantId?.email,
      subject: "denis Invite",
      content: "Invite sent for Schedulling call for interview",
    };

    dispatch(emailInviteAction(payload));
  };

  return (
    <div className=" grid lg:grid-cols-12 sm:grid-col-span-2 bg-[#2B373C1C] py-5 px-2 sm:px-2">
      <div className="lg:col-start-1 lg:col-end-12  sm:col-span-12">
        <div className="grid gap-4 mx-2 sm:mx-6 bg-white border px-4 py-4">
          <div className="flex items-center">
            <div className="flex flex-row items-center my-4">
              <p className="text-[20px] text-[#2B373C] sm:text-[25px] lg:text-[20px] xl:text-2xl font-bold">
                Shortlisted Consultants
                <span>
                  {shortlistedConsultantData?.jobTitle
                    ? ` for ${shortlistedConsultantData?.jobTitle}`
                    : ""}
                </span>
              </p>
            </div>
          </div>
          {/* <div className="  lg:col-span-8 sm:col-span-2"> */}
          {/* <div>
              <select
                id="experience1"
                required
                className="py-2 px-5 border rounded-[10px] border-[#D8D8DD] lg:w-[310px] sm:w-[300px] custom-select"
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  appearance: "none",
                  backgroundImage: "none",
                  backgroundColor: "#E8E7EB",
                  backgroundImage: "url(/Assets/down-arrow.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "95% center",
                  paddingRight: "20px",
                  ...(errors.experience ? { borderColor: "red" } : {}),
                }}
              >
                <option value="">UX Designer</option>
                <option value="one">1 year</option>
                <option value="two">2 years</option>
                <option value="three">3 years</option>
              </select>
            </div> */}
          {/* </div> */}
        </div>

        <div className="grid lg:grid-cols-12  gap-4 mx-2 sm:mx-6 bg-[#F9F6EE] border px-4 py-4 items-center">
          <div className="lg:col-span-4">
            {/* <div className="relative w-full">
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-4 py-2.5 "
                placeholder="Search"
                required
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Image
                  src="/Assets/searchIcon.svg"
                  alt="Search Icon"
                  width={16}
                  height={16}
                />
              </div>
            </div> */}

            <InputBase
              name="location"
              onChange={(e) => {
                setsearch(e.target.value);
              }}
              className="rounded-[13px]"
              value={search}
              sx={{
                flex: 1,
                alignItems: "center",
                display: "flex",
                background: "#E7E9E9",
                padding: ".4rem",
                // cursor: "pointer",
              }}
              placeholder="Search"
              autoComplete="off"
              startAdornment={
                <InputAdornment
                  sx={{
                    width: "70px",
                    height: "30px",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="w-[18px] h-[18px] "
                    src="/Assets/searchIcon.svg"
                    alt="Search Icon"
                    loading="lazy"
                  />
                </InputAdornment>
              }
              endAdornment={
                <Button
                  className={`${styles.searchbtn3}`}
                  onClick={() => {
                    handleChange();
                  }}
                  style={{
                    background: "red",
                    padding: ".55rem 2rem",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  Search
                </Button>
              }
            />
          </div>
          <div className="lg:col-span-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center ">
              <p className="text-[15px] sm:text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[#2B373C]">
                {shortlistedConsultantData?.minExp} -{" "}
                {shortlistedConsultantData?.maxExp}yrs experience
              </p>
              <span className="dot hidden sm:inline-block"></span>
              <p className="text-[15px] sm:text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[16px] text-[#2B373C]">
                {shortlistedConsultantData?.jobType}
              </p>
              <span className="dot hidden sm:inline-block"></span>
              <p className="text-[15px] sm:text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[16px] text-[#2B373C]">
                {shortlistedConsultantData?.minSalary}-
                {shortlistedConsultantData?.maxSalary} /hr
              </p>
              <span className="dot hidden sm:inline-block"></span>
              <p className="text-[15px] sm:text-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[16px] text-[#2B373C]">
                {moment(shortlistedConsultantData?.deadline)
                  .utc()
                  .format("YYYY-MM-DD")}
              </p>
            </div>
          </div>
        </div>

        <div className=" bg-white mx-2 sm:mx-6 lg-mx-8 border rounded-xl rounded-t-none grid lg:grid-cols-8">
          {/* first section */}
          <div
            className="flex flex-col lg:col-span-3 pt-6 pb-4 lg:py-6 max-h-[640px] overflow-y-scroll lg:max-h-none"
            // style={{ borderRight: "2px solid #D8D8DD" }}
          >
            <div className="flex px-3 mb-4 lg:mb-0">
              <p className=" text-[26px] text-[#2B373C] sm:text-2xl font-bold">
                {`${shortlistedConsultantcount?.total}`}
                <span className="ml-[4px]">Consultant</span>
              </p>
              <div className="bg-[#5E9AF8] ml-2 px-2 py-1 border rounded text-[#ffffff]">
                {shortlistedCount}
              </div>
            </div>
            <div
              className="lg:h-[550px] lg:overflow-auto"
              style={{ scrollbarWidth: "thin" }}
            >
              {shortlistedData?.length > 0 ? (
                shortlistedData?.map((card, index) => (
                  <Box key={index}>
                    <ConsultantCard
                      key={card._id}
                      name={card.fullName}
                      jobTitle={card.jobRole}
                      experience={card.totalExperience}
                      // imageSrc={card.imageSrc}
                      selected={card._id === selectedCard}
                      shortlisted={shortlistedCards.includes(card._id)}
                      onClick={() => {
                        handleCardClick(card._id);
                        handleSingleConsultantData(card);
                      }}
                      onRemove={() => handleRemoveClick(card._id)}
                    >
                      {card.id === selectedCard && (
                        <div className="flex flex-col gap-y-4">
                          {renderShortlistButton()}
                          <Link
                            href="/consultant/[id]"
                            as={`/consultant/${card._id}`}
                          >
                            <a>View Details</a>
                          </Link>
                        </div>
                      )}
                    </ConsultantCard>
                  </Box>
                ))
              ) : (
                <p>No data available</p>
              )}
            </div>

            <div></div>
          </div>
          {/* section 2 */}
          {/* <div className="lg:col-span-3">
            <div className="grid lg:grid-cols-12">
              <div className="border-l lg:col-start-1 lg:col-end-12">
                <img src="/Assets/resumeTemplate.png" alt="cameraIcon" />
              </div>
              <div className="border-l lg:col-start-12 lg:col-end-12 flex justify-end items-end ">
                <img src="/Assets/downloadbtn.svg" alt="cameraIcon" />
              </div>
            </div>
          </div> */}

          <div
            className={`lg:col-span-4 mx-auto lg:mx-0 lg:mt-0 max-h-[719px] w-full sm:w-auto overflow-y-scroll ${
              singleConsulantData === null
                ? "lg:border-l-2 border-gray-800"
                : "border-gray-800 border-[2px]"
            } `}
          >
            {singleConsulantData === null ? (
              <h1 className="lg:text-2xl font-bold  xl:pl-[17px] lg:pl-[17px] sm:pl-[17px] md:pl-[17px] pl-[5px] h-[19px] my-8 lg:mb-[15px] lg:mt-[15px] text-[#000000] text-left font-sans">
                Please Select Any Consultant
              </h1>
            ) : (
              <div
                className="lg:col-span-2 mx-auto mt-8 lg:mx-0 lg:mt-0 max-h-[719px] overflow-y-scroll max-w-[700px] "
                id="templateOneContent"
              >
                {/* resume */}
                <div className="sm:flex items-center bg-gray-500 lg:px-4">
                  <div className="w-[32%] flex items-center my-4 bg-[#FAD02C] rounded-full">
                    <img
                      src="/Assets/image.svg"
                      alt="profile"
                      className="h-[93%] w-[100%]"
                    />
                  </div>

                  <div className="w-[68%] px-3 py-4 bg-gray-500">
                    <div className="text-[24px] font-bold mb-[10px] text-white break-words">
                      {singleConsulantData?.fullName}
                    </div>
                    <div className="text-[16px] w-[fit-content] font-medium text-white bg-gray-500 p-1 break-words">
                      {singleConsulantData?.jobRole}
                      <span>- job role</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 my-10">
                      {/* 1 */}
                      <div>
                        <div className="text-[14px] text-white font-bold break-words">
                          Phone:
                        </div>
                        <div className="text-[16px] text-white break-words">
                          {singleConsulantData?.phoneNumber}
                        </div>
                      </div>
                      {/* 2 */}
                      <div>
                        <div className="text-[14px] text-white font-bold break-words">
                          Email
                        </div>
                        <div className="text-[16px] text-white break-words">
                          {singleConsulantData?.email}
                        </div>
                      </div>

                      {/* 3 */}
                      <div>
                        <div className="text-[14px] text-white font-bold break-words">
                          Gender:
                        </div>
                        <div className="text-[16px] text-white break-words">
                          {singleConsulantData?.gender}
                        </div>
                      </div>
                      <div>
                        <div className="text-[14px] text-white font-bold break-words">
                          Loaction:
                        </div>
                        <div className="text-[16px] text-white break-words">
                          {singleConsulantData?.location}
                        </div>
                      </div>
                      {/* 2 */}
                      <div>
                        <div className="text-[14px] text-white font-bold break-words">
                          Year of Experience
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start lg:mx-0 bg-gray-200">
                  {/* education and skills */}

                  <div className="flex items-center py-10 pl-4 sm:w-[32%]">
                    <div>
                      {/* <div className="text-[20px] font-bold mb-[10px] break-words">
                        Education
                      </div>
                      {singleConsulantData?.education.length > 0 &&
                        singleConsulantData?.education.map((item, index) => {
                          return (
                            <div className="my-3" key={index}>
                              <div className="text-[15px] break-words">
                                {item.year}
                              </div>
                              <div className="text-[15px] font-bold break-words">
                                {item.level} in {item.degreeName}
                              </div>
                              <div className="text-[15px] break-words">
                                {item.institutionName}
                              </div>
                            </div>
                          );
                        })} */}

                      {/* skills */}

                      <div className="text-[20px] font-bold mt-8 break-words">
                        Skills
                      </div>
                      {singleConsulantData?.skill?.skillName.length &&
                        singleConsulantData?.skill?.skillName.map(
                          (item, index) => {
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
                                  {item}
                                </div>
                              </div>
                            );
                          }
                        )}
                    </div>

                    {/* skills */}
                  </div>
                  {/* expe and projects */}

                  <div className="px-3 py-10 sm:w-[68%] bg-gray-200">
                    <div>
                      <div>
                        <h2 className="text-[20px] font-bold mb-[10px] break-words">
                          Experience
                        </h2>
                        {singleConsulantData?.experience?.length &&
                          singleConsulantData?.experience?.map(
                            (item, index) => {
                              return (
                                <div
                                  className="grid sm:grid-cols-5 gap-2 my-2"
                                  key={index}
                                >
                                  <div className="sm:col-span-2">
                                    <div className="text-[15px] break-words">
                                      {moment(item?.joinedDate)
                                        .utc()
                                        .format("YYYY-MM-DD")}
                                    </div>
                                    <div className="text-[15px] font-bold break-words">
                                      {item.companyName}
                                    </div>
                                  </div>
                                  <div className="sm:col-span-3">
                                    <div className="text-[15px] font-bold break-words">
                                      {item.jobPosition}
                                    </div>
                                    <div className="text-[15px] break-words">
                                      {item.description}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                      </div>

                      {/* end exp */}

                      {/* Projects */}

                      {/* <div>
                        <h2 className="text-[20px] font-bold mb-[10px] break-words">
                          Projects
                        </h2>
                        {singleConsulantData?.project.length &&
                          singleConsulantData?.project?.map((item, index) => {
                            return (
                              <div
                                className="grid sm:grid-cols-5 gap-2 my-2"
                                key={index}
                              >
                                <div className="sm:col-span-2">
                                  <div className="text-[15px] break-words">
                                    {moment(item?.startDate)
                                      .utc()
                                      .format("YYYY-MM-DD")}
                                    <span> to </span>
                                    {moment(item?.endDate)
                                      .utc()
                                      .format("YYYY-MM-DD")}
                                  </div>
                                  <div className="text-[15px] font-bold break-words">
                                    {item.projectName}
                                  </div>
                                </div>

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
                      </div> */}

                      {/* skills */}
                      {/* <div>
                        {singleConsulantData?.certification.length != 0 && (
                          <div className="text-[20px] font-bold mt-8">
                            Certfication
                          </div>
                        )}

                        {singleConsulantData?.certification?.map(
                          (item, index) => {
                            return (
                              <div key={index}>
                                <div className="text-[15px] font-bold break-words">
                                  {item.courseName} <span> by </span>
                                  {item.issuingOrganization}
                                </div>

                                <div>
                                  issued On:{" "}
                                  {moment(item.issueDate)
                                    .utc()
                                    .format("YYYY-MM-DD")}
                                </div>
                                <div>
                                  expiration Date:{" "}
                                  {moment(item.expirationDate)
                                    .utc()
                                    .format("YYYY-MM-DD")}
                                </div>

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
                          }
                        )}
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {singleConsulantData === null ? (
            <h1></h1>
          ) : (
            <div
              className="flex lg:flex-col lg:items-center sm:flex-row  py-6 px-3 lg:col-span-1 lg:ml-0 relative mx-auto"
              style={{ width: "auto" }}
            >
              <div className="flex items-center justify-center sm:mt-2 relative ">
                <div className="mt-2 px-4 py-2 bg-[#EAE9EA] text-[#131523] border rounded border-gray-300 shadow w-[150px] ml-[-50px] absolute left-[3rem] bottom-[4rem] sm:left-[4rem] sm:bottom-[5rem] lg:left-auto lg:bottom-auto lg:relative ">
                  <p className="font-bold">{shortlistMessage}</p>
                  <p>{new Date().toLocaleDateString("en-US")}</p>
                </div>
              </div>
              {shcheduleMessage ? (
                <>
                  <div className="flex items-center justify-center mt-2 relative">
                    <p className="mt-2 px-4 py-2 bg-[#EAE9EA] text-[#131523] border rounded border-gray-300 shadow w-[200px] lg:w-[150px] lg:ml-[-50px] sm:ml-[0px] absolute left-[7rem] bottom-[4rem] sm:left-[11rem] sm:bottom-[5rem] lg:left-auto lg:bottom-auto lg:relative">
                      {shcheduleMessage}
                    </p>
                  </div>
                  {yesClicked ? (
                    <Popoverr text={"Remove from schedule list"}>
                      <button
                        onClick={handleRemoveSheduled}
                        className="flex justify-end sm:px-3 sm:py-3 mr-2 sm:mr-0"
                      >
                        <img
                          src="/Assets/removeShortlistedButton.svg"
                          alt="tick"
                        />
                      </button>
                    </Popoverr>
                  ) : (
                    ""
                  )}

                  <ConfirmationModal
                    text={"Do you want to add Schedule list?"}
                    isOpen={modalOpen}
                    onClose={handleCloseModal}
                    onYes={handleYes2}
                    onNo={handleNo}
                  />
                </>
              ) : (
                <>
                  <Popoverr text={"Add into schedule list"}>
                    <button
                      onClick={() => handleScheduleClick(selectedCard)}
                      className="flex justify-end sm:px-3 sm:py-3 mr-2 sm:mr-0"
                    >
                      <img src="/Assets/sheduleIcon.svg" alt="tick" />
                    </button>
                  </Popoverr>
                  <Popoverr text={"Remove from Shortlist"}>
                    <button
                      onClick={handleRemoveShortlisted}
                      className="flex justify-end sm:px-3 sm:py-3 mr-2 sm:mr-0"
                    >
                      <img src="/Assets/crossBtn.svg" alt="tick" />
                    </button>
                  </Popoverr>
                  <ConfirmationModal
                    text={"Do you want to Remove from Shortlist?"}
                    isOpen={modalOpen}
                    onClose={handleCloseModal}
                    onYes={handleYes}
                    onNo={handleNo}
                  />
                </>
              )}

              <hr />
              {/* <addConsultant /> */}
              <Popoverr text={"Send mail invite for interview"}>
                <button
                  className="flex justify-end sm:px-3 sm:py-3 mr-2 sm:mr-0"
                  onClick={sendEmailInvite}
                >
                  <img src="/Assets/mailBtn.svg" alt="tick" />
                </button>
              </Popoverr>
              <Popoverr text={"Chat with consultant"}>
                <button className="flex justify-end sm:px-3 sm:py-3 mr-2 sm:mr-0">
                  <img src="/Assets/chat.svg" alt="tick" />
                </button>
              </Popoverr>
              <Popoverr text={"Send E-mail"}>
                <button className="flex justify-end sm:px-3 sm:py-3">
                  <img src="/Assets/mail2.svg" alt="tick" />
                </button>
              </Popoverr>
            </div>
          )}
        </div>
      </div>

      <div className=" lg:col-start-12 lg:col-end-12 sm:col-start-1 sm:col-end-12"></div>
    </div>
  );
};

export default withEmployerAuth(ShortlistedConsultant);
