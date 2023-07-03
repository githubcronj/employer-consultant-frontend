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
import { Box } from "@mui/material";
import { removeAppliedConsultantRequest } from "store/action/fetchAppliedConsultantAction";
import {
  addintoshortlistRequest,
  rejectshortlistconsultantRequest,
} from "store/action/shortlistAction";

const AppliedConsultant = () => {
  const router = useRouter();
  const id = router.query;
  console.log(id, "roterid");

  const [selectedCard, setSelectedCard] = useState(null);
  const [shortlistedCards, setShortlistedCards] = useState([]);
  const [shortlistMessage, setShortlistMessage] = useState("");
  const [search, setsearch] = useState("");
const [currentJob , setCurrentJob] = useState()
  const dispatch = useDispatch();

  const backClicked = () => {
    router.push("/");
  };
  
  

  const response = useSelector(
    (state) => state?.getjobReducer?.selectedJob
  );
  console.log(response ,"sweta")

  
  useEffect(() => {
    if(response){
      if(Object?.keys(response).length>=0){
        setCurrentJob(response)
      }
    }

  },[response])



  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");

      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };

  const accessToken = getToken();

  const onSearch = (e) => {
    setsearch(e.target.value);

    dispatch({
      type: FETCH_APPLIED_CONSULTANT_REQUEST,
      payload: id,
      accessToken,
      search: e.target.value,
    });
  };
  useEffect(() => {
    dispatch({
      type: FETCH_APPLIED_CONSULTANT_REQUEST,
      payload: id,
      accessToken,
      search,
    });
  }, [id]);

  const appliedjobData = useSelector(
    (state) =>
      state.fetchappliedConsultantReducer.fetchappliedconsultantData.payload
        ?.data?.appliedConsultant
  );

  console.log(appliedjobData, "applied consultant");

  const consultantId = appliedjobData?.length > 0 && appliedjobData[0]?._id;
 const totalResult = appliedjobData?.length > 0 && appliedjobData[0]?.length;
 console.log(totalResult , "total result")
  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  const nextclick = (id) => {
    console.log(id);
    if (typeof window !== "undefined") {
      localStorage.setItem("jobId", id);
    }
    router.push(`/viewjobpost/${id?.id}`);
  };

  const handleShortlistClick = () => {
    if (!shortlistedCards.includes(id)) {
      setShortlistedCards([...shortlistedCards, id]);
      const currentDate = new Date().toLocaleDateString("en-US");
      const message = `Shortlisted.\n${currentDate}`;
      setShortlistMessage(message);
    }
    console.log(id.id, "jobid for shortlisted ");
    const shortlistPayload = {
      jobId: id.id,
      consultantId: consultantId,
      accessToken,
    };

    if (id.id && consultantId) {
      console.log(id.id, consultantId),
        dispatch(addintoshortlistRequest(shortlistPayload));
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
      jobId: id.id,
      consultantId: consultantId,
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

  return (
    <div className=" grid lg:grid-cols-12 sm:grid-col-span-2 bg-[#2B373C1C] py-5 px-2 sm:px-2">
      <div className="lg:col-start-1 lg:col-end-12  sm:col-span-3">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mx-2 sm:mx-6 bg-white border px-4 py-4">
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
              <p className="text-[26px] text-[#2B373C] sm:text-2xl font-bold">
              {currentJob ? currentJob?.jobTitle : "NA"}
              </p>
              <p className="text-[14px] text-[#2B373C]">{currentJob ? currentJob?.minExp : "NA" }-{currentJob ? currentJob?.maxExp : "NA"} years experience</p>
            </div>
          </div>
          <div className="flex items-center gap-x-4 lg:col-span-1 sm:col-span-2">
            <p className="text-[16px] text-[#2B373C]">              { currentJob ? currentJob?.jobType : "NA"
} .</p>
            <p className="text-[16px] text-[#2B373C]">$10-15 /hr .</p>
            <p className="text-[16px] text-[#2B373C]">{currentJob ? currentJob?.createdAt : "NA"}</p>
          </div>

          <div
            onClick={() => nextclick(id)}
            className="flex items-center  lg:justify-end gap-x-4 lg:col-span-1 sm:col-span-2"
          >
            <p className="text-[16px] text-[#5E9AF8] font-bold">
              View Job Post
            </p>
            <img src="/Assets/forwardArr.svg" alt="frw-ar" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 sm:mx-6 bg-[#F9F6EE] border px-4 py-4">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="relative w-full">
              <input
                onChange={onSearch}
                value={search}
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
            </div>
          </div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="lg:col-span-1 sm:col-span-3">
                <select
                  id="experience1"
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
                    ...(errors.experience ? { borderColor: "red" } : {}),
                  }}
                >
                  <option value="">Education Level</option>
                  <option value="one">1 year</option>
                  <option value="two">2 years</option>
                  <option value="three">3 years</option>
                </select>
              </div>
              <div className="lg:col-span-1 sm:col-span-3">
                <select
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
                    ...(errors.experience ? { borderColor: "red" } : {}),
                  }}
                >
                  <option value="">Applied Date</option>
                  <option value="one">1 year</option>
                  <option value="two">2 years</option>
                  <option value="three">3 years</option>
                </select>
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
                    ...(errors.experience ? { borderColor: "red" } : {}),
                  }}
                >
                  <option value="">Location</option>
                  <option value="one">1 year</option>
                  <option value="two">2 years</option>
                  <option value="three">3 years</option>
                </select>
              </div>
              <div className="lg:col-span-1 sm:col-span-3">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-2 bg-transparent text-[#A7A7A7] border border-[#A7A7A7] rounded-[16px] inline-flex gap-4 items-center tracking-wide  mr-1 sm:mr-3"
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

        <div className=" bg-white    mx-2 sm:mx-6 lg-mx-8 border rounded-xl grid lg:grid-cols-6">
          {/* first section */}
          <div
            className="flex flex-col lg:col-span-2 py-6"
            style={{ borderRight: "2px solid #D8D8DD" }}
          >
            <div className="flex px-3">
              <p className=" text-[26px] text-[#2B373C] sm:text-2xl font-bold">
               { currentJob ? currentJob?.appliedConsultantCount : "NA"} Consultant
              </p>
              <div className="bg-[#5E9AF8] ml-2 px-2 py-1 border rounded text-[#ffffff]">
                {shortlistedCount}
              </div>
            </div>
            <div
              className="h-[550px] overflow-auto"
              style={{ scrollbarWidth: "thin" }}
            >
              {appliedjobData?.length > 0 ? (
                appliedjobData?.map((card, index) => (
                  <Box key={index}>
                    <ConsultantCard
                      key={card?._id}
                      name={card?.fullName}
                      jobTitle={card?.jobRole}
                      experience={card?.totalExperience}
                      // imageSrc={card.imageSrc}
                      selected={card?._id === selectedCard}
                      shortlisted={shortlistedCards.includes(card?._id)}
                      onClick={() => handleCardClick(card?._id)}
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

            <div></div>
          </div>
          {/* section 2 */}
          <div className="lg:col-span-3">
            <div className="grid lg:grid-cols-12">
              <div className="border-l lg:col-start-1 lg:col-end-12">
                <img src="/Assets/resumeTemplate.png" alt="cameraIcon" />
              </div>
              <div className="border-l lg:col-start-12 lg:col-end-12 flex justify-end items-end ">
                <img src="/Assets/downloadbtn.svg" alt="cameraIcon" />
              </div>
            </div>
          </div>
          <div
            className=" flex lg:flex-col sm:flex-row  py-6 px-3 lg:col-span-1 border-l lg:ml-12 sm:ml-0"
            style={{ width: "fit-content" }}
          >
            {shortlistMessage ? (
              <>
                <div className="flex items-center justify-center mt-2">
                  <p className="mt-2 px-4 py-2 bg-[#EAE9EA] text-[#131523] border rounded border-gray-300 shadow w-[150px] ml-[-50px]">
                    {shortlistMessage}
                  </p>
                </div>
                <Popoverr text={"Remove from Shortlist"}>
                  <button
                    onClick={handleRemoveShortlisted}
                    className="flex justify-end px-3 py-3"
                  >
                    <img src="/Assets/removeShortlistedButton.svg" alt="tick" />
                  </button>
                </Popoverr>
              </>
            ) : (
              <>
                <Popoverr text={"Select and add into shortlist"}>
                  <button
                    onClick={() => handleShortlistClick(selectedCard)}
                    className="flex justify-end px-3 py-3"
                  >
                    <img src="/Assets/tick.svg" alt="tick" />
                  </button>
                </Popoverr>
                <Popoverr text={"Reject the consultant"}>
                  <button
                    onClick={handleRemoveappliedConsultent}
                    className="flex justify-end px-3 py-3"
                  >
                    <img src="/Assets/crossBtn.svg" alt="tick" />
                  </button>
                </Popoverr>
              </>
            )}

            <hr />
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
            <Popoverr text={"Send E-mail"}>
              <button className="flex justify-end px-3 py-3">
                <img src="/Assets/mail2.svg" alt="tick" />
              </button>
            </Popoverr>
          </div>
        </div>
      </div>

      <div className=" lg:col-start-12 lg:col-end-12 sm:col-start-1 sm:col-end-12">
        <div className="">
          <div className="flex items-center justify-center">
            <button className="flex justify-center items-center font-bold text-16px m-2">
              <span className="mr-2">
                <img src="/Assets/editIcon.svg" alt="Delete Icon" />
              </span>
              Edit
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button className="flex justify-center items-center font-bold text-16px m-2">
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
