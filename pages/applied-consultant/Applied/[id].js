import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Popoverr from "Components/PopOver/index";
import { cardData } from "../../../Components/Cards/ConsultantsCard";
import ConsultantCard from "Components/Cards/ConsultantsCard";
import Link from "next/link";
import withEmployerAuth from "Components/ProtectedRoute/withEmployerAuth";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_APPLIED_CONSULTANT_REQUEST,
  FETCH_APPLIED_CONSULTANT_SUCCESS,
  REMOVE_APPLIED_CONSULTANT_REQUEST,
} from "store/type/fetchAppliedConsultantType";
import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  InputBase,
} from "@mui/material";
import {
  fetchAppliedConsultantRequest,
  removeAppliedConsultantRequest,
} from "store/action/fetchAppliedConsultantAction";
import {
  addintoshortlistRequest,
  rejectshortlistconsultantRequest,
} from "store/action/shortlistAction";
import moment from "moment";
import downloadIcon from "public/Assets/downloadIcon.svg";
import DeletePopUP from "Components/Delete/deletePopUp";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import styles from "styles/LoginPage.module.css";
import { ADD_SHORTLIST_REQUEST } from "store/type/shortlistType";
import { addDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import UserChat from "Components/ChatComponent/UserChat";
import socketIo from "socket.io-client";
import { emailInviteAction } from "store/action/emailInviteAction";
import UserChatEmployer from "Components/ChatComponent/UserChatEmpoyer";

let socket;
const ENDPOINT = "ws://localhost:3001";

const AppliedConsultant = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [selectedCard, setSelectedCard] = useState(null);
  const [shortlistedCards, setShortlistedCards] = useState([]);
  const [shortlistMessage, setShortlistMessage] = useState("");
  const [search, setsearch] = useState("");
  const [currentJob, setCurrentJob] = useState();
  const [responseData, setResponseData] = useState(false);
  const [singleConsulantData, setSingleConsulantData] = useState(null);
  const [popup, setPopup] = useState(false);
  const [employerJobId, setEmployerJobId] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [dateFlag, setDateFlag] = useState(false);
  const [datePicker, setDatePicker] = useState({
    selection: {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
    compare: {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "compare",
    },
  });

  const handleClickDate = (event) => {
    const selectedDateValue = event.target.value;
  };

  useEffect(() => {
    setEmployerJobId(router?.query);
  }, [router?.query]);

  const editClick = () => {
    router.push({
      pathname: `/editJobPost/${id}`,
      // query: { state: encodedState },
    });
  };

  // download to pdf when clicked
  // convertToPDF = () => {
  //   const pdf = new jsPDF("p", "mm", "a4");

  //   // Replace 'templateOneContent' with the ID of the div containing the content you want to convert.
  //   const element = document.getElementById("templateOneContent");

  //   const options = {
  //     margin: {
  //       top: 10,
  //       bottom: 10,
  //       left: 15,
  //       right: 15,
  //     },
  //   };

  //   // Manually add the content to the PDF using jsPDF methods
  //   pdf.text("Hello, this will be converted to PDF", options.left, options.top);
  //   pdf.text("Put your HTML content here.", options.left, options.top + 10);

  //   // Example of using jspdf-autotable to add a table to the PDF
  //   const tableData = [
  //     ["Header 1", "Header 2"],
  //     ["Row 1", "Row 1 Data"],
  //     ["Row 2", "Row 2 Data"],
  //   ];
  //   pdf.autoTable({
  //     startY: pdf.autoTableEndPosY() + 10,
  //     head: tableData.slice(0, 1),
  //     body: tableData.slice(1),
  //   });

  //   pdf.save("resume.pdf");
  // };

  const deleteClicked = () => {
    setPopup(true);
  };

  const backClicked = () => {
    router.push("/");
  };

  const response = useSelector((state) => state?.getjobReducer?.selectedJob);

  useEffect(() => {
    if (response) {
      if (Object?.keys(response).length >= 0) {
        setCurrentJob(response);
      }
    }
  }, [response]);

  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };

  const accessToken = getToken();

  const onSearch = (e) => {
    // dispatch({
    //   type: FETCH_APPLIED_CONSULTANT_REQUEST,
    //   payload: { id: id?.id, search: search },
    //   accessToken,
    // });
    const payload = { id: employerJobId, search: search };
    dispatch(fetchAppliedConsultantRequest(payload, accessToken));
  };

  console.log(search, "on search");

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  // const handleChange = debounce(onSearch, 1000);
  const handleChange = () => {
    const payload = { id: employerJobId, search: search };
    dispatch(fetchAppliedConsultantRequest(payload, accessToken));
  };

  const clearFilters = () => {
    setsearch("");
    setSelectedLocation("");
    const payload = { id: employerJobId };
    dispatch(fetchAppliedConsultantRequest(payload, accessToken));
  };

  useEffect(() => {
    console.log("inside useEffect", employerJobId);
    if (employerJobId && Object.keys(employerJobId).length > 0) {
      const payload = { id: employerJobId };
      dispatch(fetchAppliedConsultantRequest(payload, accessToken));
    }
  }, [employerJobId, accessToken]);

  const handleClickLocation = (event) => {
    const selectedValue = event.target.value;
    setSelectedLocation(selectedValue);
    console.log(selectedValue);
    const payload = { id: employerJobId, location: selectedValue };
    dispatch(fetchAppliedConsultantRequest(payload, accessToken));
  };

  const appliedjobData = useSelector(
    (state) =>
      state.fetchappliedConsultantReducer.fetchappliedconsultantData.payload
  );
  const isfetchappliedconsultantData = useSelector(
    (state) => state.fetchappliedConsultantReducer.isfetchappliedconsultantData
  );
  useEffect(() => {
    setResponseData(isfetchappliedconsultantData);
  }, [isfetchappliedconsultantData]);

  const consultantId = appliedjobData?.length > 0 && appliedjobData[0]?._id;

  const handleSingleConsultantData = (card) => {
    setSingleConsulantData(card);
  };

  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  const nextclick = (id) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("jobId", id);
    }
    router.push(`/viewjobpost/${id}`);
  };

  console.log(singleConsulantData, "singleConsulantData");

  const handleShortlistClick = () => {
    if (!shortlistedCards.includes(id)) {
      setShortlistedCards([...shortlistedCards, id]);
      const currentDate = new Date().toLocaleDateString("en-US");
      const message = `Shortlisted.\n${currentDate}`;
      setShortlistMessage(message);
    }
    const shortlistPayload = {
      jobId: employerJobId.id,
      consultantId: singleConsulantData?.consultantId?.userId,
      accessToken,
    };

    if (
      singleConsulantData?.consultantId?._id &&
      singleConsulantData?.consultantId?.userId
    ) {
      // dispatch({ type: ADD_SHORTLIST_REQUEST, shortlistPayload });
      dispatch(addintoshortlistRequest(shortlistPayload));

      const payload = { id: employerJobId };
      dispatch(fetchAppliedConsultantRequest(payload, accessToken));
    }
  };

  const shortlistedCount = shortlistedCards.length;

  const handleRemoveappliedConsultent = () => {
    const updatedShortlistedCards = shortlistedCards.filter(
      (cardId) => cardId !== selectedCard
    );
    setShortlistedCards(updatedShortlistedCards);
    setShortlistMessage(false);

    const rejectPayload = {
      jobId: employerJobId.id,
      consultantId: singleConsulantData._id,
      accessToken,
    };

    dispatch(removeAppliedConsultantRequest(rejectPayload));
  };
  const handleRemoveShortlisted = () => {
    const updatedShortlistedCards = shortlistedCards.filter(
      (cardId) => cardId !== selectedCard
    );
    setShortlistedCards(updatedShortlistedCards);
    setShortlistMessage(false);
    const rejectPayload = {
      jobId: id.id,
      consultantId: consultantId,
      accessToken,
    };

    dispatch(rejectshortlistconsultantRequest(rejectPayload));
  };

  const [errors, setErrors] = useState({});

  const isCardShortlisted = shortlistedCards.includes(selectedCard);

  const renderShortlistButton = () => {
    if (isCardShortlisted || shortlistMessage === "Consultant shortlisted.") {
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
            className="flex justify-end px-3 py-3"
          >
            <img src="/Assets/tick.svg" alt="tick" />
          </button>
        </Popoverr>
      );
    }
  };

  const sendEmailInvite = () => {
    const payload = {
      to: "navneet@cronj.com",
      // to: singleConsulantData?.consultantId?.email,
      subject: "denis Invite",
      content: `<!DOCTYPE html>
        <html>
        <head>
        <title>Shortlisted for Interview</title>
        </head>
        <body>
         <h1>Congratulations! You have been shortlisted for an interview!</h1>
         <p>Dear ${singleConsulantData?.consultantId?.email},</p>
         <p>Congratulations! We are pleased to inform you that you have been shortlisted for an interview for the position of [Job Title] at our company.</p>
         <p>The interview details are as follows:</p>
         <ul>
          <li>Date: [Interview Date]</li>
          <li>Time: [Interview Time]</li>
          <li>Location: [Interview Location]</li>
         </ul>
         <p>Please arrive at the interview location on time and bring a copy of your resume and any other relevant documents.</p>
         <p>We are looking forward to meeting you and discussing your qualifications and experience further.</p>
         <p>If you have any questions or need further information, please feel free to contact us at [Contact Email] or [Contact Phone Number].</p>
         <p>Best regards,</p>
         <p>Navneet</p>
        </body>
        </html>`,
    };

    dispatch(emailInviteAction(payload));
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleClick2 = () => {
    setIsOpen(!isOpen);
  };
  const handleChatClose = () => {
    // Handle the chat closing logic here
    console.log("Chat closed!");
    setIsOpen(false);
  };
  const employerUserProfileData = useSelector(
    (state) => state.getProfileReducer?.CurrentUser
  );
  const consultantUserId = singleConsulantData?.consultantId?.userId;
  const employerUserId = employerUserProfileData?.userId;

  return (
    <div className=" grid lg:grid-cols-12 sm:grid-col-span-2 bg-[#2B373C1C] py-5 px-2 sm:px-2">
      {popup && <DeletePopUP id={id} setPopup={setPopup} />}
      <div className="sm:col-start-1 sm:col-end-12  sm:col-span-3">
        <div className="grid lg:flex lg:flex-row lg:justify-between sm:grid-cols-2 gap-4 mx-2 sm:mx-6 bg-white border px-4 py-4">
          <div className="flex items-center gap-x-4 lg:col-span-1 sm:col-span-2">
            <Image
              onClick={backClicked}
              src="/Assets/backbtn.svg"
              alt="back button"
              width={46}
              height={46}
              className="cursor-pointer"
            />
            <div>
              <p className="text-[16px] text-[#2B373C] sm:text-[25px] lg:text-[20px] xl:text-2xl font-bold">
                {appliedjobData?.data?.jobTitle !== ""
                  ? appliedjobData?.data?.jobTitle
                  : "NA"}
              </p>
              <p className="text-[10px] sm:text-[18px] lg:text-[12px] xl:text-[14px] text-[#2B373C]">
                {appliedjobData?.data?.minExp
                  ? appliedjobData?.data?.minExp
                  : "NA"}
                -
                {appliedjobData?.data?.maxExp
                  ? appliedjobData?.data?.maxExp
                  : "NA "}
                years experience
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-4 lg:col-span-1 sm:col-span-2">
            <p className="text-[15px] sm:text-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[#2B373C] ">
              {" "}
              {appliedjobData?.data?.jobType
                ? appliedjobData?.data?.jobType
                : "NA"}{" "}
              {/* . */}
            </p>
            <span className="dot hidden sm:inline-block "></span>
            <p className="text-[15px] sm:text-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[#2B373C]">
              {appliedjobData?.data?.minSalary
                ? appliedjobData?.data?.minSalary
                : "NA"}
              -
              {appliedjobData?.data?.maxSalary
                ? appliedjobData?.data?.maxSalary
                : "NA"}{" "}
              /hr
            </p>
            <span className="dot hidden sm:inline-block "></span>
            <p className="text-[15px] sm:text-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[#2B373C]">
              {appliedjobData?.data?.deadline
                ? moment(appliedjobData?.data?.deadline)
                    .utc()
                    .format("YYYY-MM-DD")
                : "NA"}
            </p>
          </div>

          <div
            onClick={() => nextclick(id)}
            className="flex items-center  lg:justify-end gap-x-4 lg:col-span-1 sm:col-span-2"
          >
            <p className="text-[15px] sm:text-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[#5E9AF8] font-bold cursor-pointer">
              View Job Post
            </p>
            <img
              src="/Assets/forwardArr.svg"
              alt="frw-ar"
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 sm:mx-6 bg-[#F9F6EE] border px-4 py-4">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            {/* <div className="relative w-full">
              <input
                onChange={(e) => {
                  setsearch(e.target.value), handleChange();
                }}
                value={search}
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
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="lg:col-span-1 sm:col-span-3">
                <div
                  id="experience2"
                  required
                  className="py-2 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select"
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                    backgroundImage: "none",
                    backgroundImage: "url(/Assets/down-arrow.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "95% center",
                    paddingRight: "20px",
                    cursor: "pointer",
                    backgroundColor: "white",
                    whiteSpace: "nowrap",
                    ...(errors.experience ? { borderColor: "red" } : {}),
                  }}
                  onClick={() => setDateFlag(!dateFlag)}
                >
                  Applied Date
                </div>
                <div style={{ zIndex: "20", position: "relative" }}>
                  {dateFlag ? (
                    <DateRangePicker
                      onChange={(item) =>
                        setDatePicker({ ...datePicker, ...item })
                      }
                      months={1}
                      minDate={addDays(new Date(), -300)}
                      maxDate={addDays(new Date(), 900)}
                      // direction="vertical"
                      // scroll={{ enabled: true }}
                      ranges={[datePicker.selection, datePicker.compare]}
                      // editableDateInputs={true}
                      // onChange={(item) => setDatePicker([item.selection])}
                      // moveRangeOnFirstSelection={false}
                      // ranges={datePicker}
                    />
                  ) : null}
                </div>
              </div>
              <div className="lg:col-span-1 sm:col-span-3">
                <select
                  id="experience3"
                  required
                  className="py-2 px-4 border rounded-[10px] border-[#D8D8DD] w-full custom-select"
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                    backgroundImage: "none",
                    backgroundImage: "url(/Assets/down-arrow.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "95% center",
                    paddingRight: "20px",
                    cursor: "pointer",
                    ...(errors.experience ? { borderColor: "red" } : {}),
                  }}
                  onChange={handleClickLocation}
                  value={selectedLocation}
                >
                  <option value="" onClick={() => handleClickLocation("")}>
                    Location
                  </option>
                  <option value="bangalore">Bangalore</option>
                  <option value="pune">Pune</option>
                  <option value="new york">New York</option>
                </select>
              </div>
              <div className="lg:col-span-1 sm:col-span-3">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-2 bg-transparent text-[#A7A7A7] border border-[#A7A7A7] rounded-[16px] inline-flex gap-4 items-center tracking-wide  mr-1 sm:mr-3"
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
            </div>
          </div>
        </div>

        <div className=" bg-white mx-2 sm:mx-6 lg-mx-0 border rounded-xl rounded-t-none grid lg:grid-cols-8">
          {/* first section */}
          <div
            className="flex flex-col lg:col-span-3 pt-6 pb-4 lg:py-6 max-h-[640px] overflow-y-scroll lg:max-h-none"
            // style={{ borderRight: "2px solid #D8D8DD" }}
          >
            <div className="flex px-3 mb-4 lg:mb-0">
              <p className=" text-[26px] text-[#2B373C] sm:text-2xl font-bold">
                {appliedjobData?.data?.appliedConsultant?.length
                  ? appliedjobData?.data?.appliedConsultant?.length
                  : "NA"}
                <span className="ml-[3px]">Consultant</span>
              </p>
              <div className="bg-[#5E9AF8] ml-2 px-2 py-1 border rounded text-[#ffffff]">
                {shortlistedCount}
              </div>
            </div>
            <div
              className="lg:h-[550px] lg:overflow-auto"
              style={{ scrollbarWidth: "thin" }}
            >
              {appliedjobData?.data?.appliedConsultant?.length > 0 ? (
                appliedjobData?.data?.appliedConsultant?.map((card, index) => (
                  <Box key={index}>
                    <ConsultantCard
                      key={card?._id}
                      name={card?.consultantId?.fullName}
                      jobTitle={card?.consultantId?.jobRole}
                      experience={card?.consultantId?.totalExperience}
                      imageSrc={card?.consultantId?.imageSrc}
                      selected={card?._id === selectedCard}
                      shortlisted={shortlistedCards.includes(card?._id)}
                      onClick={() => {
                        handleCardClick(card?._id);
                        handleSingleConsultantData(card);
                      }}
                      onRemove={() => handleRemoveClick(card?._id)}
                    >
                      {card?.id === selectedCard && (
                        <div className="flex flex-col gap-y-4">
                          {renderShortlistButton()}
                          <Link
                            href="/consultant/[id]"
                            as={`/consultant/${card?._id}`}
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
          </div>
          {/* section 2 */}
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
                        <div className="text-[14px] text-white font-bold break-words">
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
                        singleConsulantData?.consultantId?.education.map(
                          (item, index) => {
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
                                  {/* 1 */}
                                  <div className="sm:col-span-2">
                                    <div className="text-[15px] break-words">
                                      {moment(item?.joinedDate)
                                        .utc()
                                        .format("YYYY-MM-DD")}
                                      {/* <span> to </span> */}
                                      {/* {presentDateCheck
                                    ? "Present"
                                    : item?.endDate?.split("-")[0]} */}
                                      {/* {moment(item?.endDate)
                    .utc()
                    .format("YYYY-MM-DD")} */}
                                      {/* 2020 to 2021 */}
                                    </div>
                                    <div className="text-[15px] font-bold break-words">
                                      {item.companyName}
                                    </div>
                                  </div>
                                  {/* 2 */}
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
                        {singleConsulantData?.consultantId?.project?.length &&
                          singleConsulantData?.consultantId?.project?.map(
                            (item, index) => {
                              return (
                                <div
                                  className="grid sm:grid-cols-5 gap-2 my-2"
                                  key={index}
                                >
                                  {/* 1 */}
                                  <div className="sm:col-span-2">
                                    <div className="text-[15px] break-words">
                                      {moment(item?.startDate)
                                        .utc()
                                        .format("YYYY-MM-DD")}
                                      <span> to </span>
                                      {moment(item?.endDate)
                                        .utc()
                                        .format("YYYY-MM-DD")}
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
                            }
                          )}
                      </div>

                      {/* skills */}
                      <div>
                        {singleConsulantData?.consultantId?.certification
                          ?.length != 0 && (
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

                        {/* end */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="fab-container">
                  <div className="fab">
                    <img src={downloadIcon.src} alt="" />
                  </div>
                </div> */}
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
              {isOpen && (
                <div className="absolute right-[2.8rem] top-[8.5rem] z-40 ">
                  <UserChatEmployer
                    handleChatClose={handleChatClose}
                    consultantUserId={consultantUserId}
                    employerUserId={employerUserId}
                  />
                </div>
              )}
              {shortlistMessage ? (
                <>
                  <div className="flex items-center justify-center sm:mt-2 relative ">
                    <p className="mt-2 px-4 py-2 bg-[#EAE9EA] text-[#131523] border rounded border-gray-300 shadow w-[150px] ml-[-50px] absolute left-[3rem] bottom-[4rem] sm:left-auto sm:bottom-auto sm:relative ">
                      {shortlistMessage}
                    </p>
                  </div>
                  <Popoverr text={"Remove from Shortlist"}>
                    <button
                      onClick={handleRemoveShortlisted}
                      className="flex justify-end sm:px-3 sm:py-3 mr-2 sm:mr-0"
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
                  <Popoverr text={"Select and add into shortlist"}>
                    <button
                      onClick={() => handleShortlistClick(singleConsulantData)}
                      className="flex justify-end sm:px-3 sm:py-3 mr-2 sm:mr-0"
                    >
                      <img src="/Assets/tick.svg" alt="tick" />
                    </button>
                  </Popoverr>
                  <Popoverr text={"Reject the consultant"}>
                    <button
                      onClick={handleRemoveappliedConsultent}
                      className="flex justify-end sm:px-3 sm:py-3 mr-2 sm:mr-0"
                    >
                      <img src="/Assets/crossBtn.svg" alt="tick" />
                    </button>
                  </Popoverr>
                </>
              )}

              <hr />
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
                  <img
                    src="/Assets/chat.svg"
                    alt="tick"
                    onClick={handleClick2}
                  />
                </button>
              </Popoverr>
              <Popoverr text={"Send E-mail"}>
                <button className="flex justify-end sm:px-3 sm:py-3 mr-2 sm:mr-0">
                  <img src="/Assets/mail2.svg" alt="tick" />
                </button>
              </Popoverr>
              <Popoverr text={"Download resume"}>
                <button
                  className="flex justify-end sm:px-3 sm:py-3"
                  // onClick={convertToPDF}
                >
                  <img src={downloadIcon.src} alt="download" />
                </button>
              </Popoverr>
            </div>
          )}
        </div>
      </div>

      <div className=" lg:col-start-12 lg:col-end-12 sm:col-start-12 sm:col-end-12">
        <div className="">
          <div className="flex items-center justify-center">
            <button
              className="flex justify-center items-center font-bold text-16px m-2"
              onClick={editClick}
            >
              <span className="mr-2">
                <img src="/Assets/editIcon.svg" alt="Delete Icon" />
              </span>
              Edit
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="flex justify-center items-center font-bold text-16px m-2"
              onClick={deleteClicked}
            >
              <span className="mr-2">
                <img src="/Assets/deleteIcon.svg" alt="Delete Icon" />
              </span>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withEmployerAuth(AppliedConsultant);
