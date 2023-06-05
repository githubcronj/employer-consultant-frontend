import React, { useState } from "react";
import HeaderProfile from "Components/viewProfile/headerProfile";
import LeftProfile from "Components/viewProfile/leftProfile";
import RightProfile from "Components/viewProfile/rightProfile";
import { useEffect } from "react";
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
    <div className='bg-[#2B373C1C] pt-1 px-3 sm:px-10 h-fit'>
      <div>
        <HeaderProfile />
      </div>
      <div
        className='flex bg-white'
        style={{
          flexDirection: flexing ? "column" : "row",
          scrollbarWidth: "none",
        }}
      >
        <LeftProfile />
        <RightProfile />
      </div>
    </div>
  );
};
export default ViewProfile;
