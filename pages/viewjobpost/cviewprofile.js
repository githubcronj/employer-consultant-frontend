import React, { useState } from "react";
import HeaderProfile from "Components/viewProfile/headerProfile";
import LeftProfile from "Components/viewProfile/leftProfile";
import RightProfile from "Components/viewProfile/rightProfile";
import { useEffect } from "react";
import withConsultantAuth from "Components/ProtectedRoute/withConsultantAuth";
import JobAlert from "Components/SearchJob/jobAlert";
const ViewProfile = () => {
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
  }, [handleResize]);

  return (
    <div className="bg-[#2B373C1C] pt-1 px-3 sm:px-10 pb-4 h-fit max-w-[1536px] mx-auto w-full ">
      <div>
        <HeaderProfile />
      </div>
      <div
        className="flex bg-white flex-col lg:flex-row"
        style={{
          // flexDirection: flexing ? "column" : "row",
          scrollbarWidth: "none",
          borderRadius: "10px",
        }}
      >
        <LeftProfile />
        <RightProfile />
        <JobAlert />
      </div>
    </div>
  );
};
export default withConsultantAuth(ViewProfile);
