/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import backbtn from "../public/Assets/backbtn.svg";
import edit from "../public/Assets/edit.svg";
import google from "../public/Assets/googleIcon.png";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { PROFILE_REQUEST } from "store/type/getProfileType";
import { useSelector } from "react-redux";
import withEmployerAuth from "Components/ProtectedRoute/withEmployerAuth";
import moment from "moment";
const ViewProfile = () => {
  const [flexing, setFlexing] = useState(false);
  const route = useRouter();
  const dispatch = useDispatch();
  const editClick = () => {
    route.push("/editProfile");
  };
  const backClicked = () => {
    route.push("/");
  };
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
    dispatch({ type: PROFILE_REQUEST, payload });
  }, []);
  const data = useSelector((state) => state.getProfileReducer?.CurrentUser);

  useEffect(() => {
    if (window.innerWidth < 420) {
      setFlexing(true);
    } else {
      setFlexing(false);
    }
  }, []);
  console.log(data, "in view profile");
  return (
    <div className={`w-[100%] xl:w-auto lg:w-auto `}>
      <div
        className={`bg-[#2B373C1C] sm:py-2 pt-6 pb-4 sm:pb-4 xl:px-4 px-4 ${
          flexing ? "" : ""
        }`}
      >
        <div
          className="bg-white"
          style={{
            boxShadow: " 0px 2px 10px #4C4E641A",
            borderRadius: "4px",
            maxWidth: "1536px",
            width: "100%",
          }}
        >
          <div
            className={`justify-between xl:mt-[10px] lg:mt-[10px] md:mt-[10px] sm:mt-[10px] pt-[10px] -mt-[10px] xl:pt-[10px] mb-4 lg:pt-[10px] md:pt-[10px] sm:pt-[10px] mx-4 sm:mr-9 sm:ml-[10px] flex gap-4 sm:gap-0 ${
              flexing ? "flex-col items-start " : "flex-row items-center"
            }`}
          >
            <div className="flex items-center gap-x-4 ">
              <img
                src={backbtn.src}
                alt="back button"
                width={46}
                height={46}
                className="cursor-pointer"
                onClick={backClicked}
              />
              <p className=" text-[26px] text-[#2B373C] sm:text-2xl font-bold">
                View Profile
              </p>
            </div>
            <button onClick={editClick}>
              <img src={edit.src} alt="edit" className="w-[125px] h-[51px]" />
            </button>
          </div>
          <hr className="mt-[25px] xl:my-0 lg:my-0 md:my-[2px] sm:my-[2px] my-[5px]"></hr>
          <div className="mx-3 flex flex-col lg:flex-row justify-between">
            <div
              style={{ width: "100%" }}
              className="lg:border-r-2 pt-6 lg:pr-2 "
            >
              <div className="flex items-center mb-[15px]">
                <img
                  src={google.src}
                  alt="googleIcon"
                  className="w-[60px] h-[60px]"
                />
                <p className="pl-4 font-bold text-[#000000] text-left font-sans">
                  {data?.companyName}
                </p>
              </div>

              <hr className=" " style={{ width: "100%" }}></hr>
              <div className="flex justify-between">
                <h4 className="h-[19px] mb-[15px] mt-[15px] text-left font-bold font-sans text-[#000000] opacity-1">
                  Company ID
                </h4>
                <p className="h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1">
                  {data?.companyId}
                </p>
              </div>
              <hr className="xl:my-0 lg:my-0 md:my-[2px] sm:my-[2px] my-[5px]"></hr>
              <div className="flex justify-between">
                <h4 className="h-[19px] mb-[18px] mt-[15px]  text-left font-bold font-sans text-[#000000] opacity-1">
                  Industry type
                </h4>
                <p className="h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1">
                  {data?.industryType}
                </p>
              </div>
              <hr className="xl:my-0 lg:my-0 md:my-[2px] sm:my-[2px] my-[5px]"></hr>
              <div className="flex justify-between">
                <h4 className="h-[19px] mb-[15px] mt-[15px] text-left font-bold font-sans text-[#000000] opacity-1">
                  Email
                </h4>
                <p className="h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1">
                  {data?.email}
                </p>
              </div>
              <hr className="xl:my-0 lg:my-0 md:my-[2px] sm:my-[2px] my-[5px]"></hr>
              <div className="flex justify-between">
                <h4 className="h-[19px] mb-[15px] mt-[15px] text-left font-bold font-sans text-[#000000] opacity-1">
                  Website URL
                </h4>
                <p className="h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1">
                  {data?.companyWebsiteUrl}
                </p>
              </div>
              <hr className="xl:my-0 lg:my-0 md:my-[2px] sm:my-[2px] my-[5px]"></hr>
              <div className="flex justify-between">
                <h4 className="h-[19px] mb-[15px] mt-[15px] text-left font-bold font-sans text-[#000000] opacity-1">
                  Company Size
                </h4>
                <p className="h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1">
                  {data?.companySize}
                </p>
              </div>
              <hr className="xl:my-0 lg:my-0 md:my-[2px] sm:my-[2px] my-[5px]"></hr>
              <div className="flex justify-between">
                <h4 className="h-[19px] mb-[15px] mt-[15px] text-left font-bold font-sans text-[#000000] opacity-1">
                  Company Location
                </h4>
                <p className="h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1">
                  {data?.companyLocation}
                </p>
              </div>
              <hr className="xl:my-0 lg:my-0 md:my-[2px] sm:my-[2px] my-[5px]"></hr>
              <div className="flex justify-between">
                <h4 className="h-[19px] mb-[15px] mt-[15px] text-left font-bold font-sans text-[#000000] opacity-1">
                  Founded In
                </h4>
                <p className="h-[19px] mb-[15px] mt-[15px] text-left font-normal text-[#666666] opacity-1">
                  {moment(data?.companyFoundedDate).utc().format("YYYY-MM-DD")}
                  {/* {data?.companyFoundedDate} */}
                </p>
              </div>
              <hr className="xl:my-0 lg:my-0 md:my-[2px] sm:my-[2px] my-[25px]"></hr>
            </div>
            {/* <div className="border w-[1px] lg:h-[90vh] -mt-[19px] ml-[5px]"></div> */}
            <div className="w-[100%] lg:pl-[30px] mb-10 lg:mb-0 lg:pt-6">
              <h1 className="text-[#1E0F3B] mt-[20px] lg:mt-0 mb-[20px] w-[152px] h-[24px] font-bold tracking-[0.2px]">
                About Company
              </h1>
              <p
                className=" h-auto text-[#1E0F3B] opacity-[0.7] font-normal font-sans text-left"
                style={{ width: "100%" }}
              >
                {data?.aboutCompany}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withEmployerAuth(ViewProfile);
