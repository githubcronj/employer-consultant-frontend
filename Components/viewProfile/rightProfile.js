import React, { useState, useEffect } from "react";
import { GET_PROFILE_REQUEST } from "store/type/viewProfileType";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import moment from "moment";

const RightProfile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [flexing, setFlexing] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 700) {
      setFlexing(true);
    } else {
      setFlexing(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const response = useSelector(
    (state) => state.viewProfileReducer?.CurrentUser
  );

  console.log("in right", response);

  useEffect(() => {
    dispatch({ type: GET_PROFILE_REQUEST, payload });
  }, []);

  return (
    <div
      className={`w-[100%] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[620px] h-auto`}
      style={{ overflow: "auto", scrollbarWidth: "none" }}
    >
      <div>
        <div className="bg-[#F9F6EE] p-3">
          <div
            className="flex justify-between px-2"
            style={{
              flexDirection: flexing ? "column" : "row",
              scrollbarWidth: "none",
            }}
          >
            <p>Date of Birth</p>
            <p>{response?.dob}</p>
          </div>
          <hr className="my-3  w-[100%] border"></hr>
          <div
            className="flex justify-between px-2"
            style={{ flexDirection: flexing ? "column" : "row" }}
          >
            <p>Gender</p>
            <p>{response?.gender}</p>
          </div>
        </div>
        <div>
          <div className="bg-white p-3">
            <p className="font-bold p-2">Skills</p>
            {response?.skill?.skillName?.map((item, index) => {
              return (
                <div key={index}>
                  <p className="px-2">{item}</p>
                  <hr className="my-3  w-[100%] border"></hr>
                </div>
              );
            })}
          </div>
          {response?.experience?.map((item, index) => {
            return (
              <div className="bg-[#F9F6EE] p-3" key={index}>
                <p className="font-bold p-2 ">Experience</p>
                <div
                  className="flex px-2 justify-between "
                  style={{
                    flexDirection: flexing ? "column" : "row",
                    alignItems: flexing ? "baseline" : "center",
                  }}
                >
                  <div>
                    <p className="font-semibold py-2 text-black-100">
                      {item?.companyName}
                    </p>
                    <p>{item?.jobPosition}</p>
                  </div>
                  <div className="flex gap-3 pt-0 items-center">
                    <p>{item?.employmentType}</p>
                    <p className="font-extrabold -mt-1">.</p>
                    <p>2 yrs 1 month</p>
                  </div>
                </div>
                <hr className="my-3  w-[100%] border"></hr>
              </div>
            );
          })}

          <div className="bg-white p-3">
            <p className="font-bold p-2">Education</p>
            {response?.education?.map((item, index) => {
              return (
                <div
                  className="flex justify-between "
                  style={{
                    flexDirection: flexing ? "column" : "row",
                    alignItems: flexing ? "baseline" : "center",
                  }}
                  key={index}
                >
                  <div className="px-2">
                    <p className="pb-2">{item?.degreeName}</p>
                    <p>{item?.institutionName}</p>
                  </div>
                  <div className="px-2">
                    <p>{item?.year}</p>
                  </div>
                </div>
              );
            })}

            <hr className="my-3  w-[100%] border"></hr>
          </div>
          <div className="bg-[#F9F6EE] p-3">
            <p className="font-bold p-2">Project</p>
            {response?.project?.map((item, index) => {
              return (
                <div
                  className="flex justify-between "
                  style={{
                    flexDirection: flexing ? "column" : "row",
                    alignItems: flexing ? "baseline" : "center",
                  }}
                  key={index}
                >
                  <div className="px-2 max-w-[400px] lg:max-w-[200px] ">
                    <p className="font-semibold py-1">{item?.projectName}</p>
                    <p>{item?.projectDescription}</p>
                  </div>
                  <div>
                    {moment(item?.startDate).utc().format("YYYY-MM-DD")} to{" "}
                    {moment(item?.endDate).utc().format("YYYY-MM-DD")}
                  </div>
                </div>
              );
            })}

            <hr className="my-3  w-[100%] border"></hr>
          </div>
          <div className="bg-white pb-2 px-2">
            <p className="font-bold px-2 pt-2">Certification</p>
            {response?.certification?.map((item, index) => {
              return (
                <div
                  className="flex justify-between "
                  style={{
                    flexDirection: flexing ? "column" : "row",
                    alignItems: flexing ? "baseline" : "center",
                  }}
                  key={index}
                >
                  <div className="font-semibold px-2">
                    <p className="py-2">{item?.courseName}</p>
                    <p>{item?.issuingOrganization}</p>
                  </div>
                  <div className="px-2">
                    <a href={item?.credentialUrl} target="_blank">
                      <p className="text-sky-500 font-semibold cursor-pointer">
                        Open
                      </p>
                    </a>
                  </div>
                </div>
              );
            })}

            <hr className="my-3  w-[100%] border"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightProfile;
