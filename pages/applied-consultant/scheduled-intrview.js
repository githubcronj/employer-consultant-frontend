import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Popoverr from "Components/PopOver/index";
import ConsultantCard, {
  cardData,
} from "../../Components/Cards/ConsultantsCard";

import Link from "next/link";

import ConfirmationModal from "Components/Modals/ConfirmationModal";
import withAuth from "Components/ProtectedRoute/WithAuth";
import withEmployerAuth from "Components/ProtectedRoute/withEmployerAuth";
import { FETCH_SCHEDULED_CONSULTANT_REQUEST } from "store/type/scheduleTypes";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, InputAdornment, InputBase } from "@mui/material";
import moment from "moment";
import styles from "styles/LoginPage.module.css";

const ScheduleInterview = () => {
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState(null);
  const [scheduledCard, setscheduledCard] = useState([]);
  // const [shortlistMessage, setShortlistMessage] = useState(`Shortlisted.`);
  // const [scheduledMessage, setscheduleMessage] = useState(`Add to schedule.`);
  // const [invitationClick, setinvitationClick] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  // const [yesClicked, setYesClicked] = useState(false);
  // const [errors, setErrors] = useState({});
  const [jobId, setJobId] = useState();
  // const [currentJob, setCurrentJob] = useState();
  // const [shcheduleMessage, setScheduleMessage] = useState("");
  const [singleConsulantData, setSingleConsulantData] = useState(null);
  const [searchFlag, setSearchFlag] = useState(false);
  const [search, setsearch] = useState("");

  const dispatch = useDispatch();

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

    console.log(JobId, " scheduled jobid");
    dispatch({
      type: FETCH_SCHEDULED_CONSULTANT_REQUEST,
      payload: JobId,
      accessToken,
    });
  }, [jobId]);

  const scheduledData = useSelector(
    (state) =>
      state.sheduledConsultantReducer.fetchscheduledconsultant.data
        ?.scheduleList
  );

  const handleInputChange = (e) => {
    setsearch(e.target.value);
    if (!search) {
      console.log("inside handlechange");
      setSearchFlag(!searchFlag);
    }
  };

  const handleInputBlur = () => {
    if (search === "") {
      clearFilters();
      console.log("clearFilters");
    }
  };

  const clearFilters = () => {
    // dispatch(fetchshortlistconsultantRequest(jobId, accessToken, search));
    setsearch("");
    dispatch({
      type: FETCH_SCHEDULED_CONSULTANT_REQUEST,
      payload: jobId,
      accessToken,
    });
  };

  const handleSingleConsultantData = (card) => {
    setSingleConsulantData(card);
  };
  console.log(singleConsulantData, "singleConsulantData");

  const consultantId =
    scheduledData?.length > 0 && scheduledData[0]?.consultantId?.userId;

  console.log(consultantId, "cosultantid");

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalOpen2(false);
  };

  const handleYes = () => {
    // setYesClicked(true);
    setModalOpen(false);

    const shedulePayload = {
      jobId: jobId,
      consultantId: consultantId,
      scheduledDate: "10-08-2023",
      accessToken,
    };

    // dispatch(addintosheduleRequest(shedulePayload));
  };

  const handleYes2 = () => {
    // setYesClicked(true);
    setModalOpen2(false);

    const shedulePayload = {
      jobId: jobId,
      consultantId: consultantId,
      scheduledDate: "10-08-2023",
      accessToken,
    };

    // dispatch(addintosheduleRequest(shedulePayload));
  };

  const handleNo = () => {
    setModalOpen(false);
  };
  const handleNo2 = () => {
    setModalOpen2(false);
  };

  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  const openSelectConsultantModal = () => {
    setModalOpen(true);
  };

  // const handleScheduleClick = (id) => {
  //   if (!scheduledCard.includes(id)) {
  //     setscheduledCard([...scheduledCard, id]);
  //     const currentDate = new Date().toLocaleDateString("en-US");
  //     const message = `Add to schedule.\n${currentDate} `;
  //     setinvitationClick(message);
  //   }
  // };

  const response = useSelector((state) => state?.getjobReducer?.selectedJob);

  // useEffect(() => {
  //   if (response) {
  //     if (Object?.keys(response).length >= 0) {
  //       setCurrentJob(response);
  //     }
  //   }
  // }, [response]);

  // const handleRemovescheduled = () => {
  //   const updatedscheduledCard = scheduledCard.filter(
  //     (cardId) => cardId !== selectedCard
  //   );
  //   setscheduledCard(updatedscheduledCard);
  //   setinvitationClick(false);
  // };

  console.log(scheduledCard);
  const handleRemovescheduled2 = () => {
    const updatedscheduledCard = scheduledCard.filter(
      (cardId) => cardId !== selectedCard
    );
    setscheduledCard(updatedscheduledCard);
    setModalOpen(true);
    // setinvitationClick(false);
  };

  // const isCardShortlisted = scheduledCard.includes(selectedCard);

  // const renderShortlistButton = () => {
  //   if (isCardShortlisted || invitationClick === "Consultant shortlisted.") {
  //     return (
  //       <>
  //         <button onClick={() => handleRemovescheduled()}>
  //           <img src="/Assets/removeShortlistedButton.svg" alt="remove" />
  //         </button>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <Popoverr text={"Select and add into shortlist"}>
  //         <button
  //           onClick={() => handleShortlistClick(selectedCard)}
  //           className="flex justify-end px-3 py-3"
  //         >
  //           <img src="/Assets/tick.svg" alt="tick" />
  //         </button>
  //       </Popoverr>
  //     );
  //   }
  // };

  return (
    <div className=" grid lg:grid-cols-12 sm:grid-col-span-2 bg-[#2B373C1C] py-5 px-2 sm:px-2">
      <div className="lg:col-start-1 lg:col-end-12  sm:col-span-12">
        <div className="grid lg:grid-cols-12  gap-4 mx-2 sm:mx-6 bg-white border px-4 py-4">
          <div className="flex items-center lg:col-span-12 sm:col-span-12">
            <div>
              <p className="text-[26px] text-[#2B373C] sm:text-2xl font-bold">
                Scheduled Interview
              </p>
            </div>
          </div>
          {/* <div className="lg:col-span-3">
            {invitationClick ? (
              <button className="px-5 py-2 bg-[rgb(231,71,65)] text-[#ffffff] font-bold rounded-lg">
                1 SEND INVITES
              </button>
            ) : (
              <button className="px-5 py-2 bg-[#FEE2E1] text-[#F9342E] font-bold  rounded-lg">
                0 SEND INVITES
              </button>
            )}
          </div> */}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mx-2 sm:mx-6 bg-[#F9F6EE] border px-4 py-4">
          <div className="lg:col-span-4">
            <div className="relative w-full">
              <InputBase
                name="location"
                onChange={handleInputChange}
                onBlur={handleInputBlur}
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
                      // handleChange();
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
          </div>
          <div className="lg:col-span-8 ">
            {/* <div className="flex gap-4 h-full justify-around items-center">
              <p className="text-[16px] text-[#2B373C]">
                {currentJob?.minExp} - {currentJob?.maxExp} yrs experience.
              </p>
              <p className="text-[16px] text-[#2B373C]">
                {currentJob?.jobType}.
              </p>
              <p className="text-[16px] text-[#2B373C]">$10-15 /hr .</p>
              <p className="text-[16px] text-[#2B373C]">
                {currentJob?.createdAt}
              </p>
            </div> */}
            <button
              type="submit"
              className={`flex px-8 py-2 bg-transparent rounded-[16px] gap-4 items-center tracking-wide  mr-1 sm:mr-3 border  ${
                search === ""
                  ? "border-[#A7A7A7] text-[#A7A7A7]"
                  : "border-black text-black"
              }`}
              onClick={clearFilters}
            >
              <img
                src="/Assets/crossIcon.svg"
                alt="Image"
                className="w-4 h-4"
              />
              Clear
            </button>
          </div>
          {/* <div className="lg:col-span-1 sm:col-span-3"></div> */}
        </div>

        <div className=" bg-white mx-2 sm:mx-6 lg-mx-8 border rounded-xl rounded-t-none grid lg:grid-cols-8">
          {/* first section */}
          <div
            className="flex flex-col lg:col-span-3 pt-6 pb-4 lg:py-6 max-h-[640px] overflow-y-scroll lg:max-h-none"
            // className="flex flex-col lg:col-span-2 py-6"
            // style={{ borderRight: "2px solid #D8D8DD" }}
          >
            <div className="flex px-3 mb-4 lg:mb-0">
              <p className=" text-[18px] text-[#2B373C] font-bold">
                Scheduled Consultants
              </p>
              {/* <div className="ml-[25px] text-[#F9342E] font-bold">
                <p>select all</p>
              </div> */}
            </div>
            <div
              className="lg:h-[550px] lg:overflow-auto"
              style={{ scrollbarWidth: "thin" }}
            >
              {scheduledData?.length > 0 ? (
                scheduledData?.map((card, index) => (
                  <Box key={index}>
                    <ConsultantCard
                      key={card?._id}
                      name={card?.consultantId?.fullName}
                      jobTitle={card?.consultantId?.jobRole}
                      experience={card?.consultantId?.totalExperience}
                      // imageSrc={card.imageSrc}
                      selected={card?._id === selectedCard}
                      shortlisted={scheduledCard.includes(card?._id)}
                      onClick={() => {
                        handleCardClick(card?._id);
                        handleSingleConsultantData(card);
                      }}
                      onRemove={() => handleRemoveClick(card?._id)}
                      // showCheckbox={true}
                    >
                      {/* {card.id === selectedCard && (
                        <div className="flex flex-col gap-y-4">
                          {renderShortlistButton()}
                          <Link
                            href="/consultant/[id]"
                            as={`/consultant/${card?._id}`}
                          >
                            <a>View Details</a>
                          </Link>
                        </div>
                      )} */}
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

          <div
            className={`lg:col-span-4 mx-auto lg:mx-0 lg:mt-0 max-h-[719px] w-full sm:w-auto ${
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
                      {singleConsulantData?.consultantId?.fullName}
                    </div>
                    <div className="text-[16px] w-[fit-content] font-medium text-white bg-gray-500 p-1 break-words">
                      {singleConsulantData?.consultantId?.jobRole}
                      <span>- job role</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 my-10">
                      {/* 1 */}
                      <div>
                        <div className="text-[14px] text-white font-bold break-words">
                          Phone:
                        </div>
                        <div className="text-[16px] text-white break-words">
                          {singleConsulantData?.consultantId?.phoneNumber}
                        </div>
                      </div>
                      {/* 2 */}
                      <div>
                        <div className="text-[14px] text-white font-bold break-words">
                          Email
                        </div>
                        <div className="text-[16px] text-white break-words">
                          {singleConsulantData?.consultantId?.email}
                        </div>
                      </div>

                      {/* 3 */}
                      <div>
                        <div className="text-[14px] text-white font-bold break-words">
                          Gender:
                        </div>
                        <div className="text-[16px] text-white break-words">
                          {singleConsulantData?.consultantId?.gender}
                        </div>
                      </div>
                      <div>
                        <div className="text-[14px] text-white font-bold break-words">
                          Loaction:
                        </div>
                        <div className="text-[16px] text-white break-words">
                          {singleConsulantData?.consultantId?.location}
                        </div>
                      </div>
                      {/* 2 */}
                      <div>
                        <div className="text-[14px] text-white font-bold whitespace-nowrap">
                          Year of Experience -{" "}
                          {singleConsulantData?.consultantId?.totalExperience}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start lg:mx-0 bg-gray-200">
                  {/* education and skills */}

                  <div className="flex items-center py-10 pl-4 sm:w-[32%]">
                    <div>
                      <div className="text-[20px] font-bold mb-[10px] break-words">
                        Education
                      </div>
                      {singleConsulantData?.consultantId?.education?.length >
                        0 &&
                        singleConsulantData?.consultantId?.education?.map(
                          (item, index) => {
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
                          }
                        )}

                      {/* skills */}

                      <div className="text-[20px] font-bold mt-8 break-words">
                        Skills
                      </div>
                      {singleConsulantData?.consultantId?.skill?.skillName
                        .length &&
                        singleConsulantData?.consultantId?.skill?.skillName.map(
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

                  <div className="px-3 py-10 sm:w-[68%] bg-stone-300">
                    <div>
                      <div>
                        <h2 className="text-[20px] font-bold mb-[10px] break-words">
                          Experience
                        </h2>
                        {singleConsulantData?.consultantId?.experience
                          ?.length &&
                          singleConsulantData?.consultantId?.experience?.map(
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

                      <div>
                        <h2 className="text-[20px] font-bold mb-[10px] break-words">
                          Projects
                        </h2>
                        {singleConsulantData?.consultantId?.project.length &&
                          singleConsulantData?.consultantId?.project?.map(
                            (item, index) => {
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
                            }
                          )}
                      </div>

                      {/* skills */}
                      <div>
                        {singleConsulantData?.consultantId?.certification
                          .length != 0 && (
                          <div className="text-[20px] font-bold mt-8">
                            Certfication
                          </div>
                        )}

                        {singleConsulantData?.consultantId?.certification?.map(
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {singleConsulantData == null ? (
            <h1></h1>
          ) : (
            <div
              // className=" flex flex-col  lg:justify-normal sm:justify-center py-6 px-3 lg:col-span-1 border-l lg:ml-12 sm:ml-0"
              className="flex lg:flex-col lg:items-center sm:flex-row  py-6 px-3 lg:col-span-1 lg:ml-0 relative mx-auto"
              style={{ width: "auto" }}
            >
              <div className="flex items-center justify-center mt-2">
                <div className="mt-2 px-4 py-2 bg-[#EAE9EA] text-[#131523] border rounded border-gray-300 shadow w-[150px] lg:ml-[-50px] sm:ml-[0px]">
                  <div className="px-1 py-2">
                    <p className="font-bold ">{"Consultant Shotlisted"}</p>
                    <p> {new Date().toLocaleDateString("en-US")}</p>
                  </div>
                  <div className="px-1 py-2">
                    <p className="font-bold">{"Consultant Scheduled"}</p>
                    <p> {new Date().toLocaleDateString("en-US")}</p>
                  </div>
                </div>
              </div>
              {/* {invitationClick ? (
                <>
                  <Popoverr text={"Remove from Invite list"}>
                    <button
                      onClick={handleRemovescheduled}
                      className="flex justify-end px-3 py-3"
                    >
                      <img
                        src="/Assets/removeShortlistedButton.svg"
                        alt="tick"
                      />
                    </button>
                  </Popoverr>
                </>
              ) : (
                <>
                  <Popoverr text={"Add to Invite list"}>
                    <button
                      onClick={() => handleScheduleClick(selectedCard)}
                      className="flex justify-end px-3 py-3"
                    >
                      <img src="/Assets/addInvite.svg" alt="tick" />
                    </button>
                  </Popoverr>
                </>
              )} */}

              <Popoverr text={"Remove from Schedule"}>
                <button
                  onClick={handleRemovescheduled2}
                  className="flex justify-end px-3 py-3"
                >
                  <img src="/Assets/crossBtn.svg" alt="tick" />
                </button>
              </Popoverr>
              <ConfirmationModal
                text={"Do you want to Remove from scheduled?"}
                isOpen={modalOpen2}
                onClose={handleCloseModal}
                onYes={handleYes2}
                onNo={handleNo2}
              />
              <hr />
              <Popoverr text={"Select Consultant"}>
                <button
                  onClick={openSelectConsultantModal}
                  className="flex justify-end px-3 py-3"
                >
                  <img src="/Assets/tick.svg" alt="tick" />
                </button>
              </Popoverr>

              <Popoverr text={"Send mail invite for interview"}>
                <button className="flex justify-end px-3 py-3">
                  <img src="/Assets/mailBtn.svg" alt="tick" />
                </button>
              </Popoverr>
              <Popoverr text={"Chat with consultant"}>
                <button className="flex justify-end px-3 py-3">
                  <img src="/Assets/chat.svg" alt="tick" />
                </button>
              </Popoverr>
              {/* <Popoverr text={"Send E-mail"}>
                <button className="flex justify-end px-3 py-3">
                  <img src="/Assets/mail2.svg" alt="tick" />
                </button>
              </Popoverr> */}
              <ConfirmationModal
                text={"Are you sure selecting, Olivia Wilson?"}
                isOpen={modalOpen}
                onClose={handleCloseModal}
                onYes={handleYes}
                onNo={handleNo}
              />
            </div>
          )}
        </div>
      </div>

      <div className=" lg:col-start-12 lg:col-end-12 sm:col-start-1 sm:col-end-12"></div>
    </div>
  );
};

export default withEmployerAuth(ScheduleInterview);
