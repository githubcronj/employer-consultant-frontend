import React, { useEffect } from "react";
import { useState } from "react";
import google from "../../public/Assets/googleIcon.png";
import experienceicon from "../../public/Assets/suitcase.svg";
import building from "../../public/Assets/building.svg";
import call from "../../public/Assets/call.svg";
import laptop from "../../public/Assets/laptop.svg";
import location from "../../public/Assets/location.svg";
import mail from "../../public/Assets/mail.svg";
import money from "../../public/Assets/money.svg";
import scheduler from "../../public/Assets/scheduler.svg";
import chaticon from "../../public/Assets/chaticon.svg";
import bookmark from "../../public/Assets/bookmark.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  APPLY_JOB_SUCCESS,
  CANCEL_JOB_SUCCESS,
  SAVE_JOB_SUCCESS,
} from "store/type/applyJobType";

const MainSearch = ({ finaldata, appliedJobData }) => {
  const [flexing, setFlexing] = useState(false);
  const [showApply, setShowApply] = useState(true);

  const dispatch = useDispatch();
  const getToken = () => {
    if (typeof window !== "undefined" && localStorage.getItem("CurrentUser")) {
      const storedData = localStorage.getItem("CurrentUser");
      const tokenset = JSON.parse(storedData);
      return tokenset?.token?.accessToken;
    }
  };
  const finaltoken = getToken();

  const handleApply = () => {
    const payload = { jobId: finaldata[0]?._id, finaltoken };
    dispatch({ type: APPLY_JOB_SUCCESS, payload });
    setShowApply(false);
  };

  useEffect(() => {
    console.log("datata", finaldata);
    const isJobApplied = appliedJobData.some(
      (job) => job._id === finaldata[0]?._id
    );

    if (isJobApplied) {
      setShowApply(false);
    } else {
      setShowApply(true);
    }
  }, [appliedJobData, finaldata]);

  // const handleApply = () => {
  //   const payload = { jobId: finaldata[0]?._id, finaltoken };
  //   dispatch({ type: APPLY_JOB_SUCCESS, payload });
  //   setShowApply(isJobApplied => !isJobApplied);

  // };

  const handleCancel = () => {
    const payload = { jobId: finaldata[0]?._id, finaltoken };
    dispatch({ type: CANCEL_JOB_SUCCESS, payload });

    setShowApply(true);
  };

  const saveData = () => {
    const payload = { jobId: finaldata[0]?._id, finaltoken };
    dispatch({ type: SAVE_JOB_SUCCESS, payload });
  };

  return (
    <div className="bg-white w-auto p-5" style={{ borderRadius: "5px" }}>
      <div className="mt-[19px] mx-3  sm:col-span-2">
        <div className="lg:col-span-6 sm:col-span-1 ">
          <div className="flex justify-between">
            <div
              className={`flex items-center mb-[15px] ${
                flexing ? "flex-col" : "flex-row"
              }`}
            >
              <img
                src={finaldata[0]?.logo}
                alt="googleIcon"
                className="w-[63px] h-[63px] "
              />
              <div>
                <p className="text-2xl font-extrabold  xl:pl-[17px] lg:pl-[17px] sm:pl-[17px] md:pl-[17px] pl-[5px]  h-[19px] mb-[15px] mt-[15px] text-[#000000] text-left font-sans">
                  {finaldata[0]?.jobTitle ? finaldata[0]?.jobTitle : "NA"}
                </p>

                <div className="flex items-center justify-between align-baseline">
                  <p className="w-[54px] mr-6 xl:pl-[17px] lg:pl-[17px] sm:pl-[17px] md:pl-[17px] pl-[5px] font-bold h-[19px] mb-[10px] mt-[10px] text-[#000000] text-left font-sans">
                    Google
                  </p>
                  <p className="pt-1">company Id</p>
                </div>
              </div>
            </div>
            <div className="mt-[19px] mx-3 flex flex-col gap-5">
              {showApply ? (
                <button
                  className="bg-[#5E9AF8] py-3 text-18 font-bold px-9 text-white rounded-2xl"
                  onClick={handleApply}
                >
                  Apply
                </button>
              ) : (
                <button
                  className="bg-[#F3F5F8] py-3 text-18 font-bold px-9 text-[#5E9AF8] rounded-2xl"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>

          <div className="flex m-3 ">
            <img
              src={experienceicon.src}
              alt=""
              className="w-[44px] h-[44px]"
            />

            <p className="h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl">
              {finaldata[0]?.experience
                ? `${finaldata[0]?.experience} yrs Experience`
                : "NA"}
            </p>
          </div>

          <div className="flex m-3 ">
            <img src={building.src} alt="" className="w-[44px] h-[44px]" />
            <p className="h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl">
              {finaldata[0]?.industryType ? finaldata[0]?.industryType : "NA"}
            </p>
          </div>
          <div className="flex m-3 ">
            <img src={money.src} alt="money" className="w-[44px] h-[44px]" />
            <p className="h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl">
              {finaldata[0]?.salary ? finaldata[0]?.salary : "NA"}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex m-3 ">
              <img
                src={laptop.src}
                alt="laptop"
                className="w-[44px] h-[44px]"
              />
              <p className="h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl">
                {finaldata[0]?.jobType ? finaldata[0]?.jobType : "NA"}
              </p>
            </div>
            <div>
              <img src={bookmark.src} alt="bookmark" onClick={saveData} />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex m-3 ">
              <img src={location.src} alt="" className="w-[44px] h-[44px]" />
              <p className="h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl">
                {finaldata[0]?.location ? finaldata[0].location : "NA"}
              </p>
            </div>
            <div>
              <img
                src={chaticon.src}
                alt="chat"
                // className='w-[54px] h-[54px]'
              />
            </div>
          </div>
          <hr className=" w-[100%] xl:my-0 lg:my-0 md:my-[2px] sm:my-[2px] my-[25px]"></hr>

          <div className="flex m-3 ">
            <img
              src={scheduler.src}
              alt="calender"
              className="w-[44px] h-[44px]"
            />
            <p className="h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl">
              {finaldata[0]?.deadline ? finaldata[0]?.deadline : "NA"}
            </p>
          </div>
          <div className="flex m-3 ">
            <img src={mail.src} alt="mail" className="w-[44px] h-[44px]" />
            <p className="h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl">
              {finaldata[0]?.email ? finaldata[0]?.email : "NA"}
            </p>
          </div>
          <div className="flex m-3 ">
            <img
              src={call.src}
              alt="Phone number"
              className="w-[44px] h-[44px]"
            />
            <p className="h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl">
              {finaldata[0]?.phoneNumber ? finaldata[0]?.phoneNumber : "NA"}
            </p>
          </div>
          <hr className=" w-[100%] xl:my-0 lg:my-0 md:my-[2px] sm:my-[2px] my-[25px]"></hr>
          <div className="flex m-3 ">
            <p className="h-[19px] mb-[15px] mt-[13px] text-left font-normal text-[#666666] opacity-1 mr-2 ml-4 text-xl">
              {finaldata[0]?.description ? finaldata[0]?.description : "NA"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainSearch;
